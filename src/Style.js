
import styled, { keyframes } from 'styled-components'

const rotateAnimation = keyframes`
    from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
`;

const LoaderWrapper = styled.div`
    padding-top: 15em;
    display: flex;
    justify-content: center;
    align-items: center;
    width: -webkit-fill-available;
    `;

const LoaderCenter = styled.div`
    border-radius: 50%;
    width: 80px;
    height: 80px;
    background: white;
`;

const Loader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background: linear-gradient(#0000, palevioletred);
    /* Animation */
    animation: ${rotateAnimation} 1s linear infinite;
`;

const LineHeader = styled.div`
    @media  (min-width: 1920px){
        font-size: 1em;
    }
    @media  (max-width: 1900px){
        font-size: 0.75em;
    }
    display: flex;
    color: palevioletred;
    padding-top: 0.25em;
    padding-bottom: 0.25em;
    padding-right: 1em;
    padding-left: 1em;
    width: -webkit-fill-available;
    justify-content: space-between;
    align-items: center;
`;

const StyledSorting = styled.div`
    display: inline-block;
    text-align: center;
    color: palevioletred;
    font-size: 1em;
`;
const StyledH1 = styled.h1`
    display: inline-block;
`;
const StyledName = styled.h1`
    width: 100%;
    text-align: left;
`;

const StyledSelect = styled.select`
    display: inline-block;
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 700;
    color: #444;
    line-height: 1.3;
    padding: .6em 1.4em .5em .8em;
    box-sizing: border-box;
    margin: 0;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
    border-radius: .5em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
      linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
    background-repeat: no-repeat, repeat;
    background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%;

    :hover {
        border-color: #888;
    }
    :focus {
        border-color: #fff;
        box-shadow: 0 0 0 0;
        outline: none;
        border: 1px solid #aaa;
        box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
    }
    option {
        font-weight:normal;
        background-color:lightpink
    }
`;

const StyledP = styled.p`
    display: inline-block;
    padding: 0 1rem
`;

const StyledBack = styled.p`
    display: inline-block;
    padding: 0 1rem
`;

const StyledPEl = styled.p`
    grid-column: 2 / 4;
    text-align: left;
`;

const StyledH2El = styled.h2`
    grid-row: 1;
    grid-column: 2 / 4;
    text-align: left;
`;

const StyledLi = styled.div`
    display: inline-block;
    text-align: center;
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const StyledEl = styled.div`
    text-align: center;
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    width: -webkit-fill-available;
`;

const StyledImgEl = styled.img`
    height: 25em;
    grid-row: 1 / 4
`;

const StyledImg = styled.img`
    height: 25em;
`;

const StyledUl = styled.div`
    @media  (min-width: 1920px){
        grid-template-columns: repeat(4, 1fr);
    }
    display: grid;
    grid-gap: 1em;
`;

const StyledWr = styled.div`
    width: -webkit-fill-available;
`;

const StyledContentWr = styled.div`
@media  (min-width: 1920px){
    display:grid;
    grid-gap: 2em;
    grid-template-columns: auto auto auto auto
    grid-template-rows: auto auto auto
}
    width: -webkit-fill-available;
`;


export {
    LoaderWrapper,
    LoaderCenter,
    Loader,
    LineHeader,
    StyledSorting,
    StyledH1,
    StyledSelect,
    StyledP,
    StyledLi,
    StyledImg,
    StyledUl,
    StyledEl,
    StyledWr,
    StyledName,
    StyledContentWr,
    StyledImgEl,
    StyledPEl,
    StyledH2El,
    StyledBack
};