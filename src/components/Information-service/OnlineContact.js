import {Link} from "react-router-dom";
import SubMenuContainer from "../../container/SubMenuContainer";
import ReCAPTCHA from "react-google-recaptcha";

const OnlineContact = ({ onSubmit, onChange, mobileOnChange, inquiryTitle, inquiryContents, userEmail, checkBox, userName, siteKey, recaptchaBox, recaptchaChange }) => {
    return (
        <div id="container" className="sub_page">
            <div className="sub-top service"/>
            <div className="sub-container">
                <div className="sub-nav">
                    <div className="sub-nav-inner">
                        <SubMenuContainer submenu1="1" submenu2="1"/>
                    </div>
                </div>
                <div className="sub-content">
                    <div className="sub-content-inner">
                        <div className="sub-content-title">
                            <h1>온라인 문의</h1>
                        </div>
                        <div className="sub-content-page inquiry table">
                            <form className="inquiry-form" onSubmit={onSubmit}>
                                <fieldset>
                                    <legend>온라인 문의하기</legend>
                                    <table className="table-board table-block">
                                        <caption>온라인 문의하기</caption>
                                        <colgroup>
                                            <col width="150"/>
                                            <col width="*"/>
                                        </colgroup>
                                        <tbody>
                                        <tr>
                                            <th>
                                                <span className="point">*</span>
                                                <label htmlFor="inquiry-title">제목</label>
                                            </th>
                                            <td>
                                                <input type="text" name="inquiry_title" id="inquiry-title" title="제목"
                                                       maxLength="200" ref={inquiryTitle} onChange={onChange} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <span className="point">*</span>
                                                <label htmlFor="inquiry-email">이메일</label>
                                            </th>
                                            <td>
                                                <input type="email" name="email" id="inquiry-email"
                                                       placeholder="이메일 주소를 입력하세요" ref={userEmail} onChange={onChange} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                연락처
                                            </th>
                                            <td>
                                                <ul className="num">
                                                    <li>
                                                        <label className="blind" htmlFor="mobile1">연락처 앞자리</label>
                                                        <input type="text" name="mobile1" id="mobile1" title="연락처 앞자리"
                                                               maxLength="3" placeholder="앞자리" onChange={mobileOnChange} />
                                                    </li>
                                                    <li>
                                                        <label className="blind" htmlFor="mobile2">연락처 중간자리</label>
                                                        <input type="text" name="mobile2" id="mobile2" title="연락처 중간자리"
                                                               maxLength="4" placeholder="중간자리" onChange={mobileOnChange} />
                                                    </li>
                                                    <li>
                                                        <label className="blind" htmlFor="mobile3">연락처 뒷자리</label>
                                                        <input type="text" name="mobile3" id="mobile3" title="연락처 뒷자리"
                                                               maxLength="4" placeholder="뒷자리" onChange={mobileOnChange} />
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <span className="point">*</span>
                                                <label htmlFor="inquiry-name">이름</label>
                                            </th>
                                            <td>
                                                <input type="text" name="user_name" id="inquiry-name" title="이름"
                                                       maxLength="50" ref={userName} onChange={onChange} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <span className="point">*</span>
                                                <label htmlFor="inquiry-contents">내용</label>
                                            </th>
                                            <td>
                                                <textarea name="inquiry_contents" id="inquiry-contents" title="문의내용"
                                                          style={{resize:"none"}} ref={inquiryContents} onChange={onChange} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <span className="point">*</span>개인정보 수집 동의
                                            </th>
                                            <td>
                                                <div className="checkbox">
                                                    <input type="checkbox" id="mailing_check" name="mailing_check" value="1" onChange={checkBox} />
                                                        <label htmlFor="mailing_check"><Link to="/privacy" target="_blank">개인정보 수집 및 이용</Link>에 동의합니다.</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td ref={recaptchaBox}>
                                                <ReCAPTCHA
                                                    sitekey={siteKey}
                                                    onChange={recaptchaChange}
                                                />
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <button type="submit" value="온라인 문의" className="btn">온라인 문의</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OnlineContact
