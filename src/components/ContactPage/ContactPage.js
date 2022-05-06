import React from 'react';
import contactImg from '../../assets/images/contact-img.png';

const ContactPage = () => {
    return (
        <div>
            <div className="container top-banner d-flex align-items-center justify-content-center">
                <div className="row d-flex align-items-center">
                    <div className="col-md-12 col-lg-6 text text-dark">
                        <h1>Need more <span className="text-green">info</span>?</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cumque dolor in magnam accusantium
                            eaque accusamus debitis, dicta quisquam deleniti.</p>
                        <button className="text-light btn btn-green">Email Us <i className="fa-solid fa-envelope"></i></button>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <img src={contactImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;