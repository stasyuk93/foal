import { NotImplementedError } from '../../errors';
import { ExpressMiddleware } from '../../interfaces';
import { catchErrors } from '../../utils';

import { sendSuccess } from './helpers';
import { RestContext, RestController } from './rest-controller.interface';

export function getDeleteHandler(controller: RestController): ExpressMiddleware {
  return catchErrors(async function handler(req: any, res: any) {
    if (!controller.delete) {
      throw new NotImplementedError();
    }
    const data = await controller.delete(req.foal.context.id, req.foal.context.params);
    sendSuccess(res, 200, data);
  });
}

export function getGetAllHandler(controller: RestController): ExpressMiddleware {
  return catchErrors(async function handler(req: any, res: any) {
    if (!controller.getAll) {
      throw new NotImplementedError();
    }
    const data = await controller.getAll(
      (req.foal.context as RestContext).params
    );
    sendSuccess(res, 200, data);
  });
}

export function getGetHandler(controller: RestController): ExpressMiddleware {
  return catchErrors(async function handler(req: any, res: any) {
    if (!controller.get) {
      throw new NotImplementedError();
    }
    const data = await controller.get(
      (req.foal.context as RestContext).id,
      (req.foal.context as RestContext).params
    );
    sendSuccess(res, 200, data);
  });
}

export function getPatchHandler(controller: RestController): ExpressMiddleware {
  return catchErrors(async function handler(req: any, res: any) {
    if (!controller.patch) {
      throw new NotImplementedError();
    }
    const data = await controller.patch(
      (req.foal.context as RestContext).id,
      (req.foal.context as RestContext).data,
      (req.foal.context as RestContext).params
    );
    sendSuccess(res, 200, data);
  });
}

export function getPostHandler(controller: RestController): ExpressMiddleware {
  return catchErrors(async function handler(req: any, res: any) {
    if (!controller.create) {
      throw new NotImplementedError();
    }
    const data = await controller.create(
      (req.foal.context as RestContext).data,
      (req.foal.context as RestContext).params
    );
    sendSuccess(res, 201, data);
  });
}

export function getPutHandler(controller: RestController): ExpressMiddleware {
  return catchErrors(async function handler(req: any, res: any) {
    if (!controller.update) {
      throw new NotImplementedError();
    }
    const data = await controller.update(
      (req.foal.context as RestContext).id,
      (req.foal.context as RestContext).data,
      (req.foal.context as RestContext).params
    );
    sendSuccess(res, 200, data);
  });
}
