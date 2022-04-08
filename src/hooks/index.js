import { useState, useEffect, useRef, useCallback } from 'react';
import data from '../sub-page-nav.json';

export const navData = data;
export const useMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        isMobileCheck();
        window.addEventListener('resize', isMobileCheck);
        return () => window.removeEventListener('resize', isMobileCheck);
    }, []);
    const isMobileCheck = useCallback(() => {
        setIsMobile(window.innerWidth <= 1280);
    }, []);
    return { isMobile };
};
export const useLayer = () => {
    const container = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const onActive = useCallback( () => {
        container.current.parentElement.parentElement.parentElement.parentElement.classList.add('avtive');
    }, [container]);
    const offActive = useCallback( () => {
        container.current.parentElement.parentElement.parentElement.parentElement.classList.remove('avtive');
    }, [container]);
    return { container, isOpen, onActive, offActive };
};
export const useForm= () => {
    const form = useRef(null);
    const userId = useRef(null);
    const userName = useRef(null);
    const userPassword = useRef(null);
    const userEmail = useRef(null);
    const userEmailPw = useRef(null);
    const newPassword = useRef(null);
    const newPassword2 = useRef(null);
    const recaptchaBox = useRef(null);
    const [siteKey] = useState('6LcWy3geAAAAABdZOzF7xhlTDFI8P558SNg2IwqW');
    const [data, setData] = useState(
        {
            user_id: '',
            user_password: '',
            new_password: '',
            new_password2: '',
            withdrawal_password: '',
            user_name: '',
            email: '',
            email_pw: '',
            mailing_check: false,
            g_recaptcha_response: '',
            inquiry_title: '',
            inquiry_contents: '',
            mobile: '',
            agency_name: '',
            file_name: '',
        }
    );
    const idPattern = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{4,20}$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,20}$/;
    const emailPattern = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const {mailing_check, file_name, g_recaptcha_response} = data;
    const onChange = useCallback((e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }, [data]);
    const checkBox = useCallback(() => {
        setData({
            ...data,
            mailing_check: !mailing_check
        });
    }, [data]);
    const onLoadRecaptcha = useCallback((value) => {
        if (!g_recaptcha_response) {
            setData({
                ...data,
                g_recaptcha_response: value
            });
        } else {
            setData({
                ...data,
                g_recaptcha_response: ''
            });
        }
    }, [data]);
    return { form, data, setData, userId, userName, userPassword, userEmail, userEmailPw, newPassword, newPassword2, recaptchaBox, siteKey, idPattern, passwordPattern, emailPattern, onChange, checkBox, onLoadRecaptcha };
};
export const useClock= () => {
    const time = new Date();
    const beautyMonth = time.getMonth() < 10 ? `0${time.getMonth()}` : time.getMonth();
    const todayIs = `${time.getFullYear()}-${beautyMonth}-${time.getDate()}`;
    return { todayIs };
};