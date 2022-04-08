import SubMenuContainer from "../../container/SubMenuContainer";
import BoardContainer from "../../container/BoardContainer";

const Notice = ()=>{
    return(
        <div id="container" className="sub_page">
            <div className="sub-top service"/>
            <div className="sub-container">
                <div className="sub-nav">
                    <div className="sub-nav-inner">
                        <SubMenuContainer submenu1="1" submenu2="0"/>
                    </div>
                </div>
                <BoardContainer
                    caption="공지사항"
                    pageName="/information-service/notice/"
                />
            </div>
        </div>
    );
}
export default Notice;
