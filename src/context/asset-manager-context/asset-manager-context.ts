import { createSuperContext } from "super-context";
import { AssetData } from "../../../shared/types/assets";

const initialState = {
  assets: undefined as AssetData[] | undefined
};

export const {
  Provider: AssetManagerProvider,
  useStore: useAssetManagerStore
} = createSuperContext(initialState);