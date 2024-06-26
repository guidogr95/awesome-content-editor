import { createScreenContext } from "@/utils";
import type { useAuthContext } from "./use-auth-context";

type AuthState = ReturnType<typeof useAuthContext>

export const { AuthProvider, useAuthContextSelector } = createScreenContext(
  "Auth",
)<AuthState>();
