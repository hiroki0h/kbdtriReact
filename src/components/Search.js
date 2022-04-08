import React from "react";

const Search = ({caption, onSubmit, setSearchWord})=> {
    return (
        <div className="search-form">
            <form id="searchForm" onSubmit={onSubmit}>
                <fieldset>
                    <legend className="hidden">{`${caption} 검색`}</legend>
                    <ul>
                        <li className="keyword_wrap">
                            <i className="fa fa-search"/>
                            <label htmlFor="keyword" className="blind">검색어</label>
                            <input type="text" id="keyword" title="검색어" placeholder="검색어를 입력하세요."
                                   name="searchKeyword" onChange={(e)=>{setSearchWord(e.target.value)}}/>
                        </li>
                        <li>
                            <button className="submit btn" type="submit" id="search_btn">검색</button>
                        </li>
                    </ul>
                </fieldset>
            </form>
        </div>
    );
}
export default Search;