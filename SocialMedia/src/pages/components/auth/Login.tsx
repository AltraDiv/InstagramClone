import { account } from "../../../appwrite/appwriteConfig";

export const loginUser = async (email: string, password: string) => {
	try {
		const session = await account.createEmailPasswordSession(email, password);
		console.log("User logged in:", session);
	} catch (error) {
		console.error("Login error:", error);
	}
};