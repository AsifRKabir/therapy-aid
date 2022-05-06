import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import servicesData from '../../servicesData.json';
import './ServiceDetails.css';

const ServiceDetails = () => {

    const {id} = useParams();

    const [service, setService] = useState([]);

    useEffect(() => {
        setService(servicesData.find(s => s.id.toString() === id));
    }, [id])

    return (
        <div>
            <div className="container top-banner d-flex align-items-center justify-content-center">
                <div className="row d-flex align-items-center">
                    <div className="col-md-12 col-lg-6 text text-dark">
                        <h1><span className="text-green">{service.name}</span></h1>
                        <h5>{service.description}</h5>
                        <p>Duration: <span className="text-green">{service.duration}</span> hrs</p>
                        <p>Rating: <span className="text-green">{service.rating}</span> <i className="fa-solid fa-star rating-icon"></i></p>
                        <p>Price: $<span className="text-green">{service.price}</span></p>
                        <button className="text-light btn btn-green">Buy Now <i className="fa-solid fa-cart-shopping"></i></button>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <img src={service.image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;