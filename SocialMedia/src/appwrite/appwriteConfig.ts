import { Client, Databases, Account, Storage } from "appwrite";
import dotenv from "dotenv";

dotenv.config();

const client = new Client();
client
	.setProject(process.env.PROJECT_ID!) 
	.setEndpoint(process.env.ENDPOINT!);

const databases = new Databases(client);
const account = new Account(client);
const storage = new Storage(client);

export { client, databases, account, storage };
