import { Link } from 'react-router-dom';

const NavUser = ({ navUser, isLogin,logOutEvent, onNavControls }) => {
    return (
        <div className="nav-user" ref={navUser}>
            <ul className="header-inner">
                {
                    !isLogin
                    ?
                        <>
                            <li className="bar-vertical" onClick={onNavControls}><Link to="/login">로그인</Link></li>
                            <li onClick={onNavControls}><Link to="/sign-up">회원가입</Link></li>
                        </>
                    :
                        <>
                            <li className="bar-vertical">
                                <Link to="/mypage"><i className="fas fa-user-circle fa-fw"/>{window.localStorage.getItem('userId')}</Link>
                            </li>
                            <li>
                                <button type="button" onClick={logOutEvent}>로그아웃</button>
                            </li>
                        </>
                }
            </ul>
        </div>
    );
}
export default NavUser;
