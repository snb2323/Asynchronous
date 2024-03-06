import React from "react"

export default function Footer() {
    return (
        <footer id="footerwrap" className="p-3">
            <div className="footer_section d-lg-flex justify-content-center align-items-start">
                <div className="py-4 px-5 ">
                    <ul className="footer-li ">
                        <li>책</li>
                        <li>굿즈</li>
                        <li>워크숍</li>
                        <li>큐레이션</li>
                        <li>아용약관</li>
                        <li>개인정보처리방침</li>
                        <li>아인(Ain)</li>
                        <li>대표:김가영</li>
                        <li>오프라인:서울시 마포구 서교동 483-9 1층 좌축</li>
                        <li>전화:070-8667-0033</li>
                    </ul>
                </div>
                <div className="d-none d-lg-flex">
                    <div className="footer-p me-lg-4 py-5 px-5 d-sm-none d-lg-flex">
                        <p>입고문의:ain-bookstore@naver.com 디자인 문의:ain-tubio@naver.com<br></br>디자인 문의:ain<br></br>studio@naver.com</p>
                        <br />
                        <p>Company Reg<br></br>No.394-03-01225Newwork Reg.No.<br></br>2019.tjbnf</p>
                    </div>
                    <div className="footer-p py-5">
                        <span>
                            Company Reg. No.<br></br>
                            394-03-01225Newwork Reg.No<br></br>
                            2019-서울마포-2315호<br />
                            Hosting by lmweb. <br />
                            Copyrightaⓒ2023아인서점 All <br />
                            rights reserved.
                        </span>
                    </div>
                </div>
                <div className="mb-lg-5 pb-lg-5 ps-5">
                    <ul className="face d-flex mb-lg-5 pb-lg-5">
                        <li>
                            <i class="bi bi-instagram me-2"></i>
                        </li>
                        <li>
                            <i class="bi bi-twitter me-2 px-2"></i>
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