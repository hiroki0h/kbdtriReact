import BoardView from "../components/BoardView";
import {useCallback, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import NotFound from "../components/NotFound";
import axios from "axios";

const BoardViewContainer = ()=> {
    const [listData, setListData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [pageData, setPageData] = useState(
        {
            kbdt_news: {
                        'name': 'KBDT 소식',
                        'subTop': 'service',
                        'linkTo': '/information-service/kbdt-news'
                    },
            notice: {
                'name': '공지사항',
                'subTop': 'service',
                'linkTo': '/information-service/notice'
            },
            dismantling_research: {
                'name': '해체기술 연구',
                'subTop': 'center',
                'linkTo': '/research-development/dismantling-research'
            },
        }
    );
    const { id } = useParams();
    useEffect(()=>{
        getContent().then();
    },[]);
    const getContent = useCallback(async () => {
        try {
            setIsLoading(true);
            let callPost = await axios.get(`http://localhost:5000/boards`);
            const array = callPost.data.filter(x => x.id === id);
            setListData(array[0]);
        }catch (e) {
            console.log(e);
        }finally {
            setIsLoading(false);
        }
    }, []);

    return (
        <>
            {
                listData ?
                    <BoardView pageData={pageData[listData.name]} listData={listData} isLoading={isLoading}/>
                    :<NotFound/>
            }
        </>
    );
}
export default BoardViewContainer;