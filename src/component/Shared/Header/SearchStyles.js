import styled, { css, keyframes } from "styled-components";
import SearchIcon from "./Icon/IconSearch";
import ArrowRightIcon from "./Icon/ArrowRight";

export const Container = styled.div`
  position: relative;
  width: 40px;
  height: 36px;
  box-sizing: border-box;
  border-radius: 50px;
  padding: 5px;
  // background: #B6E7FF;
  transition: all 0.5s;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ hover }) =>
    hover &&
    css`
      width: 50%;
      border: 2px solid #FFBE55;

      @media (min-width: 768px) {
        width: 80%;
      }
    `}
`;

export const SearchInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 32px;
  line-height: 35px;
  outline: 0;
  border: 0;
  font-size: 1rem;
  color: #080821;
  font-width: 600 !important;
  border-radius: 20px;
  padding: 0 20px;
  margin: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  display: ${(props) => (props.showSearchInput ? "block" : "none")};
`;

/** icons */
const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const IconCommonCss = css`
  height: 1.25rem;
  width: 1.25rem;
  fill: #FFBE55;
  z-index: 10;
  animation: ${fadeIn} 1s linear;
`;

export const IconMagnifyingGlass = styled(SearchIcon)`
  ${IconCommonCss}
`;

export const IconRightArrow = styled(ArrowRightIcon)`
  ${IconCommonCss}
  align-self: flex-end;
  cursor: pointer;
  &:hover {
    fill: #393e46;
  }
`;
