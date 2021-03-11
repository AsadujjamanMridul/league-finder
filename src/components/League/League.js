import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './League.css'
import { Link } from 'react-router-dom';

const League = (props) => {

    const { idLeague, strLeague, strSport } = props.league;

    const [leagueImage, setLeagueImage] = useState('');

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
            .then(res => res.json())
            .then(data => setLeagueImage(data.leagues[0].strBadge));
    }, [idLeague])

    return (
        <div className='league-card col-md-6 col-lg-4 py-3 d-flex justify-content-center'>
            <div className="card card-bg" style={{ width: '22rem' }}>
                <img src={leagueImage} className="card-img-top card-image w-50 league-badge" alt="..." />
                <div className="card-body d-flex justify-content-center">
                    <div>
                        <h5 className="card-title text-center league-title my-2">{strLeague}</h5>
                        <p className="card-text text-center league-type mb-4">Sports type: {strSport}</p>
                        <div className='d-flex justify-content-center'>
                            <Link to={`/detail/${idLeague}`}>
                                <button className="btn-explore mb-3">Explore<FontAwesomeIcon icon={faArrowRight} className='ml-2' /></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default League;