import React, {useState} from "react";
import '../styles/LoginPage.css';
import '../styles.css'
import logo from '../media/draft_logo.png'
import doctor_icon from "../media/doctor_icon.svg"
import user_icon from "../media/user_icon.svg"
import student_icon from "../media/student_icon.svg"
import NavBar from './NavBar';

function LoginPage(){
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const changePWVisibility = () => {
		setShowPassword(!showPassword);
	}
    return(
        <>
        <nav className="nav" style={{height:"50px"}}>
            <a title="DocTalk home" href="/" className="site-title" > 
                <img src={logo} alt="Doctalk.com" className="logo" />
                <div id="motto">Your free helpline to medical concerns!</div>
            </a>
        </nav>
        <section class="bg">
           
            <div class="details">
                <h1 id="login">Login</h1>
                <div class="type">
                    <button class="button" >
                        <img src={user_icon} class="usertype"></img>
                        <div>Public</div>
                    </button>
                    <button class="button">
                        <img src={student_icon} class="usertype"></img>
                        <div> Student</div>
                    </button>
                    <button class="button">
                        <img src={doctor_icon} class="usertype"></img>
                        <div>Doctor</div>
                    </button>
                    
                </div>
                <br></br>
                <br></br>
                <br></br>

                <label id = "username">Username </label>
                <input id="email" placeholder="enter your email"></input>
                <br></br>
                <br></br>
                <br></br>

                <label id="pw">Password </label>
                <input type={showPassword ? 'text' : 'password'} 
					id="password" 
					placeholder="enter your password" 
					value={password} 
					onChange={(event) => setPassword(event.target.value)}
				/>
				<button type='button' onClick={changePWVisibility}> {showPassword ? 'Hide' : 'Show'} Password </button>
				
                <a href="/components/MainPage">
                    <button id= "enterButton" onClick ="/components/MainPage">enter</button>
                </a>
                <br></br>
                <br></br>

                <div id ="create-account">
                    <div>No account?</div>
                    <a id="create-acc-link" href="#">create an account</a>
                </div>
            </div>
        </section>
        </>
    );
}

export default LoginPage;