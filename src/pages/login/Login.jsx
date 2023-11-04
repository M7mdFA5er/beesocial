import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext';
import './login.scss'

function Login() {

  const { login } = useContext(AuthContext);

  const handleLogin = () =>{
    login();
  }

  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Ea magna qui excepteur quis labore laboris velit mollit proident adipisicing.
            Veniam duis cupidatat magna et esse esse tempor nisi duis.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password' />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login