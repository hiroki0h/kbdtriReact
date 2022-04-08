import { Link } from 'react-router-dom';
import { navData } from "../hooks";
import SubMenu from "../components/SubMenu";

const SubMenuContainer = (props)=>{
    const depthClickEvent = (e) => {
        e.preventDefault();
        e.currentTarget.children[1].classList.toggle('on');
    };
    const DepthMouseLeave = (e) => {
        Array.from(e.currentTarget.children).forEach((value, index)=>{
            e.currentTarget.children[1].classList.remove('on');
        })
    };

    return (
        <ul className="breadcrumb">
            <li className="home">
                <Link to="../"><i className="fa fa-home" aria-hidden="true"/>Home</Link>
            </li>
            <SubMenu
                submenu2={props.submenu2}
                SubMenuList1={navData.list}
                SubMenuList2={navData.list[props.submenu1]}
                depthClickEvent={depthClickEvent}
                DepthMouseLeave={DepthMouseLeave}
            />
        </ul>
    );
}
export default SubMenuContainer;