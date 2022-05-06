import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {

    const { id, name, image, description } = service;

    const history = useNavigate();
    const showDetails = (id) => {
        const url = `/service/${id}`;
        history(url);
    }

    return (
        <div className="col-md-5 m-3 p-3">
            <div className="card p-3">
                <img src={image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                    <div className="card-footer bg-white border-0">
                        <button onClick={() => showDetails(id)} className="btn btn-green text-light">Learn More <i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
            </div>
        </div>
    );
};

export default Service;