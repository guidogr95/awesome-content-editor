import {
  useMutation,
  UseMutationOptions
} from "@tanstack/react-query";
import { HttpsCallableResult } from "firebase/functions";
import { UpdateAssetByUserIdArgs } from "../../../../shared/types/assets";
import { updateAssetByUserId } from "@/firebase/functions";

const MUTATION_KEY = "updateAssetByUserId";

export type UpdateAssetRes = {
  status: "success"
}

export const useUpdateAssetByUserId = (
  options?: Omit<UseMutationOptions<HttpsCallableResult<UpdateAssetRes>, Error, UpdateAssetByUserIdArgs>, "mutationKey" | "mutationFn">) => {
  return useMutation<HttpsCallableResult<UpdateAssetRes>, Error, UpdateAssetByUserIdArgs>({
    mutationKey: [MUTATION_KEY],
    mutationFn: (values) => updateAssetByUserId(values),
    ...options
  });
};