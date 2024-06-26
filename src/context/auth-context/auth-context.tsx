"use client";
import type { PropsWithChildren } from "react";
import { useAuthContext } from "./use-auth-context";
import { AuthProvider } from "./auth-context-provider";

type Props = PropsWithChildren<{}>

export const AuthContext = ({ children }: Props) => {
  const authContext = useAuthContext();

  return <AuthProvider value={authContext}>{children}</AuthProvider>;
};
