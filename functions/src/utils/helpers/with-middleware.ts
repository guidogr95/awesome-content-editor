import { CallableContext } from "firebase-functions/v1/https";
import { Handler, Middleware } from "../../../types/middleware";

export const withMiddlewares = (
  middlewares: Middleware[],
  handler: Handler,
) => (data: any, context: CallableContext) => {
  const chainMiddlewares = ([
    firstMiddleware,
    ...restOfMiddlewares
  ]: Middleware[]) => {
    if (firstMiddleware)
      return (
        data: any,
        context: CallableContext,
      ): Promise<any> => {
        try {
          return firstMiddleware(
            data,
            context,
            chainMiddlewares(restOfMiddlewares),
          );
        } catch (error) {
          return Promise.reject(error);
        }
      };

    return handler;
  };

  return chainMiddlewares(middlewares)(data, context);
};