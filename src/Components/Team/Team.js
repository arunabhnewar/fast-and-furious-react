import React, { useEffect, useState } from 'react';
import Cast from '../Cast/Cast';
import Member from '../Member/Member';
import './Team.css';

const Team = () => {
    const [members, setMembers] = useState([]);
    const [cast, setCast] = useState([]);

    useEffect(() => {
        fetch('./rest.json')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, []);

    const handleAddToCast = (member) => {
        const newCast = [...cast, member];
        setCast(newCast);
    }

    return (
        <div className="team-container">
            <div className="members-container">
                {
                    members.map(member => <Member
                        key={member.key}
                        member={member}
                        handleAddToCast={handleAddToCast}
                    ></Member>)
                }
            </div>

            <div className="new-cast-container">
                <Cast cast={cast}></Cast>
            </div>
        </div>
    );
};

export default Team;