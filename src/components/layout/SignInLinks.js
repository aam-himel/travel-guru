import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

function SignInLinks() {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            {
                (loggedInUser.isSignIn) ? <Link to="/" className="btn btn-main">{loggedInUser.email}</Link>
                : <Link to="/signin" className="btn btn-main">SignIn</Link>
            }
     </div>
    )
}

export default SignInLinks;
