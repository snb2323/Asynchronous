import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import datainfo from '../../data/data.json'
import Navibook from '../Styled/navibook';

function Listnew({ bookdata }) {

    useEffect(() => {
        console.log(`bookdata 확인해줘 ${bookdata}`)
    }, [])

    return (
        <>
            <Navibook>
                <h2 className='navivartitle'>New</h2>
                <div className='as col-row d-flex '>
                    {datainfo.bestbook.map((book, index) => (
                        <div key={index} >
                            <Link to={`/new-books/${index}`}>
                                <img className='newb' src={book.src} alt={book.alt} />
                            </Link>
                            <h4 style={{ fontSize: "14px" }}>{book.h4}</h4>
                            <p>{book.p}</p>
                        </div>
                    ))
                    }
                </div>
            </Navibook>

        </>
    );
}

export default Listnew;
