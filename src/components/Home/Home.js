import React, { useEffect, useState } from 'react';
import bannerImg from '../../assets/images/banner-img.png';
import './Home.css';
import servicesData from '../../servicesData.json';
import Service from '../Service/Service';
import { Link } from 'react-router-dom';

const Home = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        setServices(servicesData.slice(0, 4));
    }, []);

    return (
        <div>
            {/* Banner Section */}

            <section id="top-banner" className="container top-banner d-flex align-items-center">
                <div className="row d-flex align-items-center">
                    <div className="col-md-12 col-lg-6 text-dark">
                        <h1>YOU ARE NEVER<span className="text-green"> ALONE</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cumque dolor in magnam accusantium
                            eaque accusamus debitis, dicta quisquam deleniti.</p>
                        <a href="#services" className="text-light btn btn-green">See Our Services <i className="fa-solid fa-chevron-down"></i></a>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <img src={bannerImg} alt="" />
                    </div>
                </div>
            </section>

            {/* Services Section */}

            <section id="services" className="container mb-5">
                <h2 className="text-center">SERVICES</h2>

                <div className="row d-flex justify-content-center">
                    {
                        services.map((service) => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </section>

            <section className="container mb-5 d-flex justify-content-center">
                    <Link to='/services'><button className="btn btn-green text-light">See All Services</button></Link>
                    <a href="#top-banner" className="ms-2 btn btn-green text-light">Go To Top <i className="fa-solid fa-arrow-up"></i></a>
            </section>
        </div>
    );
};

export default Home;