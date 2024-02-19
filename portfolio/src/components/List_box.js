import React from "react"
import { Link } from "react-router-dom";

function List_box() {
    return (
        <>
            <div className='site d-flex justify-content-center align-items-center'>
                <ul className="p-0">
                    <li className="m-1 m-md-1 m-lg-2 mt-5">
                        <Link to="/new-books">
                            <img src='./img/icon1.png' className="img-fluid" alt='신작도서' />
                            <span>신작도서</span>
                        </Link>
                    </li>

                    <li className="m-1 m-md-1 m-lg-2 mt-5">
                        <Link to="Bestbook">
                            <img src='./img/icon2.png' className="img-fluid" alt='베스트'></img>
                            <span>베스트</span>
                        </Link>
                    </li>

                    <li className="m-1 m-md-1 m-lg-2 mt-5">
                        <Link to="Curation">
                            <img src='./img/icon3.png' className="img-fluid" alt='큐레이션'></img>
                            <span>큐레이션</span>
                        </Link>
                    </li>

                    <li className="m-1 m-md-1 m-lg-2 mt-5">
                        <Link to="Goods">
                            <img src='./img/icon4.png' className="img-fluid" alt='굿즈'></img>
                            <span>굿즈</span>
                        </Link >
                    </li>
                    <li className="m-1 m-md-1 m-lg-2 mt-5">
                        <Link to="Program">
                            <img src='./img/icon5.png' className="img-fluid" alt='프로그램'></img>
                            <span>프로그램</span>
                        </Link>
                    </li>

                </ul>

            </div>
        </>
    )
}

export default List_box