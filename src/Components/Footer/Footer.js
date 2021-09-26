import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="copyright-text">
            <span><FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> All right reserved by newardevil.com</span>
        </div>
    );
};

export default Footer;