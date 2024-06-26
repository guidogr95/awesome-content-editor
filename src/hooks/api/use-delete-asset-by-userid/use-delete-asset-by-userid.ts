import { deleteAssetByUserId } from "@/firebase/functions";
import {
  useMutation,
  UseMutationOptions
} from "@tanstack/react-query";
import { HttpsCallableResult } from "firebase/functions";
import { DeleteAssetByUserIdArgs } from "../../../../shared/types/assets";

const MUTATION_KEY = "deleteAssetByUserId";

export type DeleteAssetRes = {
  status: "success"
}

export const useDeleteAssetByUserId = (
  options?: Omit<UseMutationOptions<HttpsCallableResult<DeleteAssetRes>, Error, DeleteAssetByUserIdArgs>, "mutationKey" | "mutationFn">) => {
  return useMutation<HttpsCallableResult<DeleteAssetRes>, Error, DeleteAssetByUserIdArgs>({
    mutationKey: [MUTATION_KEY],
    mutationFn: (values) => deleteAssetByUserId(values),
    ...options
  });
};