import React, { useState, useRef, useCallback, useEffect } from 'react';
import SignUp from '../../components/sign-up/SignUp'

const SignUpContainer = () => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [data, setData] = useState({
            join_agree_1: false,
            join_agree_2: false
        });
    const checkBox = useCallback(() => {
            setData({
                ...data,
                join_agree_1: !data.join_agree_1,
            });
    }, [data]);
    const checkBox2 = useCallback(() => {
        setData({
            ...data,
            join_agree_2: !data.join_agree_2,
        });
    }, [data]);
    useEffect(() => {
        data.join_agree_1 && data.join_agree_2 ? setIsDisabled(false) : setIsDisabled(true)
    }, [data]);
    return (
        <SignUp
            checkBox={checkBox}
            checkBox2={checkBox2}
            isDisabled={isDisabled}
        />
    );
}
export default SignUpContainer;