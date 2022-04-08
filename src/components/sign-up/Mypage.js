import OverlayDelete from "./OverlayDelete";
import Loader from "../Loader";

const Mypage = ({container, onSubmit,textHoverMouseEnter,textHoverMouseLeave, userPassword, newPassword, userName, onChange, deleteAccount, newPasswordOn, checkBox, duplicationEmailEvent, userEmail, onKeyUp, isConfirm, withdrawalPassword, offOverlay, deleteAccountUser, data, isLoading}) => {
    const {user_id, user_name, email, withdrawal_password, mailing_check} = data;
    return (
        <>
            <div id="container" className="member_page" ref={container}>
                <h1>마이페이지</h1>
                {
                    isLoading ? <Loader/>
                        :
                        <form className="join-form mypage" onSubmit={onSubmit}>
                            <fieldset>
                                <legend>마이페이지</legend>
                                <table className="table-board table-block">
                                    <colgroup>
                                        <col width="250" />
                                        <col width="*" />
                                    </colgroup>
                                    <tbody>
                                    <tr>
                                        <th>아이디 <small className="text-danger">(변경 불가)</small></th>
                                        <td>
                                            {user_id}<small className="text-danger">(변경 불가)</small>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="text">
                                            <span className="point">*</span>
                                            <label htmlFor="current-password">현재 비밀번호</label>
                                            <i className="far fa-question-circle text-hover-wrap"
                                               onMouseEnter={textHoverMouseEnter}
                                               onMouseLeave={textHoverMouseLeave}
                                            />
                                            <span className="text-hover"
                                            >현재 로그인에 사용하는 비밀번호를 입력하세요.</span>
                                        </th>
                                        <td>
                                            <input type="password" name="user_password"
                                                   id="current-password"
                                                   placeholder="현재 비밀번호를 입력하세요."
                                                   ref={userPassword}
                                                   onChange={onChange}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="text">
                                            <label htmlFor="new-password">새 비밀번호(변경 시 입력)</label>
                                            <i className="far fa-question-circle text-hover-wrap"
                                               onMouseEnter={textHoverMouseEnter}
                                               onMouseLeave={textHoverMouseLeave}
                                            />
                                            <span className="text-hover">새 비밀번호는 8~20자의 영문/숫자 조합만 가능합니다. '새 비밀번호 재입력' 에도 동일하게 입력하세요.</span>
                                        </th>
                                        <td>
                                            <input type="password" name="new_password"
                                                   id="new-password"
                                                   placeholder="새 비밀번호를 입력하세요."
                                                   ref={newPassword}
                                                   onChange={onChange}
                                                   onKeyUp={onKeyUp}
                                            />
                                        </td>
                                    </tr>
                                    {
                                        newPasswordOn
                                            ?
                                            <tr className="hidden-tr on">
                                                <th>
                                                    <label htmlFor="new-password2">새 비밀번호 재입력</label>
                                                </th>
                                                <td>
                                                    <input type="password" name="new_password2"
                                                           placeholder="새 비밀번호를 재입력하세요."
                                                           onChange={onChange}/>
                                                </td>
                                            </tr>
                                            :<></>
                                    }
                                    <tr>
                                        <th>
                                            <label htmlFor="user-name">이름</label>
                                        </th>
                                        <td>
                                            <input type="text" name="user_name" id="user-name" placeholder="이름을 입력하세요." defaultValue={user_name} ref={userName} onChange={onChange} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="text">
                                            <span className="point">*</span><label htmlFor="change-email">이메일 주소</label>
                                            <i className="far fa-question-circle text-hover-wrap"
                                               onMouseEnter={textHoverMouseEnter}
                                               onMouseLeave={textHoverMouseLeave}
                                            />
                                            <span className="text-hover">아이디 또는 비밀번호 찾기 시 해당 이메일 주소로 초기화 관련 메일이 발송됩니다.</span>
                                        </th>
                                        <td>
                                            <input type="email" name="email"
                                                   id="change-email"
                                                   defaultValue={email}
                                                   placeholder="이메일 주소를 입력하세요"
                                                   ref={userEmail}
                                                   onChange={onChange}/>
                                            <button type="button" className="btn btn-duplication" id="email-check" onClick={duplicationEmailEvent}>중복확인</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>이메일 수신 동의</th>
                                        <td>
                                            <div className="checkbox">
                                                <input type="checkbox" id="mailing_check" name="mailing_check" value="1" onChange={checkBox} defaultChecked={mailing_check} />
                                                <label htmlFor="mailing_check">이메일 수신에 동의합니다.</label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>가입일</th>
                                        <td className="subscription_date">2022-01-01 05:14:32</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div className="text-center not_found-btn">
                                    <button type="button" className="btn border btn-delete" onClick={deleteAccount}>탈퇴</button>
                                    <button type="submit" className="btn" id="mypage_save_btn">저장</button>
                                </div>
                            </fieldset>
                        </form>
                }
            </div>
            <OverlayDelete
                isConfirm={isConfirm}
                withdrawalPassword={withdrawalPassword}
                withdrawal_password={withdrawal_password}
                offOverlay={offOverlay}
                onChange={onChange}
                deleteAccountUser={deleteAccountUser}
            />
        </>
    );
}

export default Mypage;