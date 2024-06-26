import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";
import { fileUpdateSchema, fileUploadSchema } from "./schemas";
import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useAuthContextSelector } from "@/context";
import { AssetData, UpdateAssetByUserIdArgs, UploadAssetByUserIdArgs } from "../../../shared/types/assets";
import { useUpdateAssetByUserId, useUploadAssetByUserId } from "@/hooks/api";
import { toast } from "react-toastify";
import { useAssetManagerContext } from "@/context/asset-manager-context/use-asset-manager-context";

type Props = {
  onSuccess?: () => void
  isEditMode?: boolean
  assetData?: AssetData
}

export function useAssetItemModal({
  onSuccess: handleSuccess,
  isEditMode,
  assetData
}: Props) {

  const {
    user
  } = useAuthContextSelector(state => state.authState);

  const {
    handleRefetchAssets,
  } = useAssetManagerContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({ resolver: yupResolver(isEditMode ? fileUpdateSchema : fileUploadSchema) });

  const [uploadFileData, setUploadFileData] = useState<UploadAssetByUserIdArgs | null>(null);

  const [updateFileData, setUpdateFileData] = useState<UpdateAssetByUserIdArgs | null>(null);

  const onUploadSuccess = useCallback(() => {
    handleSuccess?.();
    handleRefetchAssets();
    const successMsg = isEditMode
      ? "Update Successful!"
      : "Upload Successful!";
    toast.success(successMsg, {
      pauseOnHover: false,
      autoClose: 2000,
      containerId: "notification"
    });
  }, [handleRefetchAssets, handleSuccess, isEditMode]);

  const onDoneProcessing = useMemo(() => {
    return {
      onSuccess: onUploadSuccess,
      onError: () => {
        toast.error("Unexpected Error", {
          pauseOnHover: false,
          autoClose: 2000,
          containerId: "notification"
        });
      },
      onSettled: () => setUploadFileData(null)
    };
  }, [onUploadSuccess]);

  const {
		mutate: handleUpload,
    isPending: isSavingFile
	} = useUploadAssetByUserId(onDoneProcessing);


  const {
		mutate: handleUpdate,
    isPending: isUpdatingFile,
	} = useUpdateAssetByUserId(onDoneProcessing);

  useEffect(() => {
    if (!(isEditMode && assetData && user?.uid)) {
      return;
    }

    setValue("name", assetData.name);
    setValue("description", assetData.description);
    setValue("category", assetData.category);
    setValue("tags", assetData.tags);
    setValue("status", assetData.status);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!uploadFileData || isEditMode) return;

    handleUpload(uploadFileData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uploadFileData, isEditMode]);

  useEffect(() => {
    if (!updateFileData || !isEditMode) return;

    handleUpdate(updateFileData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateFileData, isEditMode]);

  const onSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    if (!user?.uid) return;

    handleSubmit((values: FieldValues) => {

      if (isEditMode && assetData?.id) {
        setUpdateFileData({
          fileName: values.name,
          userId: user.uid,
          options: {
            status: values.status,
            category: values.category,
            description: values.description,
            tags: values.tags
          },
          assetId: assetData.id
        });
        return;
      } 

      const file = values.file && values.file[0];
      if (!file) return;

      const fileReader = new FileReader();
      fileReader.onload = async (e: ProgressEvent<FileReader>) => {
        setUploadFileData({
          fileData: (e.target?.result as string).split("base64,")[1],
          fileName: values.name,
          contentType: file.type,
          userId: user.uid,
          options: {
            status: values.status,
            category: values.category,
            description: values.description,
            tags: values.tags
          }
        });

      };

      fileReader.readAsDataURL(file);
    })();

  }, [assetData?.id, handleSubmit, isEditMode, user?.uid]);


  return {
    onSubmit,
    register,
    errors,
    isProcessing: isUpdatingFile || isSavingFile
  };
}