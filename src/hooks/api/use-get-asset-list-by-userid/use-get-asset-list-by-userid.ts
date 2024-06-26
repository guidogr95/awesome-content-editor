import {
  useMutation,
  UseMutationOptions
} from "@tanstack/react-query";
import { HttpsCallableResult } from "firebase/functions";
import { AssetData, GetFilesByUserIdArgs } from "../../../../shared/types/assets";
import { getAssetListByUserId } from "@/firebase/functions";

const MUTATION_KEY = "getAssetListByUserId";

export type GetAssetListRes = {
  assetList: AssetData[]
}

export const useGetAssetListByUserId = (
  options?: Omit<UseMutationOptions<HttpsCallableResult<GetAssetListRes>, Error, GetFilesByUserIdArgs>, "mutationKey" | "mutationFn">) => {
  return useMutation<HttpsCallableResult<GetAssetListRes>, Error, GetFilesByUserIdArgs>({
    mutationKey: [MUTATION_KEY],
    mutationFn: (values) => getAssetListByUserId(values),
    ...options
  });
};