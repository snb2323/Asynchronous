import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';

import datainfo from './data/data.json'
import ListBox from './components/List_box';
// import NewBooks from './components/list.box/New_books';
import NaviVar from './components/navi.var/Navi_var';
import Bestbook from './components/list.box/Bestbook';
import BestSlide from './components/Best_slide';
import DetailNewbooks from './components/Detail_newbooks';
import Result from './components/navi.var/Result.js';
import Design from './components/navi.var/Design';
import Illust from './components/navi.var/Illust';
import Photo from './components/navi.var/Photo';
import Postcard from './components/navi.var/Postcard'
import Curation from './components/list.box/Curation'
import Goods from './components/list.box/Goods'
import Program from './components/list.box/Program'
import Main from './components/Main_.js';
import New from './components/New';
import User from './components/Youbook.js';
import Form from './components/Form';
import Footer from './components/Footer_';
import Scrolltop from './components/Scrollto';

import { productApi } from './api/api.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './lee.scss'

function App() {
    const [content, setgnbdata] = useState(null); // api 변수
    // 라우터 컴포넌트의 타이틀
    const tablenmarr = ['Essay', 'Design', 'Illust', 'Photo', 'Postcard', 'Curation']

    const apireseive = useCallback(async (tn) => {
        try {

            const reqres = await productApi(tn);


            setgnbdata((prevContent) => ({
                ...prevContent, // 이전의 값
                [tn]: [...reqres.data],

            }));

            console.log(content)

        } catch (error) {
            console.log(error);
        }
    }, [])



    useEffect(() => {
        //모든 아쉬운점 비동기프로세스 전부 넘겨줘서 props 전달 시 하위컴포넌트 랜더링지연을 막기위해서...


        apireseive('detail');
        apireseive('essay');
        apireseive('design');
        apireseive('illust');
        apireseive('photo');
        apireseive('postcard');



        apireseive('detailnewbooks');
        apireseive('bestbook');
        apireseive('UserFeedback');
    }, [])







    useEffect(() => {
        console.log(content)
        //랜더링되는 함수 넣지않기  
        // console.log("New 컴포넌트의 넘겨야할 데이터 / 위치 App", content['detail'])

        // console.log("bestbook / 위치 App", content['bestbook'])
        // console.log("design / 위치 App", content['design'])
        // console.log("Essay / 위치 App", content['essay'])

        // 필수 데이터 확인
        console.log("User / 위치 App", "Youbook", content && content['UserFeedback'], content)

    }, [content])

    return (
        <>
            <Scrolltop />
            <NaviVar />
            <Routes>
                {/* {
                    tablenmarr.map((tn, idx) => <Route path={`/:${tn}`} element={<Result  bookdata={content && content} tablenm={tn}  title={tablenmarr[0]} />} />

                    )
                 }  */}


                {/* <Route path="/essay" element={<Result apireseive={() => { apireseive('essay'); }}  bookdata={content && content} tablenm={'essay'} title={tablenmarr[0]} />} />
                <Route path="/design" element={<Result apireseive={() => { apireseive('design'); }} bookdata={content && content} tablenm={'design'} title={tablenmarr[1]} />} />
                <Route path='/illust' element={<Result apireseive={() => { apireseive('illust'); }} bookdata={content && content} tablenm={'illust'} title={tablenmarr[2]} />} />
                <Route path='/photo' element={<Result apireseive={() => { apireseive('photo'); }} bookdata={content && content} tablenm={'photo'} title={tablenmarr[3]} />} />
                <Route path='/postcard' element={<Result apireseive={() => { apireseive('postcard'); }} bookdata={content && content} tablenm={'postcard'} title={tablenmarr[4]} />} /> */}


                <Route path="/essay" element={<Result bookdata={content && content} tablenm={'essay'} title={tablenmarr[0]} />} />
                <Route path="/design" element={<Result bookdata={content && content} tablenm={'design'} title={tablenmarr[1]} />} />
                <Route path='/illust' element={<Result bookdata={content && content} tablenm={'illust'} title={tablenmarr[2]} />} />
                <Route path='/photo' element={<Result bookdata={content && content} tablenm={'photo'} title={tablenmarr[3]} />} />
                <Route path='/postcard' element={<Result bookdata={content && content} tablenm={'postcard'} title={tablenmarr[4]} />} />

            </Routes>

            <Routes>
                <Route path="/" element={
                    <>

                        <BestSlide data={datainfo} />
                        <ListBox></ListBox>
                        <Main bookdata={content && content['bestbook']}></Main>
                        <New bookdata={content && content['detailnewbooks']} ></New>
                        <User bookdata={content && content['UserFeedback']} ></User>
                        <Form></Form>

                    </>
                } />
                {/* <Route path="/new-books/" element={<NewBooks bookdata={"뭐라도 보여줘"} />} /> */}
                <Route path="/Bestbook/" element={<Bestbook />} />
                <Route path="/Curation/" element={<Curation />} />
                <Route path="/Goods/" element={<Goods />} />
                <Route path="/Program/" element={<Program />} />
                <Route path="/new-books/:index" element={<DetailNewbooks bookdata={{ detailbooks: content && content["detailnewbooks"], details: content && content["detail"] }} />} />
            </Routes>
            <Footer></Footer>
        </>
    );
}

export default App;