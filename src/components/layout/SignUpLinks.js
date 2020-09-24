import React from 'react';
import { Link } from 'react-router-dom';

function SignUpLinks() {
    return (
        <div>
            <Link to="/signup" className="btn btn-main">SignUp</Link>
        </div>
    )
}

export default SignUpLinks;
