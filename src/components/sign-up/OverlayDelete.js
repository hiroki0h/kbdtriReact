import React from "react";

const OverlayDelete = ({isConfirm, withdrawalPassword, withdrawal_password, offOverlay, onChange, deleteAccountUser}) => {
    return (
        <div className={`overlay ${isConfirm ? 'on' : ''}`}>
            <div className="modal delete_account">
                <div className="modal-top">
                    <h4>회원 탈퇴</h4>
                    <button type="button" className="close" onClick={offOverlay}>x</button>
                </div>
                <div className="modal-center">
                    <div className="form-group">
                        <label htmlFor="withdrawal_password">비밀번호를 입력하세요.</label>
                        <input type="password" id="withdrawal_password"
                               name="withdrawal_password"
                               ref={withdrawalPassword}
                               onChange={onChange}
                               value={withdrawal_password}
                        />
                    </div>
                </div>
                <div className="modal-bottom not_found-btn">
                    <button type="button" className="btn border btn-cancel" onClick={offOverlay}>취소</button>
                    <button type="button" className="btn border btn-delete_account" onClick={deleteAccountUser}>탈퇴</button>
                </div>
            </div>
        </div>
    );
}

export default OverlayDelete;
