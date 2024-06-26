import { ServiceAccount, credential, storage } from "firebase-admin";
import serviceAccount from "./service-account-key.json";
import { getApp, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getDatabase } from "firebase-admin/database";

const admin =
  getApps().length === 0 
	? initializeApp({
		credential: credential.cert(serviceAccount as ServiceAccount),
		storageBucket: "gs://awesome-content-editor.appspot.com",
		databaseURL: "https://awesome-content-editor-default-rtdb.firebaseio.com"
	}) 
	: getApp();

const db = getDatabase(admin);
const authAdmin = getAuth(admin);
const store = storage().bucket();

export {
	admin,
	db,
	authAdmin,
	store
};