import { ChangeEvent } from "react";
import { toast } from "react-toastify";
import AssetItemModal from "./asset-item-modal";

export function useAssetManagerPanel() {
  

  const handleUploadClick = () => {
    toast(
      <AssetItemModal />,
      {
        containerId: "uploader"
      }
    );
  };

  return {
    handleUploadClick,
  };
}