import { Context } from '../contexts';
import { isHttpResponse } from '../http';
import { PreHook } from '../interfaces';
import { ServiceManager } from '../service-manager';

export function combinePreHooks(preHooks: PreHook[]): PreHook {
  return async (ctx: Context, services: ServiceManager) => {
    for (const preHook of preHooks) {
      const response = await preHook(ctx, services);
      if (response && isHttpResponse(response)) {
        return response;
      }
    }
  };
}