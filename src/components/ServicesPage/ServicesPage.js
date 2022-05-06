import React, { useEffect, useState } from 'react';
import servicesData from '../../servicesData.json';
import Service from '../Service/Service';

const ServicesPage = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        setServices(servicesData);
    }, []);


    return (

        // Services Section

        <div className="container my-5">
            <h2 className="text-center">ALL SERVICES</h2>

            <div className="row d-flex justify-content-center">
                {
                    services.map((service) => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default ServicesPage;