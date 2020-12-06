import React, { Component } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import { Link } from 'react-scroll'

import {
  HeroComponentStyled,
  HeroHeaderStyle,
  Item,
  HeroHeaderTitle,
  HeroHeaderSubtitle
} from "./styled";
import Background from "../../assets/img/background.png";
import { HiOutlineArrowDown } from "react-icons/hi";

class HeroComponent extends Component {
  state = {
    width: false
  }

  componentDidMount () {
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768) {
        this.setState({ width: true })
      } else {
        this.setState({ width: false })
      }
    })
  }

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
        <div className="component">
          <HeroHeaderStyle width={this.state.width.toString()}>
            <HeroHeaderTitle width={this.state.width.toString()}>Lorem Ipsum</HeroHeaderTitle>
            <HeroHeaderSubtitle width={this.state.width.toString()}>Lorem ipsum dolor sit amet, consectetir adipscing elit</HeroHeaderSubtitle>
            <Link to="slider-component" spy={true} smooth={true} className={'hero-styled-icon ' + (this.state.width ? 'icon-white' : '')}>
                <HiOutlineArrowDown size={40} />
            </Link>
          </HeroHeaderStyle>
        </div>
      </HeroComponentStyled>
    );
  }
}

export default HeroComponent;
