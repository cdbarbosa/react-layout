import styled from 'styled-components'

export const WrapperComponent = styled.div`
    background-color: #BEBEBE;
`

export const ColapseComponentStyle = styled.div`
    padding: 4rem;
`

export const CollapseComponentImage = styled.div`
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 25vh;
    width: 250px;
    margin: 0 auto;
    border: 10px solid rgba(69, 69, 69);
    border-radius: 50%;
`