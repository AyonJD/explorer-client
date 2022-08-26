import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { articleDataContext } from "../../../App";
import {
    Container,
    SearchInput,
    IconRightArrow,
    IconMagnifyingGlass
} from "./SearchStyles";

function Search() {
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const showSearchInput = isHovered || isFocused;
    const valueObj = useContext(articleDataContext);
    const { setSearchValue, articles, searchValue } = valueObj;
    const navigate = useNavigate()


   

    const handleSearchInput = (e) => {
        // let filterSearch = articles.filter(article => {
        //     if (article?.blogs?.category?.toLowerCase().includes(e.target.value?.toLowerCase()) || article?.blogs?.Title?.toLowerCase().includes(searchValue?.toLowerCase())) {
        //         return article
        //     } 
        // })
        // if(filterSearch.length === 0){
        //     navigate("/")
        //     return 
        // }

        setSearchValue(e.target.value);
        navigate("/search-category")
        // e.target.value= ""
    }


    return (
        <Container
            className="search-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            hover={showSearchInput}
        >
            <SearchInput placeholder="Search" onChange={handleSearchInput} showSearchInput={showSearchInput} />
            {showSearchInput ? <IconRightArrow className="right_icon" /> : <IconMagnifyingGlass />}
        </Container>
    );
}

export default Search;
