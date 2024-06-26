"use client";
import React from "react";
import { Button } from "../shared";
import { useAssetManagerPanel } from "./use-asset-manager-panel";
import { ToastContainer } from "react-toastify";
import AssetList from "./asset-list";
import { AssetData } from "../../../shared/types/assets";

type Props = {
  isInsertMode?: boolean,
  onInsert?: (values: AssetData) => void
}

const AssetManagerPanel = ({
  isInsertMode,
  onInsert
}: Props) => {
  const {
    handleUploadClick
  } = useAssetManagerPanel();

  return (
    <div className="flex flex-col p-6 lg:h-full">
      <div className="flex flex-col">
        <h2 className="mb-8 text-2xl text-gray-600 font-medium">Asset Manager</h2>
        <div className="self-end">
          <Button
            onClick={handleUploadClick}>
              Upload
          </Button>
          <ToastContainer containerId="notification" />
          <ToastContainer
            className="center-toast"
            containerId="uploader"
            position="top-center"
            newestOnTop={true}
            hideProgressBar={true}
            autoClose={false}/>

          <ToastContainer
            className="center-toast"
            containerId="delete"
            position="top-center"
            newestOnTop={true}
            hideProgressBar={true}
            autoClose={false}/>
        </div>
      </div>
      <div className="flex">
        <AssetList isInsertMode={isInsertMode} onInsert={onInsert} />
      </div>
    </div>
  );
};

export default AssetManagerPanel;