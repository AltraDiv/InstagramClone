import React from "react";

interface ToastProps {
	message: string;
	type: "success" | "error" | "info";
	isVisible: boolean;
	onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, isVisible, onClose }) => {
	if (!isVisible) return null;

	const toastStyles = {
		success: "bg-green-500 text-white",
		error: "bg-red-500 text-white",
		info: "bg-blue-500 text-white",
	};

	return (
		<div
			className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg transition-all duration-300 ${toastStyles[type]}`}
		>
			<div className="flex items-center justify-between">
				<span>{message}</span>
				<button onClick={onClose} className="ml-4 font-bold">
					×
				</button>
			</div>
		</div>
	);
};

export default Toast;
