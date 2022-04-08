import SubMenuContainer from "../../container/SubMenuContainer";

const IntroduceCertification = () => {
    return (
        <div id="container" className="sub_page">
            <div className="sub-top center"/>
            <div className="sub-container">
                <div className="sub-nav">
                    <div className="sub-nav-inner">
                        <SubMenuContainer submenu1="0" submenu2="0"/>
                    </div>
                </div>
                <div className="sub-content">
                    <div className="sub-content-inner">
                        <div className="sub-content-title">
                            <h1>인증 · 평가소개</h1>
                        </div>
                        <div className="sub-content-page certification">
                            <p className="certification-title">
                                축척된 빅 데이터와 전문성을 기초로<br/>차별화된 인증 프로세스로 빠른 인증서버를 제공합니다.
                            </p>
                            <div className="wrap">
                                <img src="../images/certification-info.png" alt="" longdesc="#longdesc_con"/>
                                    <ul className="blind" id="longdesc_con">
                                        <li className="small-circle top">
                                            <p className="title">인증<br/>프로세스</p>
                                            <div className="desc">인증 프로세스의 빠른 세비스 제공</div>
                                        </li>
                                        <li className="center">
                                            <span className="icon"><i className="fa fa-chalkboard-teacher"/></span>
                                            <div className="desc">해체기술 계획서<br/>검토 및 계획서 인증</div>
                                        </li>
                                        <li className="small-circle left">
                                            <p className="title">전문성 +<br/>차별화</p>
                                            <div className="desc">인증 · 평가 수행인력의<br/>지속적인 교육을 통한 역량강화</div>
                                        </li>
                                        <li className="small-circle right">
                                            <p className="title">의사소통</p>
                                            <div className="desc">열린 마음으로 고객의<br/>요구충족과 필요한 정보제공</div>
                                        </li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default IntroduceCertification;

