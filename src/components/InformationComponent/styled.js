import styled from 'styled-components'

export const WrapperComponent = styled.div`
    background-color: #6F6F6F;
`

export const InformationComponentStyle = styled.div`
    padding: 4rem;
    height: 100%;
    width: 100%;
`

export const InformationComponentImage = styled.div`
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 50vh;
    width: 500px;
    border: 20px solid rgba(69, 69, 69);
    border-radius: 50%;
`

export const DetailsInformationStyle = styled.div`
    color: #fff;
    margin-left: 20px;
`

export const DetailsInformationTitle = styled.h2`
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 20px;
`