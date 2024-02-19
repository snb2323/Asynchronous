import React, { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";

import { Link } from "react-router-dom";
import mainlogo from '../img/logo.png';


function Navi_var() {
    const [showmenu, setshouwmenu] = useState(false)
    const togglemenu = () => {
        setshouwmenu(!showmenu)
    };

    useEffect(() => {
        const allmenu = document.querySelector(".btni button");
        allmenu.addEventListener('click', () => {
            document.querySelector(".btni").classList.toggle("toggle")
        })


    }, [])

    return (

        <>

            <div className="navivar">
                <div className="mainitem  w-auto position-relative d-flex text-center justify-content-center align-items-center">
                    <ul className='mypg d-flex '>
                        <li >
                            <a href="#">
                                <img src="./img/cart.png" alt="장바구니" height="25" />
                            </a>
                        </li>

                        <li className='px-2'>
                            <a href='https://github.com/snb2323/portfolio' target="_blank" rel="noopener noreferrer" >
                                <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 496 512">
                                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                            </a>
                        </li>
                        <li className=''>
                            <a href='https://www.figma.com/file/3ePwKovJqYTbLRALUgC49p/Untitled?type=design&mode=design&t=XkPtUeNX7ButT7CK-0' target="_blank" rel="noopener noreferrer" >
                                <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 384 512">
                                    <path d="M14 95.8C14 42.9 56.9 0 109.8 0H274.2C327.1 0 370 42.9 370 95.8C370 129.3 352.8 158.8 326.7 175.9C352.8 193 370 222.5 370 256C370 308.9 327.1 351.8 274.2 351.8H272.1C247.3 351.8 224.7 342.4 207.7 326.9V415.2C207.7 468.8 163.7 512 110.3 512C57.5 512 14 469.2 14 416.2C14 382.7 31.2 353.2 57.2 336.1C31.2 319 14 289.5 14 256C14 222.5 31.2 193 57.2 175.9C31.2 158.8 14 129.3 14 95.8zM176.3 191.6H109.8C74.2 191.6 45.4 220.4 45.4 256C45.4 291.4 74 320.2 109.4 320.4C109.5 320.4 109.7 320.4 109.8 320.4H176.3V191.6zM207.7 256C207.7 291.6 236.5 320.4 272.1 320.4H274.2C309.7 320.4 338.6 291.6 338.6 256C338.6 220.4 309.7 191.6 274.2 191.6H272.1C236.5 191.6 207.7 220.4 207.7 256zM109.8 351.8C109.7 351.8 109.5 351.8 109.4 351.8C74 352 45.4 380.8 45.4 416.2C45.4 451.7 74.6 480.6 110.3 480.6C146.6 480.6 176.3 451.2 176.3 415.2V351.8H109.8zM109.8 31.4C74.2 31.4 45.4 60.2 45.4 95.8C45.4 131.4 74.2 160.2 109.8 160.2H176.3V31.4H109.8zM207.7 160.2H274.2C309.7 160.2 338.6 131.4 338.6 95.8C338.6 60.2 309.7 31.4 274.2 31.4H207.7V160.2z" /></svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='d-flex justify-content-between align-items-center px-lg-5 py-3 position-relative zup'>
                <h1 className='mb-0 w-0 zup position-relative'>
                    <Link to="/" className='d-block'>
                        <img className='logo ms-4' src={mainlogo} alt='로고' />
                    </Link>
                </h1>
                <div className={`btni  d-md-none `}>
                    <button onClick={togglemenu} className='border-0 bg-transparent '>메뉴</button>
                </div>
                <div className='navi d-lg-flex d-none flex-grow-1 beforemk justify-content-between'>

                    <ul className='d-lg-flex  p-0  m-0 '>

                        <li>
                            <Link to="/Essay">
                                <span>에세이/시</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/Design">
                                <span>디자인/문화</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Illust">
                                <span>만화/일러스트</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Photo">
                                <span>사진</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Postcard">
                                <span>엽서북</span>
                            </Link>
                        </li>
                    </ul>


                    <form className='w-0 d-flex justify-content-end'>
                        <div className='subtn'>
                            <input
                                className="btn_form"
                                type="text"
                                name="keyword"
                                placeholder="Search"
                                defaultValue="" />

                            <CiSearch />
                        </div>
                    </form >

                </div>
            </div>
        </>
    )

}
export default Navi_var