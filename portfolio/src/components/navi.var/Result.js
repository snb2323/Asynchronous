import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// import datainfo from '../../data/data.json';
import Navibook from '../Styled/navibook';
import Price from '../Styled/Pirce';


export default function Result(props) {
    // 부모 컴포넌트에서 전달받은 props 해체할당
    const { bookdata, tablenm, title } = props;

    // 상태 변수 tn과 그 값을 변경하는 settn 함수를 useState 훅을 사용하여 초기화
    const [tn, settn] = useState(tablenm);

    // 컴포넌트가 렌더링될 때와 tablenm이 변경될 때 실행되는 useEffect 훅
    useEffect(() => {
        // 콘솔에 현재 tablenm 값 출력
        console.log("데이블이름 -----------------------", tablenm);

        // settn 함수를 사용하여 tn 상태 변수에 새로운 값 할당
        settn(tablenm);

        // 콘솔에 결과 컴포넌트 정보 출력
        console.log("여기는 Result컴포넌트", tablenm, "상태변수값", tn, bookdata && bookdata);

    }, [tablenm]);  // useEffect를 tablenm이 변경될 때만 실행하도록 설정


    return (
        <>
            <Navibook>
                <h2 className='navivartitle'>{title && title}</h2>
                <div className='as d-flex '>
                    {bookdata && bookdata[tablenm].map((book, index) => (
                        <div key={index}>
                            <Link to={`/new-books/${book.id}`}>
                                <img style={{ width: "340px", height: "340px" }} className='newb' src={book.src} alt={book.alt} />
                            </Link>
                            <h4>{book.h4}</h4>
                            <Price>{book.p}</Price>
                        </div>
                    ))
                    }
                </div>
            </Navibook>
        </>
    );
}