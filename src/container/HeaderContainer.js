import React, { useEffect, useState, useRef } from "react";
import NavGlobal from "../components/NavGlobal";
import NavUser from "../components/NavUser";
import { useLayer, useMobile, navData } from "../hooks";
import {useNavigate} from "react-router-dom";

const HeaderContainer = ()=> {
    const navigate = useNavigate();
    const navUser = useRef();
    const navGlobal = useRef();
    const [isLogin, setIssLogin] = useState(false);
    const [isNav, setIsNav] = useState(false);
    const [isCurrent, setIsCurrent] = useState();
    const { isMobile } = useMobile();
    const { container, onActive, offActive } = useLayer();
    const [navUserHeight, setNavUserHeight] = useState();
    const [navGlobalHeight, setNavGlobalHeight] = useState();
    useEffect(() => {
        setIsCurrent(null);
    }, [isMobile]);

    const onNavControls = (e) => {
        if(e.target.className == ''){
            setIsNav(false);
            offActive();
        }else{
            setIsNav(!isNav);
            !isNav ? onActive() : offActive();
        }
        document.documentElement.scrollTop = 0;
        setIsCurrent(null)
    };
    const navGlobalMouseEnter = (e) => {
        if(!isMobile){
            let children =  e.currentTarget.children;
            Array.from(children).forEach((value, index)=>{
                value.querySelector('.item').classList.add('on');
            })
        }
    };
    const navGlobalMouseLeave = (e) => {
        if(!isMobile){
            let children =  e.currentTarget.children;
            Array.from(children).forEach((value, index)=>{
                value.querySelector('.item').classList.remove('on')
            })
        }
    };
    const listAccordion = (index) => {
        if(isMobile){
            setIsCurrent(index);
        }
    };
    const resetList = () => {
        setIsNav(false);
        document.documentElement.scrollTop = 0;
        setIsCurrent(null);
        offActive();
    };
    useEffect(() => {
        if(window.localStorage.getItem('userId') === null){
        }else{
            setIssLogin(true);
        }
    }, []);
    const logOutEvent = () => {
        window.localStorage.removeItem('userId');
        document.location.href = '/';
    };
    return (
        <header className="header" ref={container}>
            <button type="button" id="skip_content">본문 바로가기</button>
            <div id="gnb">
                <nav className="nav">
                    <NavUser navUser={navUser} isLogin={isLogin} logOutEvent={logOutEvent} onNavControls={onNavControls}/>
                    <NavGlobal
                        isNav={isNav}
                        onNavControls={onNavControls}
                        navGlobalMouseEnter={navGlobalMouseEnter}
                        navGlobalMouseLeave={navGlobalMouseLeave}
                        navData={navData}
                        isCurrent={isCurrent}
                        listAccordion={listAccordion}
                        navGlobal={navGlobal}
                        resetList={resetList}
                    />
                </nav>
            </div>
        </header>
    );
}
export default HeaderContainer;