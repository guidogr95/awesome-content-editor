
export type AssetData = {
	status: string
	category: string
	tags: string
	name: string
	description: string
	id: string
	url: string
	type: string
}

export type AssetDataOptions = Omit<AssetData, "id" | "url" | "name" | "type">

export type UploadAssetByUserIdArgs = {
	fileName: string
	contentType: string
	fileData: string
	userId: string
	options: AssetDataOptions
}

export type DeleteAssetByUserIdArgs = {
	userId: string
	assetId: string
}

export type UpdateAssetByUserIdArgs = {
	fileName: string
	userId: string
	assetId: string
	options: AssetDataOptions
}

export type GetFilesByUserIdArgs = {
	userId: string
}