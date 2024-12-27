import { Client, Databases, Account, Storage, ID } from "appwrite";

const client = new Client();
client
	.setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT!)
	.setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID!);

const databases = new Databases(client);
const account = new Account(client);
const storage = new Storage(client);

export { client, databases, account, storage, ID };