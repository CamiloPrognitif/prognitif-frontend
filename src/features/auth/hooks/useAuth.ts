// src/features/auth/hooks/useAuth.ts
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { loginService, Credentials } from "../services/authService";

export function useAuth(): UseMutationResult<
  { token: string }, // TData
  Error, // TError
  Credentials, // TVariables
  unknown // TContext
> {
  return useMutation({
    mutationFn: (creds: Credentials) => loginService(creds),
  });
}
