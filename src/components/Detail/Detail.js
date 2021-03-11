import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faMapMarker, faFlag, faFutbol, faVenusMars } from '@fortawesome/free-solid-svg-icons'

import genderMale from '../../images/male.png'
import genderFemale from '../../images/female.png'
import './Detail.css'

const Detail = () => {

    const { leagueId } = useParams();

    const [leagueInfo, setLeagueInfo] = useState({});
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`)
            .then(res => res.json())
            .then(data => setLeagueInfo(data.leagues[0]));
    }, [leagueId])

    const { strLeague, intFormedYear, strCountry, strSport, strGender, strDescriptionEN } = leagueInfo;
    const { strFacebook, strTwitter, strYoutube } = leagueInfo;

    let genderImg;
    if (strGender === 'Male') {
        genderImg = <img src={genderMale} alt="..." className='w-100' />
    }
    else
    {
        genderImg = <img src={genderFemale} alt="..." className='w-100' />
    }

    return (
        <div className='bg-body pb-5'>
            <Header from={'detail'} leagueId={leagueId} />
            <div className="container">
                <div className="card my-5 detail-card" >
                    <div className="row g-0">
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <div className="card-body">
                                <h5 className="card-title detail-title">{strLeague}</h5>
                                <p className="card-text detail-info"><FontAwesomeIcon icon={faMapMarker} className='mr-2' />Founded: {intFormedYear}</p>
                                <p className="card-text detail-info"><FontAwesomeIcon icon={faFlag} className='mr-2' />Country: {strCountry}</p>
                                <p className="card-text detail-info"><FontAwesomeIcon icon={faFutbol} className='mr-2' />Sports Type: {strSport}</p>
                                <p className="card-text detail-info"><FontAwesomeIcon icon={faVenusMars} className='mr-2' />Gender: {strGender}</p>
                            </div>
                        </div>
                        <div className="genderImg col-md-6 d-flex justify-content-center align-items-center">
                            {genderImg}
                        </div>
                    </div>
                </div>
                <div >
                    <p className="detail-description">
                        {
                            strDescriptionEN
                        }
                        <br />
                        <br />
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis nihil dolore maxime sed repellendus obcaecati eos, natus eligendi. Sit vel animi suscipit excepturi ex explicabo asperiores iusto, laborum perferendis quod veniam placeat, doloribus perspiciatis officiis eius ducimus odit dolore officia, eum qui unde! Enim molestias non tempora inventore. Repudiandae blanditiis quas facere culpa perferendis debitis, laborum ex, optio numquam maiores, commodi quae. Veniam dolorem, voluptates quod recusandae aspernatur distinctio temporibus exercitationem laboriosam ullam dolor reprehenderit vel, dolore, ipsam nobis? Nisi nihil dolor aperiam, officiis veritatis excepturi voluptate sint, repellendus quod fuga animi ad vero! Doloribus aut cum veritatis impedit deleniti consequuntur velit natus illo magni accusamus repudiandae quia sequi dolorum, molestias eum culpa earum animi rerum! Aperiam rem molestiae quo placeat voluptatibus dolor explicabo cumque adipisci alias perferendis perspiciatis dolorum atque saepe architecto sunt aliquam veritatis sit laborum, libero voluptates odit nemo. Est, enim aliquid magnam eligendi autem, quisquam aliquam tenetur consequatur obcaecati labore voluptas vero incidunt quis voluptatibus officia nesciunt. Reiciendis neque non unde impedit similique amet earum maiores, possimus nam deleniti, ut natus distinctio enim sed fugiat repudiandae? Totam laborum veritatis hic optio. Nobis porro, laboriosam corrupti soluta perspiciatis nisi amet, nihil error, asperiores aspernatur iste quos nesciunt natus. Omnis natus amet in suscipit ducimus perferendis doloremque laboriosam, quidem architecto! Quibusdam dolor consequuntur rerum veritatis. Nulla qui, nam voluptatem nemo eius distinctio dolorem dolor ea magnam iure voluptate, iste nihil ex rem fugit tempore quidem minima hic explicabo earum laudantium id pariatur. Neque quos consectetur quasi perspiciatis eveniet adipisci voluptas saepe praesentium. Voluptatibus pariatur sunt similique ipsa voluptatum unde velit illo! Voluptatum beatae nemo, quo pariatur eius iusto quaerat obcaecati ducimus officia, facilis modi quis voluptas aut sit? Exercitationem vel quasi, unde obcaecati asperiores libero tempora culpa fugiat laboriosam alias, illo odio eaque placeat maxime ea sunt dolore?
                    </p>
                </div>
            </div>

            <div className='social-link d-flex justify-content-center align-items-center mt-5'>
                <a href={`https://${strTwitter}`} target='_blank' rel="noreferrer">
                    <FontAwesomeIcon icon={faTwitter} size="2x" className='mr-4 text-white twitter' />
                </a>
                <a href={`https://${strFacebook}`} target='_blank' rel="noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="2x" className='mr-4 text-white facebook' />
                </a>
                <a href={`https://${strYoutube}`} target='_blank' rel="noreferrer">
                    <FontAwesomeIcon icon={faYoutube} size="2x" className='text-white youtube' />
                </a>
            </div>

        </div>
    );
};

export default Detail;