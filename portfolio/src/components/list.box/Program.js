import React from "react";
import { Link } from 'react-router-dom';
import datainfo from '../../data/data.json'


function Program() {
    return (
        <>
            <h2 className='navivartitle'>Program</h2>
            <div className='newbooks col-row d-flex '>
                {datainfo.Program.map((book, index) => (
                    <div key={index}>

                        <Link to={`/new-books/${index}`}>
                            <img className='Program' src={book.src} alt={book.alt} />
                        </Link>
                        <h4 style={{ fontSize: "24px" }}>{book.h4}</h4>
                        <p>{book.p}</p>
                    </div>


                ))
                }

            </div>
        </>
    );
}
export default Program