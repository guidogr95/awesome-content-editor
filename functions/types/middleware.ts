import { CallableContext } from "firebase-functions/v1/https";

export type Middleware = (
  data: any,
  context: CallableContext,
  next: (
    data: any,
    context: CallableContext,
  ) => Promise<any>,
) => Promise<any>;

export type Handler = (data: any, context: CallableContext) => Promise<any>