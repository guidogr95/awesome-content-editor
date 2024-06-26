import { toast } from "react-toastify";
import AssetItemModal from "./asset-item-modal";
import { AssetData } from "../../../shared/types/assets";
import { AssetDeletePrompt } from "./asset-delete-prompt";
import { useAssetManagerContext } from "@/context/asset-manager-context/use-asset-manager-context";
import { useCallback } from "react";
import { useAuthContextSelector } from "@/context";

type Props = AssetData & {
}

export function useAssetItemManagerActions(props: Props) {

  const {
    handleDeleteAsset,
  } = useAssetManagerContext();

  const {
    user
  } = useAuthContextSelector(state => state.authState);

  const onDeleteAsset = useCallback(() => {
    if (!user?.uid) return;
    handleDeleteAsset({
      userId: user.uid, 
      assetId: props.id
    });
  }, [handleDeleteAsset, props.id, user?.uid]);

  const handleEdit = () => {
    toast(
      <AssetItemModal isEditMode assetData={props} />,
      {
        containerId: "uploader"
      }
    );
  };

  const handleDelete = () => {
    toast(
      <AssetDeletePrompt onConfirm={onDeleteAsset} />,
      {
        containerId: "delete"
      }
    );
  };

  const handleDownload = () => {
    window.open(props.url, "_blank");
  };

  return {
    handleEdit,
    handleDelete,
    handleDownload
  };
}