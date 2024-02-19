import { Button } from "bootstrap";

export default function Footer() {
    return (
        <footer id="footerwrap" className="p-3">
            <div className="footer_section d-lg-flex justify-content-between align-items-center">
                <div className=" ">
                    <ul className="footer-li ">
                        <li>책</li>
                        <li>굿즈</li>
                        <li>워크숍</li>
                        <li>프로그램</li>
                        <li>아용약관</li>
                        <li>개인정보처리방침</li>
                        <li>아인(Ain)</li>
                        <li>대표:김가영</li>
                        <li>오프라인:서울시 마포구 서교동 483-9 1층 좌축</li>
                        <li>전화:070-8667-0033</li>
                    </ul>
                </div>
                <div className="d-none d-lg-flex">
                    <div className="footer-p me-lg-4">
                        <p>입고문의:ain-bookstore@naver.com 디자인 문의:ain-tubio@naver.com</p>
                        <p>입고문의:ain-bookstore@naver.com 디자인 문의:ain-tubio@naver.com</p>
                    </div>
                    <div className="footer-p">
                        <p>CompamyReg.No.394-03-01225Newwork Reg.
                            NO.2019-서울마포-2315호
                        </p>
                        <p>Hostingby imweb.
                            Copyright 2024아인서점All rights reserved.
                        </p>
                    </div>
                </div>
                <div className="mb-lg-5 pb-lg-5">
                    <ul className="face d-flex mb-lg-5 pb-lg-5">
                        <li>
                            <i class="bi bi-instagram me-2"></i>
                        </li>
                        <li>
                            <i class="bi bi-twitter me-2"></i>
                        </li>
                        <li>
                            <i class="bi bi-book"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}