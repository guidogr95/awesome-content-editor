import { httpsCallable } from "firebase/functions";
import { firebaseFunctions } from "../config";
import { DeleteAssetByUserIdArgs, GetFilesByUserIdArgs, UpdateAssetByUserIdArgs, UploadAssetByUserIdArgs } from "../../../shared/types/assets";
import { UpdateAssetRes, UploadAssetRes } from "@/hooks/api";
import { GetAssetListRes } from "@/hooks/api/use-get-asset-list-by-userid/use-get-asset-list-by-userid";
import { DeleteAssetRes } from "@/hooks/api/use-delete-asset-by-userid/use-delete-asset-by-userid";

export const uploadAssetByUserId = httpsCallable<UploadAssetByUserIdArgs, UploadAssetRes>(
  firebaseFunctions,
  "uploadAssetByUserId",
);

export const updateAssetByUserId = httpsCallable<UpdateAssetByUserIdArgs, UpdateAssetRes>(
  firebaseFunctions,
  "updateAssetByUserId",
);

export const deleteAssetByUserId = httpsCallable<DeleteAssetByUserIdArgs, DeleteAssetRes>(
  firebaseFunctions,
  "deleteAssetByUserId",
);

export const getAssetListByUserId = httpsCallable<GetFilesByUserIdArgs, GetAssetListRes>(
  firebaseFunctions,
  "getAssetListByUserId",
);