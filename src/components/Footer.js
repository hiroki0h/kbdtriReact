import {Link} from "react-router-dom";

const Footer = () =>{
    const moveToTop = () => (document.documentElement.scrollTop = 0);
    return(
        <footer className="footer">
            <div className="footer-inner">
                <p className="logo-bottom">
                    <img src="../images/logo_footer.svg" alt="(사)한국건축물해체기술연구원"/>
                </p>
                <div>
                    <ul>
                        <li className="bar-vertical">대표: 대표님</li>
                        <li>사업자등록번호: 123-45-6789</li>
                    </ul>
                    <p>주소: 04524 서울특별시 중구 세종대로 110</p>
                    <ul>
                        <li className="bar-vertical">Tel: 02-02-02</li>
                        <li className="bar-vertical">Fax: 02-02-02</li>
                        <li className="bar-vertical">Email: hiroki0h@naver.com</li>
                        <li><Link to="/privacy" target="_blank">개인정보 처리방침</Link></li>
                    </ul>
                    <p className="copyright">Copyright © All rights Reserved.</p>
                </div>
            </div>
            <button id="btn_top" title="맨 위로" onClick={moveToTop}><i className="fa fa-arrow-up" aria-hidden="true"/>TOP</button>
        </footer>
    );
}

export default Footer;
