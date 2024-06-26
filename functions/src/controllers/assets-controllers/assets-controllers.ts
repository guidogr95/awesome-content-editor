import { ContentEditorFirebaseHandler } from "../../utils/classes/firebase/content-editor-firebase-handler";
import { CallableContext, HttpsError } from "firebase-functions/v1/https";
import { DeleteAssetByUserIdArgs, GetFilesByUserIdArgs, UpdateAssetByUserIdArgs, UploadAssetByUserIdArgs } from "../../../../shared/types/assets";
import { generateUniqueId } from "../../utils/helpers/generate-unique-id";

const contentEditorDbHandler = new ContentEditorFirebaseHandler();

export const uploadAssetByUserId = async (data: UploadAssetByUserIdArgs, _context: CallableContext) => {
	const { fileName, contentType, fileData, userId, options } = data;
	
	if (!fileName) {
		throw new HttpsError("invalid-argument", "Please specifiy a valid file path")
	}

	if (!contentType) {
		throw new HttpsError("invalid-argument", "Please specifiy a valid content type")
	}

	if (!userId) {
		throw new HttpsError("invalid-argument", "Please specifiy a valid user id")
	}

	const assetId = generateUniqueId();

	try {

		const destinationPath = `${userId}/${assetId}`;

		await contentEditorDbHandler.uploadAsset({
			fileData,
			destinationPath,
			contentType,
			id: assetId,
			name: fileName
		})

		const fileUrlData = await contentEditorDbHandler.getFileUrl(destinationPath, contentType)

		await contentEditorDbHandler.createAssetData({
			userId,
			options,
			name: fileName,
			type: contentType,
			url: fileUrlData[0],
			id: assetId
		})
		
		return { status: "success" }
	} catch(err: any) {
		throw new HttpsError("internal", "Something went wrong could not upload asset");
	}
}

export const deleteAssetByUserId = async (data: DeleteAssetByUserIdArgs, _context: CallableContext) => {
	const { assetId, userId } = data;
	
	if (!assetId) {
		throw new HttpsError("invalid-argument", "Please specifiy a valid asset id")
	}

	if (!userId) {
		throw new HttpsError("invalid-argument", "Please specifiy a valid user id")
	}

	try {

		const destinationPath = `${userId}/${assetId}`;

		await contentEditorDbHandler.deleteAsset(destinationPath)

		await contentEditorDbHandler.deleteAssetData(userId, assetId);
		
		return { status: "success" }
	} catch(err: any) {
		throw new HttpsError("internal", "Something went wrong could not upload asset");
	}
}

export const updateAssetByUserId = async (data: UpdateAssetByUserIdArgs, _context: CallableContext) => {
	const { fileName, assetId, userId, options } = data;
	
	if (!assetId) {
		throw new HttpsError("invalid-argument", "Please specifiy a valid file path")
	}

	if (!userId) {
		throw new HttpsError("invalid-argument", "Please specifiy a valid user id")
	}

	try {

		await contentEditorDbHandler.updateAssetData({
			userId,
			options,
			name: fileName,
			id: assetId
		})
		
		return { status: "success" }
	} catch(err: any) {
		throw new HttpsError("internal", "Something went wrong could not upload asset");
	}
}

export const getAssetListByUserId = async (data: GetFilesByUserIdArgs, _context: CallableContext) => {
	const { userId } = data;

	if (!userId) {
		throw new HttpsError("invalid-argument", "Please specifiy a valid user id")
	}

	try {

		const assetsRes = await contentEditorDbHandler.getAssetListByUserId(userId)
		
		return { assetList: assetsRes.val() }
	} catch(err: any) {
		throw new HttpsError("internal", "Something went wrong could not fetch assets");
	}
}