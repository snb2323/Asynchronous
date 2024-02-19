import styled from "styled-components";

const MainWrapper = styled.div`
  background: #f5f5f5;
    img {
      width: 100%;
      height: auto;
    }
    .mainname {
    text-align: center;
}
    .mainslide{
        display:flex;
    }
    .ico {
     display:flex;
    margin-right:16 0px;
    }
    h1 {
      color: #212529;
      line-height: 5;
      text-align: center;
      height: 150px;
      margin: 10px;
    }
    /* .mainteduli {
      display: flex;
      margin-bottom:40px !important;
      border: 15px solid white;
      width: 280px;
      height: 380px;
    } */
    .swiperwrap {
      border-radius: 20px;
    }
    .swiper-scrollbar {
      margin-top:10px;
      position:absolute;
      left:30%;
      background-color:#d1edff;
      width: 40%;
      border-radius: 4px;
    }
    .swiper-scrollbar-drag {
        background:white;
    }
  



`

export default MainWrapper
