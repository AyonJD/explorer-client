import { useContext, useEffect, useRef, useState } from "react";
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
    const { setSearchValue } = valueObj;

    const handleSearchInput = (e) => {
        setSearchValue(e.target.value);
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
