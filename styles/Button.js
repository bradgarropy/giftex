import styled from "styled-components"

const Button = styled.button`
    background: ${({theme}) => theme.colors.green};
    border: none;
    color: ${({theme}) => theme.colors.white};
    font-weight: 600;
    font-size: 1rem;
    padding: 0.75rem 4rem;
    border-radius: 0.75rem;
    cursor: pointer;

    &:hover {
        background: ${({theme}) => theme.colors.darkGreen};
    }
`

export {Button}
