import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cast.css';

const Cast = (props) => {
    const { cast } = props;
    let total = 0;
    for (const member of cast) {
        total = total + member.remuneration;
    }
    return (
        <div className="cast-container">
            <h5>Cast Added: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> {props.cast.length}</h5>
            <h5>Total Cost: ${total}</h5>
            <div>
                <ul>
                    {
                        cast.map(name => <p>cast added: {name.name}</p>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Cast;