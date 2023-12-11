import { createUserAccount } from "@/lib/appwrite/api";
import { INewUser } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function useCreateUserAccount() {
  return useMutation({
    mutationFn: (user: INewUser) => createUserAccount(user),
  });
}
