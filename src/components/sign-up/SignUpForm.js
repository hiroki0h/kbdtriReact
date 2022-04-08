import ReCAPTCHA from "react-google-recaptcha";

const SignUpForm = ({onSubmit, userId, userName, userPassword, newPassword, userEmail, onChange, checkBox, recaptchaBox, siteKey, recaptchaChange, duplicationIdEvent, duplicationEmailEvent}) => {
    return (
        <div id="container" className="member_page">
            <h1>회원가입</h1>
            <form className="join-form" onSubmit={onSubmit}>
                <fieldset>
                    <legend>회원가입</legend>
                    <table className="table-board table-block">
                        <colgroup>
                            <col width="250"/>
                            <col width="*"/>
                        </colgroup>
                        <tbody>
                        <tr>
                            <th><span className="point">*</span><label htmlFor="user-id">아이디</label></th>
                            <td>
                                <input type="text" name="user_id" id="user-id" placeholder="4~20자의 영문/숫자" ref={userId} onChange={onChange} />
                                <button type="button" className="btn btn-duplication" id="id-check" onClick={duplicationIdEvent}>중복확인</button>
                            </td>
                        </tr>
                        <tr>
                            <th><span className="point">*</span><label htmlFor="new-password">비밀번호</label></th>
                            <td>
                                <input type="password" name="user_password" id="new-password"
                                       placeholder="8~20자의 영문/숫자 조합" ref={userPassword} onChange={onChange} />
                            </td>
                        </tr>
                        <tr>
                            <th><span className="point">*</span><label htmlFor="new-password2">비밀번호 확인</label></th>
                            <td>
                                <input type="password" name="new_password" id="new-password2"
                                       placeholder="비밀번호를 재입력하세요" ref={newPassword} onChange={onChange} />
                            </td>
                        </tr>
                        <tr>
                            <th><span className="point">*</span><label htmlFor="user-name">이름</label></th>
                            <td>
                                <input type="text" name="user_name" id="user-name" placeholder="이름을 입력하세요" ref={userName} onChange={onChange} />
                            </td>
                        </tr>
                        <tr>
                            <th><span className="point">*</span><label htmlFor="user-email">이메일 주소</label></th>
                            <td>
                                <input type="email" name="email" className="duplication-email" id="user-email"
                                       placeholder="이메일 주소를 입력하세요" ref={userEmail} onChange={onChange}/>
                                    <button type="button" className="btn btn-duplication" id="email-check" onClick={duplicationEmailEvent}>중복확인</button>
                            </td>
                        </tr>
                        <tr>
                            <th>이메일 수신 동의</th>
                            <td>
                                <div className="checkbox">
                                    <input type="checkbox" id="mailing_check" name="mailing_check" value="1" onChange={checkBox} />
                                        <label htmlFor="mailing_check">이메일 수신에 동의합니다.</label>
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

                    <div className="btn-center">
                        <button type="submit" value="회원가입" className="btn" id="join_btn">회원가입</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}

export default SignUpForm;