import * as functions from "firebase-functions";
import { withMiddlewares } from "./utils/helpers/with-middleware";
import assertAuthenticated from "./middleware/assert-authenticated";
import { setGlobalOptions } from "firebase-functions/v2/options";
import { 
  uploadAssetByUserId as uploadAsset,
  getAssetListByUserId as getAssetList,
  updateAssetByUserId as updateAsset,
  deleteAssetByUserId as deleteAsset
} from "./controllers/assets-controllers/assets-controllers";

setGlobalOptions({
  timeoutSeconds: 240
})

export const uploadAssetByUserId = functions.https
  .onCall(withMiddlewares([assertAuthenticated], uploadAsset))

export const updateAssetByUserId = functions.https
  .onCall(withMiddlewares([assertAuthenticated], updateAsset))

export const deleteAssetByUserId = functions.https
  .onCall(withMiddlewares([assertAuthenticated], deleteAsset))

export const getAssetListByUserId = functions.https
  .onCall(withMiddlewares([assertAuthenticated], getAssetList))