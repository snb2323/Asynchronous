import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import datainfo from '../../data/data.json';
import Navibook from '../Styled/navibook';

export default function Photo() {
    return (


        <>
            <Navibook>
                <h2 className='navivartitle'>Photo</h2>
                <div className='newbooks col-row d-flex '>
                    {datainfo.photo.map((book, index) => (
                        <div key={index}>
                            <Link to={`/new-books/${index}`}>
                                <img style={{ width: "340px", height: "340px" }} className='newb' src={book.src} alt={book.alt} />
                            </Link>
                            <h4>{book.h4}</h4>
                            <p>{book.p}</p>
                        </div>
                    ))
                    }
                </div>
            </Navibook>
        </>

    );
}
