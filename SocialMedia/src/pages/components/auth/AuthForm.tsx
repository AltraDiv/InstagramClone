import { useTheme } from '../../../contexts/ThemeContext';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthFormProps {
    isLogin: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({isLogin}) => {
    const navigate = useNavigate(); 
    const { isDarkMode } = useTheme(); 
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const handleAuth = () => {
        if (inputs.email == '' || inputs.password == '' || (!isLogin && inputs.confirmPassword == '')) {
            alert('Please fill out all fields');
            return;
        }
        navigate('/');
    };
    return (
        <div>
            <form className="space-y-4">
                {/* Email Field */}
                <div>
                    <input
                        type="text"
                        id="email"
                        placeholder="Email"
                        className={`w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? "bg-black" : "bg-white"}`}
                        value={inputs.email}
                        onChange={(e) => setInputs({...inputs, email: e.target.value})}
                    />
                </div>
                {/* Password Field */}
                <div>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        className={`w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? "bg-black" : "bg-white"}`}
                        value={inputs.password}
                        onChange={(e) => setInputs({...inputs, password: e.target.value})}
                    />
                </div>
                {/* Confirm Password Field */}
                {!isLogin && (
                    <div>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            className={`w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? "bg-black" : "bg-white"}`}
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                        />
                    </div>
                )}

                {/* Submit Button */}
                <button type="button" className="w-full p-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={handleAuth}
                >
                    {isLogin ? 'Login' : 'Sign Up'}
                </button>
            </form>
        </div>
    );
};

export default AuthForm;