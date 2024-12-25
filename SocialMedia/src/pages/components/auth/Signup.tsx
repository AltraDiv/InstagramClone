import { account } from "../../../appwrite/appwriteConfig";
import { useTheme } from "../../../contexts/ThemeContext";
import { useState } from "react";
import Toast from "../styles/Toast";

const Signup: React.FC = () => {
	const [toast, setToast] = useState({
		isVisible: false,
		message: "",
		type: "info",
	});

	const showToast = (message: string, type: "success" | "error" | "info") => {
		setToast({ isVisible: true, message, type });
		setTimeout(
			() => setToast({ isVisible: false, message: "", type }),
			3000
		);
	};

	const signupUser = async (
		username: string,
		email: string,
		password: string
	) => {
		try {
			const session = await account.create(username, email, password);
			console.log("User Signed up:", session);
			showToast("Signup successful!", "success");
		} catch (error: any) {
			console.error("Signup error:", error);
            showToast(error.message || "An error occurred.", "error");
		}
	};

	const [showPassword, setShowPassword] = useState(false);

	const { isDarkMode } = useTheme();

	const [inputs, setInputs] = useState({
		username: "",
		email: "",
		password: "",
	});

	return (
		<>
			{/* Email Field */}
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
			{/* Username Field */}
			<div>
				<input
					type="text"
					id="username"
					placeholder="Username"
					className={`w-full p-1 border border-neutral-700  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
						isDarkMode ? "bg-black" : "bg-white"
					}`}
					value={inputs.username}
					onChange={(e) =>
						setInputs({ ...inputs, username: e.target.value })
					}
				/>
			</div>
			{/* Password Field */}
			<div className="flex items-center space-x-2 border border-neutral-700  w-full p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ">
				<input
					type={showPassword ? "text" : "password"}
					id="password"
					placeholder="Password"
					className={`w-full flex ${
						isDarkMode ? "bg-black" : "bg-white"
					}`}
					value={inputs.password}
					onChange={(e) =>
						setInputs({ ...inputs, password: e.target.value })
					}
				/>
				<button
					type="button"
					onClick={() => setShowPassword(!showPassword)}
					className={isDarkMode ? "text-white" : "text-black"}
				>
					<svg
						className="shrink-0 size-3.5"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						{showPassword ? (
							<>
								<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
								<path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
								<path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
								<line x1="2" x2="22" y1="2" y2="22"></line>{" "}
							</>
						) : (
							<>
								<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
								<circle cx="12" cy="12" r="3"></circle>{" "}
							</>
						)}
					</svg>
				</button>
			</div>

			<button
				onClick={() =>
					signupUser(inputs.username, inputs.email, inputs.password)
				}
				type="button"
				className="w-full p-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
			>
				Signup
			</button>
			<Toast
				message={toast.message}
				type={toast.type as "success" | "error" | "info"}
				isVisible={toast.isVisible}
				onClose={() => setToast({ ...toast, isVisible: false })}
			/>
		</>
	);
};

export default Signup;
