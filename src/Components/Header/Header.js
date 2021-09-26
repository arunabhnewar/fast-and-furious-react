import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="promo">
                <h5 className="movie-name">Fast and Furious 10</h5>
                <h6 className="budget">Estimated budget: <span className="amount">200 Million</span> </h6>
                <span className="tagline">If you have what it takes... You can have it ALL!</span>
            </div>
            <nav>
                <a href="/home">Home</a>
                <a href="/franchise">Franchise</a>
                <a href="/cast">Cast</a>
                <a href="/boxOffice">Box Office</a>
                <a href="/award">Award</a>
            </nav>
        </div>
    );
};

export default Header;