import {Link} from "react-router-dom";
import { useState, useEffect, useRef, useCallback } from 'react';
import MatchFilter from "./MatchFilter";
import axios from "axios";

const BoardList = ({caption, total, currentPosts, pageName, matchFilter, searchOn})=> {
    const [current, setCurrent] = useState(1);
    const [asd, setAsd] = useState([]);
    useEffect(()=>{
        for( let i = 1; i < total+1; i++){
            setAsd(total);
        }
        console.log(asd);
    },[]);
    return (
        <table className="table-board table-block">
            <caption>{`${caption} 게시판`}</caption>
            <colgroup>
                <col width="100"/>
                <col width="*"/>
                <col width="100"/>
                <col width="150"/>
            </colgroup>
            <thead>
                <tr>
                    <th scope="col">NO</th>
                    <th scope="col">제목</th>
                    <th scope="col">첨부파일</th>
                    <th scope="col">등록일</th>
                </tr>
            </thead>
            <tbody>
            {
                ( total == 0 ) ?
                    <tr>
                        <td colSpan="4" className="text-center">등록된 게시글이 없습니다.</td>
                    </tr>
                    :
                    ( !searchOn ) ?
                        <MatchFilter
                            pageName={pageName}
                            matchFilter={matchFilter}
                        />
                        :
                        <>
                            {currentPosts.sort((a,b) => b-a).map((list, index) => (
                                <tr key={index+1}>
                                    <td className="text-left ellipsis">
                                        <Link to={`${pageName+list.id}`}>{list.title}</Link>
                                    </td>
                                    <td className="file">
                                        {
                                            list.file === ""
                                                ? "-"
                                                : <i className="fas fa-file"/>
                                        }
                                    </td>
                                    <td className="date">{list.date}</td>
                                    <td className="number">{index+1}</td>
                                </tr>
                            ))}
                    </>
                }
            </tbody>
        </table>
    );
}
export default BoardList;