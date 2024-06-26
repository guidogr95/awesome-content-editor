import React from "react";
import { AssetData } from "../../../shared/types/assets";
import { FaRegFileLines, FaFileAudio, FaFilePdf, FaFileVideo, FaFile } from "react-icons/fa6";
import { AssetItemManagerActions } from "./asset-item-manager-actions";

type Props = {
  assetData: AssetData
  isInsertMode?: boolean
  onInsert?: (values: AssetData) => void
}

const AssetThumbnail = (props: Props) => {

  const { type, url, name } = props.assetData;


  if (type.includes("image")) {
    return <img className="h-full max-w-12" src={url} alt={name} />;  
  }

  if (type.includes("text")) {
    return <FaRegFileLines />; 
  }

  if (type.includes("audio")) {
    return <FaFileAudio />;
  }

  if (type.includes("pdf")) {
    return <FaFilePdf />;
  }

  if (type.includes("video")) {
    return <FaFileVideo />;
  }

  return <FaFile />;
};

const AssetItem = (props: Props) => {

  const {
    name,
    status,
    tags,
    description,
    type,
    category
  } = props.assetData;

  return (
    <div className="flex gap-5 align-top w-full px-2 py-4 border-b border-solid border-gray-200 last:border-b-0">
      <div className="h-12 w-14 flex justify-center text-3xl items-center">
        <AssetThumbnail assetData={props.assetData} />
      </div>
      <div className="flex flex-col max-w-40 flex-1">
        <h4 className="mt-0 mb-2 leading-4 text-sm">
          {name}
        </h4>
        <span className="text-xs text-lime-500 capitalize">
          {status}
        </span>
        <span className="text-xs text-gray-500">
          {type}
        </span>
      </div>
      <div className="text-gray-600 flex-1 w-full max-w-[18rem] line-clamp-3 text-sm">
        {description}
      </div>
      <div className="leading-4 text-blue-900 w-full flex-1 max-w-[11rem] text-sm">
        {tags}
      </div>
      <div className="flex-1 flex items-start">
        <span className="bg-blue-100 px-2 py-2 rounded-md text-sm text-gray-600 text-xs">
          {category}  
        </span>
      </div>
      <div className="flex-1 max-w-[6rem]">
        <AssetItemManagerActions
          assetData={props.assetData}
          isInsertMode={props?.isInsertMode}
          onInsert={props?.onInsert}/>
      </div>
    </div>
  );
};

export default AssetItem;