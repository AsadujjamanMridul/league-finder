import React, { useEffect, useState } from 'react';
import League from '../League/League';
import './Body.css'


const Body = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
            .then(res => res.json())
            .then(data => setLeagues(data.leagues));
    }, [])

    return (
        <div className='d-flex justify-content-center bg-body pt-5'>
            <div className="row container">
                {
                    leagues.map(league => <League league={league} key={league.idLeague}></League>)
                }
            </div>
        </div>
    );
};

export default Body;