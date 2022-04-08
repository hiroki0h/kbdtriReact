import React, { useState, useRef, useEffect, useCallback } from 'react';
import OnlineContact from "../../components/Information-service/OnlineContact";
import { useForm } from "../../hooks";

const OnlineContactContainer = () => {
    const { data, setData, userName, userEmail, recaptchaBox, siteKey, onLoadRecaptcha, onChange } = useForm();
    const {email, inquiry_title, inquiry_contents, user_name, g_recaptcha_response, mailing_check, mobile} = data;
    const [isCheckBox, setIsCheckBox] = useState(false);
    const checkBox = () => {
        setIsCheckBox(!isCheckBox);
    };
    const [mobileNumber, setMobileNumber] = useState({
        mobile1: '',
        mobile2: '',
        mobile3: '',
    });
    const mobileOnChange = useCallback((e) => {
        setMobileNumber({
            ...mobileNumber,
            [e.target.name]: e.target.value
        });
    }, [mobileNumber]);
    const recaptchaChange = useCallback((value) =>{
        onLoadRecaptcha(value);
    }, []);
    const {mobile1, mobile2, mobile3} = mobileNumber;
    const onSubmit = useCallback((e) => {
        e.preventDefault();
        if(!inquiry_title) {
            alert('제목을 입력하세요.');
            inquiryTitle.current.focus();
            return false;
        }
        if(!email) {
            alert('이메일 주소를 입력하세요.');
            userEmail.current.focus();
            return false;
        }
        if(!user_name) {
            alert('이름을 입력하세요.');
            userName.current.focus();
            return false;
        }
        if(!inquiry_contents) {
            alert('내용을 입력하세요.');
            inquiryContents.current.focus();
            return false;
        }
        if(!isCheckBox){
            alert('개인정보 수집에 동의하여주세요.');
            return false;
        }
        if (!g_recaptcha_response) {
            alert('리캡쳐 확인해주세요.');
            return false;
        }
        if(mobile1 && mobile2 && mobile3){
            setData({
                ...data,
                'mobile' : mobile1+mobile2+mobile3
            });
        }
    }, [data, isCheckBox, mobileNumber]);
    const inquiryTitle = useRef(null);
    const inquiryContents = useRef(null);
    return (
        <OnlineContact
            onSubmit={onSubmit}
            onChange={onChange}
            mobileOnChange={mobileOnChange}
            inquiryTitle={inquiryTitle}
            inquiryContents={inquiryContents}
            userEmail={userEmail}
            checkBox={checkBox}
            userName={userName}
            siteKey={siteKey}
            recaptchaBox={recaptchaBox}
            recaptchaChange={recaptchaChange}
        />
    );
}
export default OnlineContactContainer
