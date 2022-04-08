import React, {useCallback} from 'react';
import Search from "../components/Search";

const SearchContainer = ({ caption, searchWord, setSearchWord, listData, setSearchOn, setMatchFilter }) => {
    let specialChar = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;
    const onSubmit = (e) => {
        e.preventDefault();
        if(specialChar.test(searchWord)){
            alert('특수문자는 입력할 수 없습니다.');
        }
        if(searchWord.length <= 1){
            alert('검색어는 2자 이상 입력하세요.');
        }
        else{
            setMatchFilter(listData.filter((listData) => listData.title.includes(searchWord)));
            setSearchOn(false);
        }
    };
    return (
        <Search
            caption={caption}
            onSubmit={onSubmit}
            setSearchWord={setSearchWord}
        />
    );
}
export default SearchContainer;