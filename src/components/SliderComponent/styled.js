import styled from 'styled-components'

export const WrapperComponentStyle = styled.div`
    background-color: rgba(69, 69, 69);
`

export const StyledComponentStyle = styled.div`
    padding: 4rem 7rem;
    
    @media (max-width: 420px){
        padding: 4rem 3rem;
    }
`

export const CardStyle = styled.div`
    margin: 0 15px;
    bakcground: transparent;
    color: #fff;
    text-align: center;
`

export const CardHeaderStyle = styled.div`
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 200px;
    width: 300px;
    margin: 0 auto 20px auto;
    border: 10px solid #6F6F6F;
`

export const CardBodyTitle = styled.h3`
    color: #fff;
    font-weight: 600;
    text-transform: uppercase;
`