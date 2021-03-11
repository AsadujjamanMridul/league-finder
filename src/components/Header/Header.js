import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = (props) => {

    const { from, leagueId } = props;

    const [leagueBadge, setLeagueBadge] = useState('');

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`)
            .then(res => res.json())
            .then(data => setLeagueBadge(data.leagues[0].strBadge));
    }, [leagueId])

    let headerHTML;
    if (from === 'home') {
        headerHTML =
            <div className='col-md-6'>
                <h2 className='text-white font-montserrat mb-5 text-center'>League Finder</h2>

                <form className="col-md-9 m-auto">
                    <div className="input-group input-group-lg mb-3">
                        <input id="meal-input" type="text" className="form-control search-field"
                            placeholder="Search a league" disabled data-bs-toggle="tooltip" data-bs-placement="bottom" title="Currently Unavailable!" />
                        <div className="input-group-append">
                            <button id="search-btn" type="button" className="btn btn-danger" disabled
                                data-bs-toggle="tooltip" data-bs-placement="bottom" title="Currently Unavailable!"><FontAwesomeIcon icon={faSearch} /></button>
                        </div>
                    </div>
                </form>
            </div>
    }
    else {

        headerHTML =
            <div className='d-flex justify-content-center align-items-center'>
                <img src={leagueBadge} alt="" className='w-25' />
            </div>
    }

    return (
        <div className='bg d-flex justify-content-center align-items-center'>
            {headerHTML}
        </div>
    );
};

export default Header;