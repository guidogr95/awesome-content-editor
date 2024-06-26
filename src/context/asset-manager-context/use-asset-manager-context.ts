import { useGetAssetListByUserId } from "@/hooks/api/use-get-asset-list-by-userid/use-get-asset-list-by-userid";
import { useAuthContextSelector } from "../auth-context";
import { useAssetManagerStore } from "./asset-manager-context";
import { useMemo } from "react";
import { useDeleteAssetByUserId } from "@/hooks/api/use-delete-asset-by-userid/use-delete-asset-by-userid";

export function useAssetManagerContext() {
  const [assets, ,setters] = useAssetManagerStore(store => store.assets);

  const {
    user
  } = useAuthContextSelector(state => state.authState);

  const userId = user?.uid ? { userId: user.uid } : null;

  const {
		mutate,
    isIdle,
    isPending,
    isError
	} = useGetAssetListByUserId(
		{
			onSuccess: (data) => setters.setAssets(data.data.assetList)
		}
	);

  const handleRefetchAssets = () => {
    if (!userId) return;

    mutate(userId);
  };

  const {
		mutate: handleDeleteAsset
	} = useDeleteAssetByUserId(
		{
			onSuccess: handleRefetchAssets
		}
	);

  const isFetchingAssets = useMemo(() => isIdle || isPending, [isIdle, isPending]);

  return  {
    assets,
    isFetchingAssets,
    handleRefetchAssets,
    isError,
    handleDeleteAsset
  };
}