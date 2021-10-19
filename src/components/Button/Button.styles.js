import styled from "styled-components";

export const Wrapper = styled.button`
    display: block;
    background: var(--darkGrey);
    width: 25%;
    min-width: 200px;
    height: 60px;
    border-radius: 30px;
    color: var(--white);
    border: 0;
    font-size: var(--fontL);
    margin: 20px auto;
    outline: none;
    cursor: pointer;
    transition: all 0.3s;

    :hover {
        opacity: .8;
    }
`;