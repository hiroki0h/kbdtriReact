import React, { useState, useCallback } from 'react';
import axios from "axios";
import SignUpForm from '../../components/sign-up/SignUpForm'
import {useForm} from "../../hooks";

const SignUpFormContainer = () => {
    const { data, userId, idPattern, userName, userPassword, newPassword, passwordPattern, userEmail, emailPattern, recaptchaBox, siteKey, checkBox, onLoadRecaptcha, onChange } = useForm();
    const [duplicationId, setDuplicationId] = useState(false);
    const [duplicationEmail, setDuplicationEmail] = useState(false);
    const {user_id, user_name, user_password, new_password, email, g_recaptcha_response} = data;
    const onSubmit = useCallback((e) => {
        e.preventDefault();
        if(!user_id) {
            alert('아이디를 입력하세요.');
            userId.current.focus();
            return false;
        }
        if (!idPattern.test(user_id)) {
            alert('아이디 형식이 올바르지 않습니다.');
            userId.current.focus();
            return false;
        }
        if(!duplicationId) {
            alert('아이디 중복 확인하세요.');
            return false;
        }
        if(!user_password) {
            alert('비밀번호를 입력하세요.');
            userPassword.current.focus();
            return false;
        }
        if (!passwordPattern.test(user_password)) {
            alert('비밀번호 형식이 올바르지 않습니다.');
            userPassword.current.focus();
            return false;
        }
        if(user_password !== new_password){
            alert('비밀번호가 일치하지 않습니다.');
            newPassword.current.focus();
            return false;
        }
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
        }
        if(!duplicationEmail) {
            alert('이메일 중복 확인하세요.');
            return false;
        }
        if (!g_recaptcha_response) {
            alert('리캡쳐 확인해주세요.');
            return false;
        }
        else{
            alert('done !!');
        }
    }, [data, duplicationId, duplicationEmail]);
    const duplicationIdEvent = useCallback(async () => {
        try {
            let callUser = await axios.get(`http://localhost:5000/users?id=${userId.current.value}`);
            let data = callUser.data[0].name;
            setDuplicationId(false);
            alert(`이미 사용중인 아이디입니다.`);
        } catch (e) {
            console.log("catch");
            setDuplicationId(true);
            alert(`사용 가능한 아이디입니다.`);
        }
    }, [duplicationId]);
    const duplicationEmailEvent = useCallback(async () => {
        try {
            let callUser = await axios.get(`http://localhost:5000/users?email=${userEmail.current.value}`);
            let data = callUser.data[0].name;
            setDuplicationEmail(false);
            alert(`이미 사용중인 이메일입니다.`);
        } catch (e) {
            console.log("catch");
            setDuplicationEmail(true);
            alert(`사용 가능한 이메일입니다.`);
        }
    }, [duplicationEmail]);
    const recaptchaChange = useCallback((value) =>{
        onLoadRecaptcha(value);
    }, []);
    return (
        <SignUpForm
            onSubmit={onSubmit}
            userId={userId}
            userName={userName}
            userPassword={userPassword}
            newPassword={newPassword}
            userEmail={userEmail}
            onChange={onChange}
            recaptchaBox={recaptchaBox}
            siteKey={siteKey}
            checkBox={checkBox}
            recaptchaChange={recaptchaChange}
            duplicationIdEvent={duplicationIdEvent}
            duplicationEmailEvent={duplicationEmailEvent}
        />
    );
}
export default SignUpFormContainer;