import React from "react";
import { Link } from 'react-router-dom';
import datainfo from '../../data/data.json'
import Navibook from "../Styled/navibook";


function Bestbooks() {
    return (
        <>
            <Navibook>
                <h2 className='navivartitle'>Best</h2>
                <div className='newbooks d-flex '>
                    {datainfo.bestbook.map((book, index) => (
                        <div key={index}>

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
export default Bestbooks