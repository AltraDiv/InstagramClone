import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import AuthForm from './components/auth/AuthForm';

const Auth: React.FC = () => {
  const { isDarkMode } = useTheme(); 
  const [isLogin, setIsLogin] = React.useState(true);
  return (
		<div
			className={`min-h-screen flex justify-center items-center ${
				isDarkMode ? "bg-black" : "bg-white"
			}`}
		>
			<div className="container max-w-2xl flex h-full flex-row">
				{/* Left Box with Image */}
				<div className="w-1/2 flex flex-col justify-between">
					<img
						src="/auth.png"
						alt="Auth"
						className="w-full h-full object-fill"
					/>
				</div>

				{/* Right Box with Login Inputs */}
				<div className="w-1/2 flex flex-col justify-between h-full p-4">
					<div className="border-2 border-neutral-800 p-4 rounded-lg flex flex-col justify-between h-full">
						<img
							src="/logo.png"
							alt="Logo"
							className="self-center"
						/>
						<AuthForm isLogin={isLogin} />
						<div
							className={`text-center ${
								isDarkMode ? "text-white" : "text-black"
							} p-4`}
						>
							---------- OR ----------
						</div>
						<div className="flex justify-center items-center space-x-4">
							<img
								src="/google.png"
								alt="Google"
								className="w-1/6 h-1/6 object-contain"
							/>
							<span className="text-xl">Login with Google</span>
						</div>
					</div>
					<div className="flex justify-center mt-2 mb-2 space-x-4 border-2 border-neutral-800 p-4 rounded-lg">
						{isLogin ? (
							<div className="whitespace-nowrap">
								Don't have an account?
							</div>
						) : (
							<div className="whitespace-nowrap">
								Already have an account?
							</div>
						)}
						<button
							onClick={() => setIsLogin(!isLogin)}
							className="text-blue-500 hover:underline focus:outline-none"
							cursor-pointer="true"
						>
							{isLogin ? "Signup" : "Login"}
						</button>
					</div>
					{/* Images below the container */}
					<div className="w-full mt-4 flex justify-center space-x-4">
						<img
							src="/playstore.png"
							alt="Playstore"
							className="w-1/2 max-w-full h-auto object-contain"
						/>
						<img
							src="/microsoft.png"
							alt="Microsoft"
							className="w-1/2 max-w-full h-auto object-contain"
						/>
					</div>
				</div>
			</div>
		</div>
  );
};

export default Auth;
