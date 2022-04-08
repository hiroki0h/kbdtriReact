import React, { useState, useRef, useCallback } from 'react';
import Find from '../../components/sign-up/Find'
import {useForm} from "../../hooks";

const FindContainer = () => {
    const { data, userName, userId, userEmail, userEmailPw, onChange, emailPattern } = useForm();
    const {user_name, email, email_pw, user_id} = data;
    const onSubmit = useCallback((legend) => {
        if(legend === '아이디 찾기'){
            if(!user_name) {
                alert('이름을 입력하세요.');
                userName.current.focus();
                return false;
            }
            if(!email) {
                alert('이메일 주소를 입력하세요.');
                userEmail.current.focus();
                return false;
            }
            if (!emailPattern.test(email)) {
                alert('이메일 주소 형식이 올바르지 않습니다.');
                userEmail.current.focus();
                return false;
            }else{
                console.log('done ID');
            }
        }
        if(legend === '비밀번호 찾기'){
            if(!user_id) {
                alert('아이디를 입력하세요.');
                userId.current.focus();
                return false;
            }
            if(!email_pw) {
                alert('이메일 주소를 입력하세요.');
                userEmailPw.current.focus();
                return false;
            }
            if (!emailPattern.test(email_pw)) {
                alert('이메일 주소 형식이 올바르지 않습니다.');
                userEmailPw.current.focus();
                return false;
            }else{
                console.log('done PW');
            }
        }
    }, [data]);
    return (
        <div id="container" className="member_page">
            <h1>아이디/비밀번호 찾기</h1>
            <div className="find">
                <form>
                    <Find
                        legend='아이디 찾기'
                        inputHtmlFor1='이름'
                        inputName1='user_name'
                        inputHtmlFor2='이메일'
                        inputName2='email'
                        placeholder1='이름을 입력하세요'
                        placeholder2='이메일 주소를 입력하세요'
                        onChange={onChange}
                        inputRef1={userName}
                        inputRef2={userEmail}
                        for1='userName'
                        for2='userEmail'
                        onSubmit={onSubmit}
                    />
                    <Find
                        legend='비밀번호 찾기'
                        inputHtmlFor1='아이디'
                        inputName1='user_id'
                        inputHtmlFor2='이메일'
                        inputName2='email_pw'
                        placeholder1='아이디를 입력하세요'
                        placeholder2='이메일 주소를 입력하세요'
                        onChange={onChange}
                        inputRef1={userId}
                        inputRef2={userEmailPw}
                        for1='userId'
                        for2='userEmailPw'
                        onSubmit={onSubmit}
                    />
                </form>
            </div>
        </div>
    );
}
export default FindContainer;