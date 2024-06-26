"use client";
import { firebaseAuth } from "@/firebase/config";
import { useMemo } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export function useAuthContext() {
  const [user, authLoading] = useAuthState(firebaseAuth);

  const authState = useMemo(() => {
    return {
      isAuthenticated: !!user,
      user,
      authLoading
    };
  }, [user, authLoading]);

  return {
    authState
  };
}
