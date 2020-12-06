import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  WrapperComponentStyle,
  StyledComponentStyle,
  CardStyle,
  CardHeaderStyle,
  CardBodyTitle,
} from "./styled";
import Background from "../../assets/img/background.png";

class SliderComponent extends Component {
  state = {
    data: [
      {
        title: "Lotem Ipsum",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl sem, convallis in fermentum sed, iaculis ut erat. Nam justo tellus, fermentum vel nunc pellentesque, vehicula pellentesquenibh.",
      },
      {
        title: "Lotem Ipsum",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl sem, convallis in fermentum sed, iaculis ut erat. Nam justo tellus, fermentum vel nunc pellentesque, vehicula pellentesquenibh.",
      },
      {
        title: "Lotem Ipsum",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl sem, convallis in fermentum sed, iaculis ut erat. Nam justo tellus, fermentum vel nunc pellentesque, vehicula pellentesquenibh.",
      },
      {
        title: "Lotem Ipsum",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl sem, convallis in fermentum sed, iaculis ut erat. Nam justo tellus, fermentum vel nunc pellentesque, vehicula pellentesquenibh.",
      },
      {
        title: "Lotem Ipsum",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl sem, convallis in fermentum sed, iaculis ut erat. Nam justo tellus, fermentum vel nunc pellentesque, vehicula pellentesquenibh.",
      },
      {
        title: "Lotem Ipsum",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl sem, convallis in fermentum sed, iaculis ut erat. Nam justo tellus, fermentum vel nunc pellentesque, vehicula pellentesquenibh.",
      },
    ],
    settings: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    }
  };
  
  componentDidMount () {
      window.addEventListener('resize', () => {
          if (window.innerWidth <= 768) {
              this.setState({ settings: {...this.state.state, slidesToShow: 1 }})
          } else {
            this.setState({ settings: {...this.state.state, slidesToShow: 3 }})
          }
      })
  }

  render() {
    return (
      <WrapperComponentStyle id="slider-component">
        <div className="component">
          <StyledComponentStyle>
            <Slider {...this.state.settings}>
                {this.state.data.map(item => (
                  <CardStyle key={item.title}>
                      <CardHeaderStyle image={Background} />
                      <div className="carousel-details">
                          <CardBodyTitle>{item.title}</CardBodyTitle>
                          <p>
                          {item.text}
                          </p>
                      </div>
                  </CardStyle>
                ))}
            </Slider>
          </StyledComponentStyle>
        </div>
      </WrapperComponentStyle>
    );
  }
}

export default SliderComponent;
