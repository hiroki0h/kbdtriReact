import HeaderContainer from "./container/HeaderContainer";
import Footer from "./components/Footer";
import Main from "./components/Main";
import {Link, Route, Routes} from "react-router-dom";
import './scss/style.scss';
import IntroduceCertification from "./components/certification/IntroduceCertification";
import DismantlingReportContainer from "./container/certification/DismantlingReportContainer";
import Notice from "./components/Information-service/Notice";
import OnlineContactContainer from "./container/Information-service/OnlineContactContainer";
import KBDTNews from "./components/Information-service/KBDTNews";
import LoginContainer from "./container/sign-up/LoginContainer";
import SignUpContainer from "./container/sign-up/SignUpContainer";
import FindContainer from "./container/sign-up/FindContainer";
import SignUpFormContainer from "./container/sign-up/SignUpFormContainer";
import MypageContainer from "./container/sign-up/MypageContainer";
import Privacy from "./components/sign-up/Privacy";
import NotFound from "./components/NotFound";
import BoardViewContainer from "./container/BoardViewContainer";
import Seo from "./components/Seo";

function App() {
    return (
        <div className="App">
            <Seo/>
            <HeaderContainer/>
            <Routes>
                <Route path="/" element={<Main/>}/>

                <Route path="/login" element={<LoginContainer/>} />
                <Route path="/sign-up" element={<SignUpContainer/>} />
                <Route path="/sign-up-form" element={<SignUpFormContainer/>} />
                <Route path="/privacy" element={<Privacy/>} />
                <Route path="/mypage" element={<MypageContainer/>} />
                <Route path="/find" element={<FindContainer/>} />


                <Route path="/certification/introduce-certification" element={<IntroduceCertification/>} />
                <Route path="/certification/dismantling-report" element={<DismantlingReportContainer/>} />

                <Route path="/information-service/notice" element={<Notice/>} />
                <Route path="/information-service/online-contact" element={<OnlineContactContainer/>} />
                <Route path="/information-service/kbdt-news" element={<KBDTNews/>} />

                <Route path="/information-service/notice/:id" element={<BoardViewContainer/>} />
                <Route path="/information-service/kbdt-news/:id" element={<BoardViewContainer/>} />
                <Route path="*" element={<NotFound/>} />

            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
