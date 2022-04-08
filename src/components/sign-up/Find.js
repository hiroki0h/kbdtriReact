const Find = ({legend, inputHtmlFor1, inputName1, inputName2, inputHtmlFor2, placeholder1, placeholder2, onChange, inputRef1, inputRef2, for1, for2, onSubmit}) => {
    return (
        <div className="find-account">
            <div className="title">
                <h2>{legend}</h2>
                <p>가입시 입력하셨던 {inputHtmlFor1}, {inputHtmlFor2}을 입력해 주세요.</p>
            </div>
            <div className="login-form">
                <ul>
                    <li>
                        <label htmlFor={for1}>{inputHtmlFor1}</label>
                        <input type="text"
                               name={inputName1}
                               id={for1}
                               placeholder={placeholder1}
                               onChange={onChange}
                               ref={inputRef1}
                        />
                    </li>
                    <li>
                        <label htmlFor={for2}>{inputHtmlFor2}</label>
                        <input type="text"
                               name={inputName2}
                               id={for2}
                               placeholder={placeholder2}
                               onChange={onChange}
                               ref={inputRef2}
                        />
                    </li>
                </ul>
                <button type="button" name="action" onClick={() => onSubmit(legend)}  className="btn" >{legend}</button>
            </div>
        </div>
    );
}
export default Find;