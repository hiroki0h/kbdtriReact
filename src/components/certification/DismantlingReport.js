import {Link} from "react-router-dom";
import SubMenuContainer from "../../container/SubMenuContainer";
import Loader from "../Loader";

const DismantlingReport = ({isLoading, isLogin, onChange, onSubmit, withdrawalPassword, fileUploadEvent, isValue, deleteRepot, total, listData, navigate}) => {
    return (
        <div id="container" className="sub_page">
            <div className="sub-top center"/>
            <div className="sub-container">
                <div className="sub-nav">
                    <div className="sub-nav-inner">
                        <SubMenuContainer submenu1="0" submenu2="1"/>
                    </div>
                </div>
                <div className="sub-content">
                    <div className="sub-content-inner">
                        <div className="sub-content-title">
                            <h1>해체 계획서 작성 & 인증</h1>
                        </div>
                        {isLogin
                        ?
                            <div className="sub-content-page dismantling">
                                <div className="dismantling-box">
                                    <h2 className="bar-horizontal">안내</h2>
                                    <p>※ 해체 계획서 파일 업로드 후 '해체 계획서 등록' 버튼을 눌러야 등록이 완료됩니다.</p>
                                    <p>※ 해체 계획서 등록 후엔 보고서 파일을 삭제하거나 재업로드할 수 없습니다.</p>
                                    <p>※ 해체 계획서가 반려됐을 경우 기존에 업로드된 파일을 삭제하고 새로운 파일을 업로드한 뒤에 '해체 계획서 등록' 버튼을 눌러 재등록 해주세요.</p>
                                </div>
                                <div className="dismantling-box application">
                                    <h2 className="bar-horizontal">해체 계획서 신청</h2>
                                    <form  onSubmit={onSubmit}>
                                        <fieldset>
                                            <legend>해체 계획서 신청 목록</legend>
                                            <table className="table-board">
                                                <colgroup>
                                                    <col width="40"/>
                                                    <col width="60"/>
                                                </colgroup>
                                                <thead>
                                                <tr>
                                                    <th scope="col"><label htmlFor="agency-name">신청기관명</label></th>
                                                    <th scope="col" className="dismantling-file">해체 계획서 파일</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <input type="text" id="agency-name" name="agency_name" onChange={onChange}/>
                                                    </td>
                                                    <td className="filebox">
                                                        <input className="upload-name" defaultValue={isValue} placeholder="첨부파일" name="mobile" ref={withdrawalPassword}/>
                                                        <label htmlFor="file-name">파일찾기</label>
                                                        <input type="file" id="file-name" name="file_name" onChange={fileUploadEvent}/>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <button type="submit" value="해체 계획서 등록" className="btn" id="join_btn">해체 계획서 등록</button>
                                        </fieldset>
                                    </form>
                                </div>
                                {
                                    isLoading? <Loader/>
                                        :
                                        <div className="dismantling-box">
                                            <h2 className="bar-horizontal">해체 계획서 신청 목록</h2>
                                            <table className="table-board table-board2 table-block">
                                                <colgroup>
                                                    <col width="10%"/>
                                                    <col width=""/>
                                                    <col width="15%"/>
                                                    <col width=""/>
                                                    <col width="15%"/>
                                                </colgroup>
                                                <thead>
                                                <tr>
                                                    <th scope="col">No</th>
                                                    <th scope="col">신청기관명</th>
                                                    <th scope="col">신청일자</th>
                                                    <th scope="col">최종보고서 파일</th>
                                                    <th scope="col">상태</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                    total < 0 ?
                                                        <tr>
                                                            <td colSpan="5" className="text-center">등록된 파일이 없습니다.</td>
                                                        </tr>
                                                        :
                                                        listData.map((list, index)=>(
                                                            <tr key={index+1}>
                                                                <td>{index+1}</td>
                                                                <td>{list.name}</td>
                                                                <td>{list.date}</td>
                                                                <td>
                                                                    <a href={list.fileName} download="">{list.fileName}</a>
                                                                </td>
                                                                <td className="status">
                                                                    {
                                                                        list.statue === "반려"
                                                                        ?
                                                                            <>
                                                                                <span>{list.statue}</span>
                                                                                <button type="button" value="해체 계획서 삭제" className="btn btn-delete" onClick={() => deleteRepot(list.id)}>삭제
                                                                                </button>
                                                                            </>
                                                                        : <span>{list.statue}</span>
                                                                    }
                                                                </td>
                                                            </tr>
                                                    ))
                                                }
                                                </tbody>
                                            </table>
                                        </div>
                                }
                            </div>
                        :
                            <div className="dismantling not_found">
                                <p className="impact">해당페이지는 로그인 후 이용 가능합니다.</p>
                                <div className="not_found-btn">
                                    <button onClick={() => navigate(-1)} type="button" className="btn border" >이전 페이지</button>
                                    <a className="btn border" href="/">메인으로</a></div>
                            </div>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
}

export default DismantlingReport;

