import { useState, useEffect, useRef, useCallback, createContext, useContext  } from 'react';
import axios from "axios";
import { useForm } from "../../hooks";
import Login from '../../components/sign-up/Login'

const LoginContainer = () => {
    const { data, userId, userPassword, onChange } = useForm();
    const {user_id, user_password} = data;

    const onSubmit = async e => {
        e.preventDefault();
        if(!user_id) {
            alert('아이디를 입력하세요.');
            userId.current.focus();
            return false;
        }
        if(!user_password) {
            alert('비밀번호를 입력하세요.');
            userPassword.current.focus();
            return false;
        }else{
            axios.get(`http://localhost:5000/users?user_id=${user_id}&user_password=${user_password}`).then((response)=>{
                if(!response.data.length){
                    alert('아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.\n' +
                        '입력하신 내용을 다시 확인해주세요.');
                }else{
                    window.localStorage.setItem('userId',response.data[0].user_id);
                    document.location.href = '/';
                }
            }).catch((error)=>{console.log('error - ',error);});
        }
    };
    return (
        <Login
            onSubmit={onSubmit}
            userId={userId}
            userPassword={userPassword}
            onChange={onChange}
        />
    );
}
export default LoginContainer;