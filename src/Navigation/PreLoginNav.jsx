import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Test from '../Test';
import { useNavigate } from 'react-router-dom';
import Home from '../Home';
import '../MasterStyles.css';




function PreLoginNav() {
    const navigate = useNavigate();

    function takemeHome() {
        navigate('/home');
    }
    function signMeUp() {
        navigate('/signup');
    }
    function LoginScreen() {
        navigate('/');
    }

    return (
        <div className="Nav">
            <button onClick={signMeUp}>Create new Account</button>
            <button onClick={LoginScreen}>Login</button>

        </div>


    );
}
export default PreLoginNav;