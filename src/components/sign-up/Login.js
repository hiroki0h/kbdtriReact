import {Link} from "react-router-dom";

const Login = ({ onSubmit, userId, userPassword, onChange }) => {
    return (
        <div id="container" className="member_page">
            <h1>로그인</h1>
            <p>로그인 아이디와 비밀번호를 입력하신 후<br/>'<span className="text-primary">로그인</span>' 버튼을 클릭하세요.</p>
            <form id="login-form" className="login-form" onSubmit={onSubmit}>
                <fieldset>
                    <legend>로그인</legend>
                    <ul>
                        <li>
                            <label htmlFor="member_userid">아이디</label>
                            <input type="text"
                                   name="user_id"
                                   id="member_userid"
                                   placeholder="아이디를 입력하세요"
                                   ref={userId}
                                   onChange={onChange}
                            />
                        </li>
                        <li>
                            <label htmlFor="member_password">비밀번호</label>
                            <input type="password"
                                   name="user_password"
                                   id="member_password"
                                   placeholder="비밀번호를 입력하세요"
                                   ref={userPassword}
                                   onChange={onChange}
                            />
                        </li>
                    </ul>
                    <button type="submit" value="로그인" className="btn" id="login-btn">로그인</button>
                </fieldset>
            </form>
            <div className="member-link">
                <Link to="/find">아이디/비밀번호 찾기</Link>
            </div>
        </div>
    );
}
export default Login;