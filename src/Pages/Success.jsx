import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Success = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Auto redirect after 5 seconds
        const timer = setTimeout(() => {
            navigate('/');
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return(
        <div className="notFound">
            <div className="container">
                <h1>RESERVATION SUCCESSFUL!</h1>
                <p>Thank you for your reservation. We look forward to serving you!</p>
                <a onClick={() => navigate('/')}>
                    Back to Home <span><HiOutlineArrowNarrowRight /></span>
                </a>
            </div>
        </div>
    )
}

export default Success;