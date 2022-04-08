import {Link, useNavigate} from "react-router-dom";

const Preparing = () => {
    const navigate = useNavigate();
    return (
        <div className="sub-content-page preparing">
            <i className="fa fa-exclamation-circle not_found-img" aria-hidden="true"/>
            <h2>컨텐츠 <span className="text-primary">준비중</span>입니다.</h2>
            <p className="impact">
                컨텐츠 내용이 준비가 되지 않았습니다.<br/>
                가능한 빠른 시일내에 업데이트 하도록 하겠습니다.
            </p>
            <div className="not_found-btn">
                <button onClick={() => navigate(-1)} className="btn border" >이전 페이지</button>
                <Link to="/" className="btn border">메인으로</Link>
            </div>
        </div>
    )
}

export default Preparing;