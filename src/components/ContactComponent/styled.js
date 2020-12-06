import styled from 'styled-components'

export const WrapperComponent = styled.div`
    background-color: #6f6f6f;
    position: relative;
    width: 100%;
    height: 50vh;

    @media (max-width: 576px) {
        height: 70vh !important;
    }
`
    
export const ContactComponentStyle = styled.div`
    padding: 4rem;
    background-color: #454545;
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
    width: 100%;
    height: 100%;
`