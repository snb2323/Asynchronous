import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";

function Form() {

    // const productApi = async (myName, data = null) => {
    // 위에 myname은 sql테이블이름 , get post 결정
    //     try {
    //         if (data) { //글쓰기

    //             const response = await axios.post(`/data/${myName}`, {
    //                 headers: {
    //                     'Content-Type': 'multipart/form-data',
    //                 },
    //                 body: data //전송데이터 form 데이터 
    //             });

    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }

    //             const responseData = await response.json(); // Assuming the response is JSON, adjust as necessary
    //             return responseData;
    //         } else { //글 목록
    //             return axios.get(`/data/${myName}`);
    //         }

    //     } catch (error) {
    //         console.log(error);
    //         return error;
    //     }
    // };
    const [formdata, setformdata] = useState({ //input name이 변수
        name: '',
        address: '',
        email: '',
    })
    const handleChange = (e) => {
        // 데이터삽입
        const { name, value } = e.target;
        setformdata(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const {
        register,
        handleSubmit,
        formState: { isSubmitting, isSubmitted, errors },
    } = useForm({ mode: 'onChange' });

    const onSubmit = async (data) => {
        alert(JSON.stringify(data))
        console.log(data);
    };


    return (
        <div className="sectionform">
            <form className="form " noValidate onSubmit={handleSubmit(onSubmit)}>
                <div className=" d-flex justify-content-center ">
                    <h1 className="formh mt-3 sm-d-flex ">상담문의</h1>
                </div>

                <fieldset>
                    <div class="userin d-flex justify-content-center align-items-center py-3">
                        <div class="dda d-flex justify-content-around align-items-center container pt-5 px-5 ">
                            <div className="user mx-auto col-5 text-start d-flex ">
                                <div className="  mx-auto text-start ">
                                    <div className="bor mx-auto text-start">
                                        <label className="" htmlFor="name">

                                        </label>
                                        <input
                                            className={`bor  mb-4 0 ${errors.name ? "invalid" : "valid"}`}
                                            id="name"
                                            type="text"
                                            name="name"
                                            placeholder="이름"
                                            value={formdata.name}
                                            {...register("name", { required: "이름은 필수 입력입니다." })}
                                        />
                                        {errors.name && <small>{errors.name.message}</small>}
                                        <div >
                                            <label className="" htmlFor="address">

                                            </label>
                                            <input
                                                className={` mb-4 0 ${errors.address ? "invalid" : "valid"}`}
                                                id="address"
                                                name="address"
                                                type="text"
                                                placeholder="주소"
                                                {...register("address", { required: "주소는 필수 입력입니다." })}
                                            />
                                            {errors.address && <small>{errors.address.message}</small>}
                                        </div>
                                        <div>
                                            <label className="" htmlFor="email">
                                            </label>
                                            <input
                                                className={`mb-4 0 ${errors.email ? "invalid" : "valid"}`}
                                                id="email"
                                                type="email"
                                                name="email"
                                                placeholder="test@email.com"
                                                {...register("email", {
                                                    required: "이메일은 필수 입력입니다.",
                                                    pattern: {
                                                        value: /\S+@\S+\.\S+/,
                                                        message: "이메일 형식에 맞지 않습니다.",
                                                    },
                                                })}
                                                aria-invalid={isSubmitted ? (errors.email ? "true" : "false") : undefined
                                                }
                                                style={{ borderBottom: '1px solid white' }}
                                            />

                                            {errors.email && (
                                                <small role="alert" id="email-error">
                                                    {errors.email.message}
                                                </small>
                                            )}
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="tarea col-5 ms-auto col-sm-d-block">
                                <textarea
                                    className="text  position-rel "
                                    id="tx"
                                    cols="30"
                                    rows="3"
                                    placeholder="불편 사항이나 문의 사항 남겨주시면 
                                신속하고 친절하게 안내해 드리겠습니다."
                                    {...register("message")}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="btns">
                        <button type="submit" disabled={isSubmitting}>
                            문의하기
                        </button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}

export default Form;


