import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';
import Navibook from './Styled/navibook';
import Price from './Styled/Pirce';

export default function New({ bookdata }) {
    const [heartClick, setHeartClick] = useState(false);

    const handleClick = () => {
        setHeartClick(!heartClick);
    };

    useEffect(() => {
        const btnnElement = document.querySelector('#btnn');
        if (btnnElement) {
            btnnElement.addEventListener('click', () => {
                alert('dadad');
            });

            return () => {
                // Clean up the event listener when the component unmounts
                btnnElement.removeEventListener('click', () => {
                    alert('dadad');
                });
            };
        }
    }, []); // Empty dependency array ensures the effect runs once when the component mounts

    const num = 123456789;
    console.log(num.toLocaleString());

    console.log('자식 컴포넌트에서 받은 데이터:', bookdata);

    return (
        <>
            <Navibook>
                <h1 className='newtitle'>New</h1>
                <div className='as col-row d-flex mb-5'>
                    {bookdata &&
                        bookdata.slice(-8).reverse().map((book, index) => (
                            <div key={index}>
                                <Link to={`/new-books/${book.id}`}>
                                    <div className='newb'>
                                        <img style={{ width: '400px', height: '400px' }} src={book?.src} alt={book?.alt} />
                                        <div className={`fun hidden ${heartClick ? 'heart-red' : ''}`} onClick={handleClick}>
                                            관심상품아이콘
                                        </div>
                                    </div>
                                </Link>
                                <h4>{book?.h4}</h4>
                                <span id='iconn'>
                                    <strong onClick={() => alert('dd')}>
                                        <Price>{String(book?.p).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Price>
                                    </strong>
                                </span>
                            </div>
                        ))}
                </div>
            </Navibook>
        </>
    );
}
