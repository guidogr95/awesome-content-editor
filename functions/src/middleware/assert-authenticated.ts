import { HttpsError } from "firebase-functions/v1/auth";
import { Middleware } from "../../types/middleware";

const assertAuthenticated: Middleware = (data, context, next) => {
  if (!context.auth?.uid)
    throw new HttpsError('unauthenticated', 'Unauthorized.');

  return next(data, context);
};

export default assertAuthenticated;