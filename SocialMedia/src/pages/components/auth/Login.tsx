import { account } from "../../../appwrite/appwriteConfig";
import { useTheme } from "../../../contexts/ThemeContext";
import { useState } from "react";
import { useNavigate } from "react-router";

const Login: React.FC = () => {

	const navigate = useNavigate();
	const { isDarkMode } = useTheme();

	const [inputs, setInputs] = useState({
		email: "",
		password: "",
	});

	const loginUser = async () => {
		try {
			const session = await account.createEmailPasswordSession(
				inputs.email,
				inputs.password
			);
			console.log("User logged in:", session);
            navigate("/");
		} catch (error) {
			console.error("Password or Email Incorrect");
		}
	};

	return (
		<>
			<div>
				<input
					type="email"
					id="email"
					placeholder="Email"
					className={`w-full p-1 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
						isDarkMode ? "bg-black" : "bg-white"
					}`}
					value={inputs.email}
					onChange={(e) =>
						setInputs({ ...inputs, email: e.target.value })
					}
				/>
			</div>
			{/* Password Field */}
			<div>
				<input
					type="password"
					id="password"
					placeholder="Password"
					className={`w-full p-1 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
						isDarkMode ? "bg-black" : "bg-white"
					}`}
					value={inputs.password}
					onChange={(e) =>
						setInputs({ ...inputs, password: e.target.value })
					}
				/>
			</div>
			<button
				type="button"
				onClick={() => loginUser()}
				className="w-full p-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
			>
				LogIn
			</button>
		</>
	);
};

export default Login;
