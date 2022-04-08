import { Link } from 'react-router-dom';
import React from "react";

const NavGlobal = ({isNav, onNavControls, navGlobalMouseEnter, navGlobalMouseLeave, navData, isCurrent, listAccordion, navGlobal, resetList}) => {
    return (
        <div className="nav-global" ref={navGlobal}>
            <div className="header-inner">
                <p className="logo" onClick={onNavControls}>
                    <Link to="/">
                        <img src="../images/logo.svg" alt="(사)한국건축물해체기술연구원"/>
                    </Link>
                </p>
                <button className={`nav-global-mo-btn ${isNav ? 'close' : ''}`} type="button" onClick={onNavControls}>
                    {isNav
                        ?<><i className="fa fa-times"/>메뉴 닫기</>
                        :<><i className="fa fa-bars"/>메뉴 열기</>
                    }
                </button>
                <ul className={`nav-global-list ${isNav ? 'on' : ''}`}
                    onMouseEnter={navGlobalMouseEnter}
                    onMouseLeave={navGlobalMouseLeave}
                >
                    {navData.list.map((depth1, index) => {
                        return (
                            <li className="depth1" key={index} onClick={() => listAccordion(index)}>
                                <a href="#" className={index === isCurrent ? 'on' : ''}>{depth1.title}</a>
                                <div className={`item ${index === isCurrent ? 'on' : ''}`}>
                                    <ul className="depth2 highest">
                                        {depth1.list2.map((depth2, index)=>(
                                            <li key={index} onClick={resetList}>
                                                <Link to={depth2.link}>{depth2.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default NavGlobal;
