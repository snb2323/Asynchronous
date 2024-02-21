import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import datainfo from '../../data/data.json';
import Navibook from '../Styled/navibook';


export default function Essay({ bookdata, tablenm, title }) {

    const [tn, settn] = useState(tablenm)
    // const tablesql = useRef(tablenm)


    useEffect(() => {
        console.log("데이블이름 -----------------------", tablenm);



        settn(tablenm)
        console.log("여기는 Result컴포넌트", tablenm, "상태변수값", tn, bookdata && bookdata)


    }, [tablenm])



    return (
        <>
            <Navibook>
                <h2 className='navivartitle'>{title && title}</h2>
                <div className='as d-flex '>
                    {bookdata && bookdata[tablenm].map((book, index) => (
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