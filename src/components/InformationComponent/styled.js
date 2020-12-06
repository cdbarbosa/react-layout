import styled from 'styled-components'

export const WrapperComponent = styled.div`
    background-color: #6F6F6F;
`

export const InformationComponentStyle = styled.div`
    padding: 4rem;
    height: 100%;
    width: 100%;

    @media (max-width: 420px) {
        padding: 4rem 1rem;
        margin: 0;
    }
`


export const InformationComponentImage = styled.img`
    border: 20px solid rgba(69, 69, 69);
    border-radius: 50%;
    width: 100%;
    height: 100%;
`

export const DetailsInformationStyle = styled.div`
    color: #fff;
    margin-left: 20px;

    @media (max-width: 420px) {
        margin: 0;
    }
`

export const DetailsInformationTitle = styled.h2`
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 20px;
`