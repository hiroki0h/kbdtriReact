import { Link } from 'react-router-dom';

const SubMenu = ({submenu2, SubMenuList1, SubMenuList2, depthClickEvent, DepthMouseLeave})=> {
    return (
        <>
            <li className="breadcrumb1" onClick={depthClickEvent} onMouseLeave={DepthMouseLeave}>
                <Link to="#">{SubMenuList2.title}<i className="fa fa-angle-down" aria-hidden="true"/></Link>
                <ul className="depth2">
                    {SubMenuList1.map((depth2, index)=>(
                        <li key={index}>
                            <Link to={depth2.link}>{depth2.title}</Link>
                        </li>
                    ))}
                </ul>
            </li>
            <li className="breadcrumb2" onClick={depthClickEvent} onMouseLeave={DepthMouseLeave}>
                <Link to="#">{SubMenuList2.list2[submenu2].title}
                    <i className="fa fa-angle-down" aria-hidden="true"/>
                </Link>
                <ul className="depth3">
                    {SubMenuList2.list2.map((depth3, index)=>(
                        <li key={index}>
                            <Link to={depth3.link}>{depth3.title}</Link>
                        </li>
                    ))}
                </ul>
            </li>
        </>
    );
}

export default SubMenu;