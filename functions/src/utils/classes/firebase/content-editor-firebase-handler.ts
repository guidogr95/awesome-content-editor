import { db, store } from "../../../config/firebase-config";
import { Bucket } from "@google-cloud/storage"
import { Database } from "firebase-admin/database";
import { CreateAssetDataArgs, UpdateAssetDataArgs, UploadAssetArgs } from "./types";

export class ContentEditorFirebaseHandler {
  private readonly db: Database;
  private readonly storage: Bucket

  constructor() {
    this.db = db
    this.storage = store
  }

  public async uploadAsset({
    destinationPath,
    contentType,
    fileData
  }: UploadAssetArgs) {
    try {
      const bufferData = Buffer.from(fileData, "base64");
      const file = this.storage.file(destinationPath);
      const fileStream = file.createWriteStream({
        resumable: false,
        metadata: {
          contentType,
        }
      });
  
      return await new Promise((resolve, reject) => {
        fileStream.on('error', (err) => {
          console.log("guido", err);
          reject(new Error("Something went wrong, could not upload asset"));
        });
  
        fileStream.on('finish', () => {
          resolve('File uploaded successfully');
        });
  
        fileStream.end(bufferData);
      });
    } catch (error) {
      console.error(error);
      throw new Error("Something went wrong, could not upload asset");
    }
  }

  
  public async deleteAsset(destinationPath: string) {
    const fileRef = this.storage.file(destinationPath)
    return await fileRef.delete();
  }

  public async getFileUrl(fileDestination: string, contentType: string) {
    return await this.storage.file(fileDestination).getSignedUrl({
      action: "read",
      expires: "03-01-2500",
      responseType: "arraybuffer",
      queryParams: {
        'response-content-type': contentType
      }
    });
  }

  public async getAssetListByUserId(userId: string) {
    const assetRef = this.db.ref(`assets/${userId}`);
    return await assetRef.once('value');
  }

  public async createAssetData({
    userId,
    options,
    name,
    type,
    id,
    url
  }: CreateAssetDataArgs) {
    const assetRef = this.db.ref(`assets/${userId}/${id}`);
    return await assetRef.set({
      name,
      type,
      url,
      id,
      ...options
    });
  }

  public async updateAssetData({
    userId,
    options,
    name,
    id,
  }: UpdateAssetDataArgs) {
    const assetRef = this.db.ref(`assets/${userId}/${id}`);
    return await assetRef.update({
      name,
      id,
      ...options
    });
  }

  public async deleteAssetData(userId: string, assetId: string) {
    const assetRef = this.db.ref(`assets/${userId}/${assetId}`);
    return await assetRef.remove()
  }
}