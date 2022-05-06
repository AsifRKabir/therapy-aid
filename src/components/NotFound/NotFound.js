import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="container top-banner d-flex align-items-center justify-content-center">
                <div className="row d-flex align-items-center">
                    <div className="col-12 text-dark d-flex flex-column justify-content-center">
                        <h1 className="text-center">Error <span className="text-green">404</span></h1>
                        <p className="text-center">This link is incorrect or currently unavailable.</p>
                        <Link className="d-flex justify-content-center text-decoration-none" to='/'><button className="btn btn-green text-light">Go Back to Home Page</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;