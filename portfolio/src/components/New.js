import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import datainfo from '../data/data.json';
import { Route, Link } from 'react-router-dom';
import Navibook from './Styled/navibook';




export default function New({ bookdata }) {

    console.log('자식 컴포넌트에서 받은 데이터:', bookdata);
    return (
        <>
            <Navibook>
                <h1 className='newtitle'>New</h1>
                <div className='as col-row  d-flex mb-5'>
                    {bookdata && bookdata.slice(-8).reverse().map((book, index) => (
                        <div key={index} >
                            <Link to={`/new-books/${book.id}`}>
                                <div className='newb'>
                                    <img style={{ width: "400px", height: "400px" }} src={book.src} alt={book.alt} />
                                    <div className='fun hidden'>관심상품아이콘</div>
                                </div>

                            </Link>
                            <h4>{book.h4}</h4>
                            <p>{book.p}</p>

                        </div>


                    ))
                    }

                </div>
            </Navibook>

        </>
    )


}