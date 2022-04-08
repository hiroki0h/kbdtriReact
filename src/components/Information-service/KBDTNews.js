import SubMenuContainer from "../../container/SubMenuContainer";
import BoardContainer from "../../container/BoardContainer";

const KBDTNews = () => {
    return (
        <div id="container" className="sub_page">
            <div className="sub-top service"/>
            <div className="sub-container">
                <div className="sub-nav">
                    <div className="sub-nav-inner">
                        <SubMenuContainer submenu1="1" submenu2="2"/>
                    </div>
                </div>
                <BoardContainer
                    caption="KBDT 소식"
                    pageName="/information-service/kbdt-news/"
                />
            </div>
        </div>
    );
}
export default KBDTNews;
