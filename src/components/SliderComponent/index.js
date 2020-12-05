import React, { Component } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";

import {
    WrapperComponentStyle,
    StyledComponentStyle,
    CardsStyled,
    CardStyle,
    CardHeaderStyle,
    CardBodyTitle
} from './styled'
import Background from '../../assets/img/background.png'


class SliderComponent extends Component {
    render() {
        return (
            <WrapperComponentStyle>
                <StyledComponentStyle>
                    <Carousel indicators={false} interval={null}>
                        <CarouselItem>
                            <CardsStyled>
                                <CardStyle>
                                    <CardHeaderStyle image={Background} />
                                    <div className="carousel-details">
                                        <CardBodyTitle>Lorem Ipsum</CardBodyTitle>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl
                                            sem, convallis in fermentum sed, iaculis ut erat. Nam justo
                                            tellus, fermentum vel nunc pellentesque, vehicula pellentesque
                                            nibh.
                                        </p>
                                    </div>
                                </CardStyle>
                                <CardStyle>
                                    <CardHeaderStyle image={Background} />
                                    <div className="carousel-details">
                                        <CardBodyTitle>Lorem Ipsum</CardBodyTitle>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl
                                            sem, convallis in fermentum sed, iaculis ut erat. Nam justo
                                            tellus, fermentum vel nunc pellentesque, vehicula pellentesque
                                            nibh.
                                        </p>
                                    </div>
                                </CardStyle>
                                <CardStyle>
                                    <CardHeaderStyle image={Background} />
                                    <div className="carousel-details">
                                        <CardBodyTitle>Lorem Ipsum</CardBodyTitle>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl
                                            sem, convallis in fermentum sed, iaculis ut erat. Nam justo
                                            tellus, fermentum vel nunc pellentesque, vehicula pellentesque
                                            nibh.
                                        </p>
                                    </div>
                                </CardStyle>
                            </CardsStyled>
                        </CarouselItem>
                    </Carousel>
                </StyledComponentStyle>
            </WrapperComponentStyle>
        );
    }
}

export default SliderComponent;
