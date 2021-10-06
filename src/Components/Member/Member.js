import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Member.css'

const Member = (props) => {
    const { img, name, roll, age, country, remuneration } = props.member;
    return (
        <div className="members-card">
            <div className="card item-card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top rounded-pill w-50 mx-auto" alt="..." />
                <div className="card-body members-info">
                    <h4 className="card-title mt-3">{name}</h4>
                    <h6>Age: {age}</h6>
                    <h6 className="card-text">Country: {country}</h6>
                    <h6>Roll: {roll}</h6>
                    <h6 className="card-text">Remuneration: {remuneration}</h6>

                    <p style={{ fontSize: "24px", padding: "4px" }}>
                        <span > <FontAwesomeIcon icon={faFacebookSquare} /> </span>
                        <span> <FontAwesomeIcon icon={faInstagramSquare} /> </span>
                        <span> <FontAwesomeIcon icon={faTwitterSquare} /> </span>
                    </p>

                    <button
                        onClick={() => { props.handleAddToCast(props.member) }}
                        className="add-btn">
                        <FontAwesomeIcon icon={faSuitcase}></FontAwesomeIcon> Add Cast
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Member;




