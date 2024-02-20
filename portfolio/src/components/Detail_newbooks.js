import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import datainfo from '../data/data.json';
import { Dropdown, DropdownButton } from 'react-bootstrap';

// 비동기통신 api
import { productApi } from '../api/api'

function Detail_newbooks({ bookdata }) {
  const [content, setContent] = useState({})
  const { index } = useParams();
  const [option, setoption] = useState(false)
  const [quantity, setQuantity] = useState(1);

  const fetchDataAndSetState = async (tn, id = null) => {

    try {
      const response = await productApi(`${tn}/${id}`); // 2가지경우에 응대하는 각 식이 존재해야해
      if (response instanceof Error) {
        throw response; // 에러가 발생한 경우 다시 throw하여 catch 블록으로 전달
      }
      if (Array.isArray(response.data)) {
        setContent((prev) => (
          {
            ...prev,
            [tn]: [...response.data]
          }
        )

        );
      } else {
        // 만약 response.data가 배열이 아니라면 예외 처리
        throw new Error('Response data is not an array');
      }
    } catch (error) {
      console.log(error);
    }
  };



  const handleIncrement = () => {
    setQuantity(quantity + 1);

  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
  };


  const handlechange = (e) => {
    setoption(e);
  };



  useEffect(() => {
    //상품 api 딱 한번만 실행
    fetchDataAndSetState('detail', index);
    fetchDataAndSetState('detailnewbooks', index);
    console.log(`bookdata 확인해줘 ${bookdata}`)
  }, []);

  useEffect(() => {
    // console.log("ts interface 복붙용", content)
    console.log(content["detail"])
  }, [content])

  return (

    <>
      <div className='newbookstitle ms-md-5 px-md-3 mt-5'>
        <div className='price text-center px-md-5'>
          <h3 className='detailh3'>{content && content["detailnewbooks"] && content["detailnewbooks"][0].h4}</h3>
          <p className='mx-md-5 text-center'>{content && content["detailnewbooks"] && content["detailnewbooks"][0].p}</p>
        </div>
      </div>
      <div className='d-md-flex over px-md-5'>
        <div className='detali_im col-md-7  d-flex justify-content-center'>
          <img className='bookimg' src={content && content["detailnewbooks"] && content["detailnewbooks"][0].src} alt="newbook" />
        </div>
        <div className='detaildata col-5 py-5 mr-5 px-3'>
          <content className="detailnewbooks col-4">
            <h4 className='detailh'>"{content && content["detail"] && content["detail"][0].subject}"</h4>
            <div className="detalip">
              <p>{content && content["detail"] && content["detail"][0].inner}</p>
              <p>{content && content["detail"] && content["detail"][0].detail.split('|').map((e) => {
                return (
                  <>
                    <p className='pt-4'>{e}</p>
                  </>
                )
              })}</p>
            </div>
            <div><strong> 저자소개</strong></div>
            <div><strong>{content && content["detail"] && content["detail"][0].auth}</strong></div>
            <div>
              <span>판 형 142*180mm</span>
            </div>
            <div>
              <span>분 량: 300p</span>
            </div>
            <div className="datail_item">
              <div>
                <span>
                  <strong>구매혜택</strong> 170 신규가입 포인트 적립예정 적립예정
                </span>
              </div>
              <div>
                <span>
                  <strong>배송비</strong> 3,000원 (50,000원 이상 무료배송) |도서산간 배송비 추가
                </span>
              </div>
              <div>
                <span>
                  <strong>배송안내</strong> 로젠배로 발송되며 택배비는 3000원 / 제주도 3000원 추가 / 50,000원 이상 구매 시 택배비가 무료입니다.
                </span>
                <div className="mt-3">
                  <DropdownButton
                    id="Dropdown"
                    title={option === true ? "방문수령" : "택배"}
                  >
                    <Dropdown.Item onMouseDown={() => handlechange(false)}>택배</Dropdown.Item>
                    <Dropdown.Item onMouseDown={() => handlechange(true)}>방문수령</Dropdown.Item>
                  </DropdownButton>
                </div>
              </div>
              <div className='opt mt-5 '>
                <div className='opt_btns'>
                  <span className='opt_span'>수량</span>

                </div>
                <div className='opt_btn'>
                  <div className='quan'>
                    <button className='quantity-btn' onClick={handleDecrement}>-</button>
                    <input className='formin' type="text" value={quantity} />
                    <button className='quantity-btn' onClick={handleIncrement}>+</button>
                  </div>
                  <span className='prise ms-5 px-5'>{22_000 * quantity}원</span>
                </div>
              </div>
            </div>
            <div className='buy_btn'>
              <a href='#'>구매하기</a>
              <a href='#'>장바구니</a>
            </div>
          </content>
        </div>
      </div>

    </>
  );
}

export default Detail_newbooks;