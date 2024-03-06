import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

function Form() {

    const [resresult, setresresult] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { isSubmitting, isSubmitted, errors },
    } = useForm({ mode: 'onChange' });

    const onSubmit = async (data) => {
        // alert(JSON.stringify(data))
        console.log(data);
        try {
            const formsuccess = await axios.post('/api/ainform', {
                headers: {
                    'Content-Type': 'application/json',
                },
                body: data
            });
            console.log(formsuccess.data); // Assuming the server sends a response you want to log

            if (formsuccess.data.msg) {
                setresresult(true);
            }

            // Additional logic if needed after successful form submission

        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error if the form submission fails
        }

    };


    return (


        <div className="sectionform">
            {
                resresult ?
                    <div>
                        빠른 답변을드리도록 하겠습니다.
                        <button onClick={() => {
                            setresresult(false)
                        }}>다시신청하기</button>
                    </div>
                    :

                    <form className="form p-5" noValidate onSubmit={handleSubmit(onSubmit)}>
                        <div className=" d-flex justify-content-center ">
                            <h1 className="formh mt-3 sm-d-flex ">상담문의</h1>
                        </div>

                        <fieldset>
                            <div class="userin d-flex justify-content-center align-items-center py-3">
                                <div class="dda row justify-content-around align-items-center container pt-5 px-5 ">
                                    <div className="user  col-sm-5 text-start d-flex ">
                                        <div className="  mx-auto text-start ">
                                            <div className="bor mx-auto text-start">
                                                <label className="" htmlFor="name">

                                                </label>
                                                <input
                                                    className={`mb-4 0 ${errors.name ? "invalid" : "valid"}`}
                                                    id="name"
                                                    type="text"

                                                    placeholder="이름"
                                                    {...register("name", { required: "이름은 필수 입력입니다." })}
                                                />
                                                {errors.name && <small>{errors.name.message}</small>}
                                                <div >
                                                    <label className="" htmlFor="address">

                                                    </label>
                                                    <input
                                                        className={` mb-4 0 ${errors.address ? "invalid" : "valid"}`}
                                                        id="address"

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
                                    <div className="tarea col-5  col-sm-d-block">
                                        <textarea
                                            className="text  position-rel "
                                            id="tx"
                                            cols="25"
                                            rows="3"
                                            placeholder="불편 사항이나 문의 사항 남겨주시면 
                                신속하고 친절하게 안내해 드리겠습니다."
                                            {...register("message")}
                                        ></textarea>
                                    </div>
                                    <div className="btns mt-5">
                                        <button type="submit" disabled={isSubmitting}>
                                            문의하기
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </fieldset>
                    </form>
            }
        </div>

    );
}

export default Form;
