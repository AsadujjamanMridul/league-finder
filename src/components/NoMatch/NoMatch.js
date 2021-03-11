import React from 'react';
import Header from '../Header/Header';
import notFoundImg from '../../images/not-found-2.png'
import './NoMatch.css'

const NoMatch = () => {
    return (
        <div className='bg-body mb-0'>
            <Header from={'home'} leagueId={'none'}/>
            <div className="container d-flex justify-content-center align-items-center py-5">
                <img src={notFoundImg} alt="..." className='w-25'/>
            </div>
            <h4 className='not-found-msg mb-0'>
                Sorry! We couldn't find the page you're looking
            </h4>
        </div>
    );
};

export default NoMatch;