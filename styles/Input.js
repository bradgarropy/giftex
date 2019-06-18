import styled from "styled-components"

const Input = styled.input`
    border: 2px solid ${({theme}) => theme.colors.red};
    padding: 0.75rem 1rem;
    border-radius: 0.75rem;
`

export {Input}
