import { AssetData } from "../../../shared/types/assets";
import { Button } from "../shared";
import Input from "../shared/ui/input/input";
import { useAssetItemModal } from "./use-asset-item-modal";

type Props = {
  closeToast?: () => void
  isEditMode?: boolean
  assetData?: AssetData
}

const AssetItemModal = ({ closeToast, isEditMode, assetData }: Props) => {

  const {
    onSubmit,
    register,
    errors,
    isProcessing
  } = useAssetItemModal({
    onSuccess: closeToast,
    isEditMode,
    assetData
  });

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={onSubmit}>
        {!isEditMode && (
          <div>
            <Input
              label="Asset"
              type="file"
              {...register("file")}
              error={errors["file"]?.message as string}
              id="file"
              placeholder="Choose File"/>
          </div>
        )}
        <div>
          <Input
            label="Name"
            type="text"
            {...register("name")}
            error={errors["name"]?.message as string}
            id="name"
            placeholder="Enter Asset Name"/>
        </div>
        <div>
          <Input
            label="Description"
            type="text"
            {...register("description")}
            error={errors["description"]?.message as string}
            id="description"
            placeholder="Enter Description"/>
        </div>
        <div>
          <Input
            label="Category"
            type="text"
            {...register("category")}
            error={errors["category"]?.message as string}
            id="category"
            placeholder="Enter Category"/>
        </div>
        <div>
          <Input
            label="Tags"
            type="text"
            {...register("tags")}
            error={errors["tags"]?.message as string}
            id="tags"
            placeholder="Enter Tags"/>
        </div>
        <div>
          <Input
            label="Status"
            type="text"
            {...register("status")}
            error={errors["status"]?.message as string}
            id="status"
            placeholder="Enter Status"/>
        </div>
        <Button
          loading={isProcessing}>
          {isEditMode
            ? "Update File"
            : "Upload File"
          }
        </Button>
    </form>
  );
};

export default AssetItemModal;