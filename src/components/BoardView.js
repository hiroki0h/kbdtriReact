import {Link} from "react-router-dom";
import SubMenuContainer from "../container/SubMenuContainer";
import Loader from "./Loader";
const BoardView = ({pageData, listData, isLoading})=> {
    return (
        <div id="container" className="sub_page">
            {isLoading ? <Loader/> :
                <>
                    <div className={`sub-top ${pageData.subTop}`}/>
                    <div className="sub-container">
                        <div className="sub-nav">
                            <div className="sub-nav-inner">
                                {
                                    (listData.name === 'dismantling_research')
                                    ?<SubMenuContainer submenu1='3' submenu2='1'/>
                                    :(listData.name === 'notice')
                                    ?<SubMenuContainer submenu1='6' submenu2='0'/>
                                    :(listData.name === 'kbdt_news')
                                    ?<SubMenuContainer submenu1='6' submenu2='2'/>
                                    :<></>
                                }
                            </div>

                        </div>
                        <div className="sub-content">
                            <div className="sub-content-inner">
                                <div className="sub-content-title">
                                    <h1>{pageData.name}</h1>
                                </div>
                                <div className="sub-content-page news table">
                                    <table className="table-board table-view">
                                        <caption>
                                            <span className="hidden">{`${pageData.name} 게시글 상세 페이지`}</span>
                                        </caption>
                                        <colgroup>
                                            <col width="90px"/>
                                            <col width="*"/>
                                        </colgroup>
                                        <tbody>
                                        <tr>
                                            <td colSpan="2" className="text-left clearfix">
                                                <h2 className="title">{listData.title}</h2>
                                                <p className="text_detail">
                                                    <span className="date">{listData.date}</span>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr className="view-block">
                                            <td className="text-left bar">첨부파일</td>
                                            <td className="text-left file">
                                                {listData.file === null
                                                    ?<p><i className="fas fa-file"/>첨부파일 없음</p>
                                                    :
                                                    <p><i className="fas fa-file"/>
                                                        <a href="" target="_blank"
                                                           title="파일다운로드" download>
                                                            {listData.file}
                                                        </a>
                                                    </p>
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                <div className="text-box" dangerouslySetInnerHTML={{__html: listData.content}}/>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <Link to={pageData.linkTo} className="btn list_btn">목록</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}
export default BoardView;