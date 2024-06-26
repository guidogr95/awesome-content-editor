
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../shared";
import { useAssetItemManagerActions } from "./use-asset-item-manager-actions";
import { AssetData } from "../../../shared/types/assets";

type Props = {
  assetData: AssetData
  isInsertMode?: boolean
  onInsert?: (value: AssetData) => void
}

export const AssetItemManagerActions = (props: Props) => {

  const {
    handleEdit,
    handleDelete,
    handleDownload
  } = useAssetItemManagerActions(props.assetData);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Actions</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
        <DropdownMenuItem onClick={handleDelete} >Remove</DropdownMenuItem>
        <DropdownMenuItem onClick={handleDownload}>Dowload</DropdownMenuItem>
        {props?.isInsertMode && <DropdownMenuItem onClick={() => props.onInsert?.(props.assetData)} >Insert</DropdownMenuItem>}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};