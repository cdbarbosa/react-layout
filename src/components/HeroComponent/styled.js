import styled, { keyframes } from 'styled-components'

export const HeroComponentStyled = styled.div`
    min-height: 100vh;
    width: 100%;
    position: relative;
`

export const Item = styled.div`
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
    width: 100vw;
`

export const HeroHeaderStyle = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 30%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const HeroHeaderTitle = styled.h2`
    text-transform: uppercase;
    font-weight: 600;
    font-size: 50px;
    color: #53612f;
`

export const HeroHeaderSubtitle = styled.h5`
    font-weight: 600;
    font-size: 24px;
    color: #2d3b09;
    margin-bottom: 30px;
`

const bounce = keyframes`
    0% {
      transform: translateY(0px);  
    }

    50% {
        transform: translateY(10px);
    }
    
    100% {
        transform: translateY(0px);
    }
`

export const HeroIconStyled = styled.button`
    animation: ${bounce} .8s linear infinite;
    border: none;
    background: transparent;
`