const Main = ()=>{
    return (
        <div id="container" className="main_page">
            <section className="head_kv">
                <div className="inner">
                    <div className="kv_area">
                        <div className="slider">
                            <div className="item">
                                <div className="img-wrap" style={{
                                    backgroundImage: `url("images/kv-1-pc.jpg")`
                                }}/>
                                <div className="desc">
                                    <span>기술 · 안전 · 환경</span>이 함께하는
                                    <br/><span>건축물해체</span> 건설환경을 추구합니다.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Main;