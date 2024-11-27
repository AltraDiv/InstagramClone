// App.tsx
import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import { useTheme } from "./contexts/ThemeContext";
import Auth from "./pages/Auth";
import PageLayout from "./layouts/PageLayout";
import ProfilePage from "./pages/ProfilePage";

const App: React.FC = () => {
	const { isDarkMode } = useTheme();
	return (
		<div
			className={`min-h-screen ${
				isDarkMode ? "bg-black text-white" : "bg-white text-black"
			}`}
		>
			<PageLayout>
				<div className="min-h-screen">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route caseSensitive path="/auth" element={<Auth />} />
						<Route path="/:username" element={<ProfilePage />} />
						<Route path="/*" element={<h1>Not Found</h1>} />
					</Routes>
				</div>
			</PageLayout>
		</div>
	);
};

export default App;
