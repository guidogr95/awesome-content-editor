import { AssetDataOptions } from "../../../../../shared/types/assets"

export type UploadAssetArgs = {
  destinationPath: string
  contentType: string
  id: string
  name: string
  fileData: string
}

export type CreateAssetDataArgs = {
  userId: string
  name: string
  type: string
  url: string
  id: string
  options: AssetDataOptions
}

export type UpdateAssetDataArgs = Omit<CreateAssetDataArgs, "type" | "url">
