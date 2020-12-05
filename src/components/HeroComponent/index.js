import React, { Component } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";

import {
  HeroComponentStyled,
  HeroHeaderStyle,
  Item,
  HeroHeaderTitle,
  HeroHeaderSubtitle,
  HeroIconStyled
} from "./styled";
import Background from "../../assets/img/background.png";
import { HiOutlineArrowDown } from "react-icons/hi";

class HeroComponent extends Component {
  render() {
    return (
      <HeroComponentStyled>
        <Carousel controls={false}>
          <CarouselItem>
            <Item image={Background} />
          </CarouselItem>
          <CarouselItem>
            <Item image={Background} />
          </CarouselItem>
          <CarouselItem>
            <Item image={Background} />
          </CarouselItem>
        </Carousel>
        <HeroHeaderStyle>
          <HeroHeaderTitle>Lorem Ipsum</HeroHeaderTitle>
          <HeroHeaderSubtitle>Lorem ipsum dolor sit amet, consectetir adipscing elit</HeroHeaderSubtitle>
          <HeroIconStyled>
            <HiOutlineArrowDown size={40} />
          </HeroIconStyled>
        </HeroHeaderStyle>
      </HeroComponentStyled>
    );
  }
}

export default HeroComponent;
