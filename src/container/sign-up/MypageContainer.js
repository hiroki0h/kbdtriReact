import { useState, useEffect, useRef, useCallback } from 'react';
import {useForm, useLayer} from "../../hooks";
import Mypage from '../../components/sign-up/Mypage'
import axios from 'axios';

const MypageContainer = () => {
    const [currentDadta, setCurrentDadta] = useState(
        {
            current_password: '',
            current_email: ''
        }
    );
    const [isLoading, setIsLoading] = useState(true);
    const { container, isOpen, onActive, offActive } = useLayer();
    const { data, setData, userPassword, newPassword, userEmail, newPassword2, passwordPattern, userName, emailPattern,  onChange, checkBox } = useForm();
    const {user_password, new_password, new_password2, user_id, user_name, email, withdrawal_password, mailing_check} = data;
    const {current_password, current_email} = currentDadta;
    const [duplicationEmail, setDuplicationEmail] = useState(false);
    const onSubmit = useCallback((e) => {
        e.preventDefault();
        if(!user_password) {
            alert('비밀번호를 입력하세요.');
            userPassword.current.focus();
            return false;
        }
        if(new_password){
            if (!passwordPattern.test(new_password)) {
                alert('비밀번호 형식이 올바르지 않습니다.');
                newPassword.current.focus();
                return false;
            }
            if(new_password !== new_password2){
                alert('비밀번호가 다릅니다.');
                newPassword.current.focus();
                return false;
            }
        }
        if(current_email !== email) {
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
        }
        if(current_password !== user_password) {
            alert('비밀번호가 다릅니다.');
            userPassword.current.focus();
            return false;
        }
        else{
            alert('개인정보 수정이 완료되었습니다.');
        }
    }, [data, duplicationEmail]);
    const onKeyUp = useCallback((e) => {
        if (!new_password) {
            setNewPasswordOn(false);
        } else {
            setNewPasswordOn(true);
        }
    }, [data]);
    const duplicationEmailEvent = useCallback(async () => {
        try {
            let callUser = await axios.get(`http://localhost:5000/users?email=${userEmail.current.value}`);
            let duplication = callUser.data[0].name;
            setDuplicationEmail(false);
            alert(`이미 사용중인 이메일입니다.`);
        } catch (e) {
            setDuplicationEmail(true);
            alert(`사용 가능한 이메일입니다.`);
        }
    }, [duplicationEmail]);
    const textHoverMouseEnter = (e) => {
        e.currentTarget.nextSibling.classList.add('on');
    };
    const textHoverMouseLeave = (e) => {
        e.currentTarget.nextSibling.classList.remove('on');
    };
    const [isConfirm, setIsConfirm] = useState(false);
    const [newPasswordOn, setNewPasswordOn] = useState(false);
    const withdrawalPassword = useRef();
    const deleteAccount = () => {
        if (window.confirm('이 아이디를 탈퇴하시겠습니까?\r\n회원 탈퇴 시 모든 정보가 삭제됩니다.')) {
            setIsConfirm(!isConfirm);
            onActive();
            setTimeout(() => {
                withdrawalPassword.current.focus();
            }, 100);
        } else {
            return false;
        }
    };
    const offOverlay = useCallback((e) => {
        setIsConfirm(false);
        setData({
            ...data,
            'withdrawal_password': ''
        });
        offActive();
    }, [data, withdrawal_password]);
    const deleteAccountUser = useCallback((e) => {
        if(!withdrawal_password) {
            alert('비밀번호를 입력하세요.');
            withdrawalPassword.current.focus();
            return false;
        }if(current_password !== withdrawal_password) {
            alert('비밀번호를 잘못 입력했습니다.\n' +
                '입력하신 내용을 다시 확인해주세요.');
            withdrawalPassword.current.focus();
            return false;
        }else{
            alert('성공적으로 탈퇴가 되었습니다.');
            window.localStorage.removeItem('userId');
            document.location.href = '/';
        }
    }, [data]);
    useEffect(()=>{
        getContent().then();
    }, []);
    const getContent = useCallback(async () => {
        try {
            setIsLoading(true);
            const userCall = await axios.get(`http://localhost:5000/users?user_id=${window.localStorage.getItem('userId')}`);
            setData({
                ...data,
                "user_id": userCall.data[0].user_id,
                "user_name": userCall.data[0].user_name,
                "email": userCall.data[0].email,
                "mailing_check": userCall.data[0].mailing_check,
            });
            setCurrentDadta({
                ...currentDadta,
                "current_password": userCall.data[0].user_password,
                "current_email": userCall.data[0].email,
            });
        } catch {
        }finally {
            setIsLoading(false);
        }
    }, []);
    return (
        <Mypage
            container={container}
            onSubmit={onSubmit}
            textHoverMouseEnter={textHoverMouseEnter}
            textHoverMouseLeave={textHoverMouseLeave}
            userPassword={userPassword}
            newPassword={newPassword}
            userName={userName}
            onChange={onChange}
            deleteAccount={deleteAccount}
            isConfirm={isConfirm}
            withdrawalPassword={withdrawalPassword}
            offOverlay={offOverlay}
            deleteAccountUser={deleteAccountUser}
            checkBox={checkBox}
            onKeyUp={onKeyUp}
            newPasswordOn={newPasswordOn}
            duplicationEmailEvent={duplicationEmailEvent}
            userEmail={userEmail}
            data={data}
            isLoading={isLoading}
        />
    );
}
export default MypageContainer;