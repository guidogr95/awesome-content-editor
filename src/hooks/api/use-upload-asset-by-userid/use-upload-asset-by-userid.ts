import {
  useMutation,
  UseMutationOptions
} from "@tanstack/react-query";
import { HttpsCallableResult } from "firebase/functions";
import { UploadAssetByUserIdArgs } from "../../../../shared/types/assets";
import { uploadAssetByUserId } from "@/firebase/functions";

const MUTATION_KEY = "uploadAssetByUserId";

export type UploadAssetRes = {
  status: "success"
}

export const useUploadAssetByUserId = (
  options?: Omit<UseMutationOptions<HttpsCallableResult<UploadAssetRes>, Error, UploadAssetByUserIdArgs>, "mutationKey" | "mutationFn">) => {
  return useMutation<HttpsCallableResult<UploadAssetRes>, Error, UploadAssetByUserIdArgs>({
    mutationKey: [MUTATION_KEY],
    mutationFn: (values) => uploadAssetByUserId(values),
    ...options
  });
};