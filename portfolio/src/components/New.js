import styled from 'styled-components';
import datainfo from '../data/data.json';
import { Route, Link } from 'react-router-dom';
import Navibook from './Styled/navibook';




export default function New() {
    return (
        <>
            <Navibook>
                <h1 className='newtitle'>New</h1>
                <div className='as col-row  d-flex mb-5'>
                    {datainfo.New.map((book, index) => (
                        <div key={index} >
                            <Link to={`/new-books/${index}`}>
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