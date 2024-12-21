import { useTheme } from '../../../contexts/ThemeContext';
import {useState} from 'react';
import Login from './Login';
import Signup from './Signup';

interface AuthFormProps {
    isLogin: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({isLogin}) => {
    const { isDarkMode } = useTheme(); 

    return (
        <div>
            <form className="space-y-4">
                
                {isLogin ? <Login/> : <Signup/> }

            </form>
        </div>
    );
};

export default AuthForm;