import React from "react";
import { Link } from 'react-router-dom';
import datainfo from '../../data/data.json'


function Curation() {
    return (
        <>
            <h2 className='navivartitle'>Curation</h2>
            <div className='newbooks  d-flex '>
                {datainfo.Curation.map((book, index) => (
                    <div key={index}>

                        <Link to={`/new-books/${index}`}>
                            <img className='Curation' src={book.src} alt={book.alt} />
                        </Link>
                        <h4 style={{ fontSize: "14px" }}>{book.h4}</h4>
                        <p>{book.p}</p>
                    </div>


                ))
                }

            </div>
        </>
    );
}
export default Curation