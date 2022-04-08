import DismantlingReport from "../../components/certification/DismantlingReport";
import { useState, useEffect, useRef, useCallback } from 'react';
import { useForm } from "../../hooks";
import Loader from "../../components/Loader";
import axios from "axios";
import data from "../../sub-page-nav.json";
import {useNavigate} from "react-router-dom";

const DismantlingReportContainer = () => {
    const navigate = useNavigate();
    const [isLogin, setIssLogin] = useState(false);
    useEffect(() => {
        if(window.localStorage.getItem('userId') === null){
        }else{
            setIssLogin(true);
        }
    }, []);
    const withdrawalPassword = useRef();
    const [isLoading, setIsLoading] = useState(true);
    const [logIn, setLogIn] = useState(true);
    const [isValue, setValue] = useState('');
    const [listData, setListData] = useState([]);
    const [total, setTotal] = useState(0);
    const { data, setData, onChange } = useForm();
    const {agency_name, file_name} = data;
    const fileUploadEvent = e => {
        const fileUploaded = e.target.files[0];
        setData({
            ...data,
            'file_name' : fileUploaded
        });
        setValue(fileUploaded.name);
    };
    const deleteRepot = (id) => {
        if (window.confirm('삭제하시겠습니까?')) {
            setListData(listData.filter((list) => list.id !== id));
        } else {
            return false;
        }
    };
    const onSubmit = useCallback((e) => {
        e.preventDefault();
        if(!agency_name) {
            alert('신청기관명을 입력하세요.');
            return false;
        }
        if(!file_name) {
            alert('해체 계획서 파일을 올려주세요.');
            return false;
        }
        else{
            putContent();
        }
    }, [data]);
    const putContent = useCallback(async () => {
        try {
            setIsLoading(true);
            let callUser = await axios.put('http://localhost:5000/file',
                {
                    name: agency_name,
                    date: '2022-02-02',
                    fileName: file_name,
                    'statue': '접수 완료'
                });
            let data = callUser.data;
            setListData(data);
            setTotal(data.length);
        }catch (e) {
            console.log('catch');
        }finally {
            setIsLoading(false);
        }
    }, []);
    useEffect(()=>{
        getContent().then();
    },[]);
    const getContent = useCallback(async () => {
        try {
            setIsLoading(true);
            let callUser = await axios.get(`http://localhost:5000/file`);
            let data = callUser.data;
            setListData(data);
            setTotal(data.length);
        }catch (e) {
            console.log('catch');
        }finally {
            setIsLoading(false);
        }
    }, []);

    return (
        <DismantlingReport
            isLogin={isLogin}
            isLoading={isLoading}
            onChange={onChange}
            onSubmit={onSubmit}
            withdrawalPassword={withdrawalPassword}
            fileUploadEvent={fileUploadEvent}
            isValue={isValue}
            deleteRepot={deleteRepot}
            total={total}
            listData={listData}
            navigate={navigate}
        />
    );
}

export default DismantlingReportContainer;
