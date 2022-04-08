import { Link } from 'react-router-dom';
import { navData } from "../hooks";
import Loader from "../components/Loader";
import BoardList from "../components/BoardList";
import SearchContainer from "./SearchContainer";
import {useCallback, useEffect, useState} from "react";
import Pagination from "./Pagination";
import axios from "axios";

const BoardContainer = ({ caption, pageName })=>{
    const [searchOn, setSearchOn] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [total, setTotal] = useState(0);
    const [current, setCurrent] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const indexOfLast = current * perPage;
    const indexOfFirst = indexOfLast - perPage;
    const [searchWord, setSearchWord] = useState('');
    const [matchFilter, setMatchFilter] = useState([]);
    const [listData, setListData] = useState([]);
    const currentPosts = listData.slice(indexOfFirst, indexOfLast);
    useEffect(()=>{
        getContent();
    }, []);

    const getContent = useCallback(async () => {
        try {
            setIsLoading(true);
            // let callPost = await axios.get(`https://jsonplaceholder.typicode.com/posts`,{
            //     searchWord : searchWord,
            // });
            let callPost = await axios.get(`http://localhost:5000/boards`);
            let data = callPost.data;
            setListData(
                data.sort((a, b) => a['date'] < b['date'] ? 1 : ((a['date'] > b['date'] ? -1 : 0))));
            setTotal(data.length);
            setCurrent(1);
        }catch (e) {
            console.log(e);
        }finally {
            setIsLoading(false);
        }
    }, [searchWord, current]);

    return (
        <div className="sub-content">
            <div className="sub-content-inner">
                <div className="sub-content-title">
                    <h1>{caption}</h1>
                </div>
                <div className="sub-content-page table">
                    {isLoading ? <Loader/> :
                        <>
                            <SearchContainer
                                caption={caption}
                                searchWord={searchWord}
                                setSearchWord={setSearchWord}
                                listData={listData}
                                setSearchOn={setSearchOn}
                                setMatchFilter={setMatchFilter}
                            />
                            <BoardList
                                caption={caption}
                                total={total}
                                currentPosts={currentPosts}
                                pageName={pageName}
                                matchFilter={matchFilter}
                                searchOn={searchOn}
                            />
                            <Pagination
                                total={total}
                                setCurrent={setCurrent}
                                perPage={perPage}
                                current={current}
                            />
                        </>
                    }
                </div>
            </div>
        </div>
    );
}
export default BoardContainer;