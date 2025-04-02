import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const NotFound = () => {
    const navigate = useNavigate();
    
    return(
        <div className="notFound">
            <div className="container">
                <h1>404 - PAGE NOT FOUND</h1>
                <p>The page you are looking for doesn't exist or has been moved.</p>
                <a onClick={() => navigate('/')}>
                    Back to Home <span><HiOutlineArrowNarrowRight /></span>
                </a>
            </div>
        </div>
    )
}

export default NotFound;