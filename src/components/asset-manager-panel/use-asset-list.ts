import { useAssetManagerContext } from "@/context/asset-manager-context/use-asset-manager-context";
import { useEffect } from "react";

export function useAssetList() {

  const {
    assets,
    handleRefetchAssets,
    isFetchingAssets,
    isError
  } = useAssetManagerContext();

  useEffect(() => {
    handleRefetchAssets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    assets,
    isFetchingAssets,
    isError
  };
}