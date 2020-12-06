import styled from 'styled-components'

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
    transform: translate(-50%, 0%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 10%;
    width: 100%;
    background-color: ${props => props.width === 'true' ? '#454545' : 'transparent'};
`

export const HeroHeaderTitle = styled.h2`
    text-transform: uppercase;
    font-weight: 600;
    font-size: 50px;
    color: ${props => props.width === 'true' ? '#fff' : '#53612f'};

    @media (max-width: 420px) {
        font-size: 35px;
    } 
    
`

export const HeroHeaderSubtitle = styled.h5`
    text-align: center;
    font-weight: 600;
    font-size: 24px;
    color: ${props => props.width === 'true' ? '#fff' : '#2d3b09'};
    margin-bottom: 30px;

    @media (max-width: 420px) {
        font-size: 15px;
    } 
`