import React from 'react';
import aboutImg from '../../assets/images/about-img.png';

const AboutPage = () => {
    return (
        <div>
            <div className="container top-banner d-flex align-items-center justify-content-center">
                <div className="row d-flex align-items-center">
                    <div className="col-md-12 col-lg-6 text text-dark">
                        <h1>THE <span className="text-green">TRIFECTA</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cumque dolor in magnam accusantium
                            eaque accusamus debitis, dicta quisquam deleniti.</p>
                        <button className="text-light btn btn-green">Follow Us <i className="fa-solid fa-user-plus"></i></button>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <img src={aboutImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;