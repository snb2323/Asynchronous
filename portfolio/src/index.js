import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route, Switch
} from 'react-router-dom';
import './index.css';
import './lee.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import datainfo from './data/data.json'
import List_box from './components/List_box';
import New_books from './components/list.box/New_books';
import Navi_var from './components/navi.var/Navi_var';
import Bestbook from './components/list.box/Bestbook';
import Best_slide from './components/Best_slide';
import Detail_newbooks from './components/Detail_newbooks';
import Essay from './components/navi.var/Essay';
import Design from './components/navi.var/Design';
import Illust from './components/navi.var/Illust';
import Photo from './components/navi.var/Photo';
import Postcard from './components/navi.var/Postcard'
import Curation from './components/list.box/Curation'
import Goods from './components/list.box/Goods'
import Program from './components/list.box/Program'
import Main from './components/Main_.js';
import New from './components/New';
import User from './components/You.book';
import Form from './components/Form';
import Footer from './components/Footer_';
import Scrolltop from './components/Scrollto';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Scrolltop />
      <Navi_var />
      <Routes>
        <Route path="/Essay" element={<Essay />} />
        <Route path="/Design" element={<Design />} />
        <Route path='/Illust' element={<Illust />} />
        <Route path='/Photo' element={<Photo />} />
        <Route path='/Postcard' element={<Postcard />} />
      </Routes>


      <Routes>

        <Route path="/" element={
          <>
            <Best_slide data={datainfo} />
            <List_box></List_box>
            <Main></Main>
            <New></New>
            <User></User>
            <Form></Form>
            <Footer></Footer>
          </>
        } />
        <Route path="/new-books/" element={<New_books />} />
        <Route path="/Bestbook/" element={<Bestbook />} />
        <Route path="/Curation/" element={<Curation />} />
        <Route path="/Goods/" element={<Goods />} />
        <Route path="/Program/" element={<Program />} />
        <Route path="/new-books/:index" element={<Detail_newbooks />} />
      </Routes>
    </BrowserRouter>

  </>
);
