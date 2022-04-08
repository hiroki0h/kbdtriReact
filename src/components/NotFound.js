import {Link, useNavigate} from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div id="container" className="member_page not_found">
            <i className="fa fa-exclamation-circle not_found-img" aria-hidden="true"/>
            <h1>Page not found</h1>
            <p className="impact">주소가 잘못 입력 되었거나 요청하신 페이지를 찾을 수 없습니다.</p>
            <p>
                페이지를 실행하는 데 문제가 발생했습니다.<br/>
                링크를 다시 확인해 주십시오.
            </p>
            <div className="not_found-btn">
                <button onClick={() => navigate(-1)} type="button" className="btn border" >이전 페이지</button>
                <Link to="/" className="btn border">메인으로</Link>
            </div>
        </div>
    )
}

export default NotFound;