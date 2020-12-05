import React, { Component } from "react";
import {
  WrapperComponent,
  InformationComponentStyle,
  InformationComponentImage,
  DetailsInformationStyle,
  DetailsInformationTitle
} from "./styled";
import Background from "../../assets/img/background.png";

class InformationComponent extends Component {
  render() {
    return (
      <WrapperComponent>
        <InformationComponentStyle className="row justify-content-center align-items-center">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <InformationComponentImage image={Background} />
          </div>
          <DetailsInformationStyle className="col-12 col-sm-12 col-md-6 col-lg-5">
            <DetailsInformationTitle>Lorem Ipsum</DetailsInformationTitle>
            <div className="paragraph-details">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl
                sem, convallis in fermentum sed, iaculis ut erat. Nam justo
                tellus, fermentum vel nunc pellentesque, vehicula pellentesque
                nibh. Pellentesque sed sem enim.{" "}
              </p>
              <p>
                <b>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  nisl sem, convallis in fermentum sed, iaculis ut erat. Nam
                  justo tellus, fermentum vel nunc pellentesque, vehicula
                  pellentesque nibh. Pellentesque sed sem enim.{" "}
                </b>
              </p>
              <p>
                <i>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  nisl sem, convallis in fermentum sed, iaculis ut erat. Nam
                  justo tellus, fermentum vel nunc pellentesque, vehicula
                  pellentesque nibh. Pellentesque sed sem enim.{" "}
                </i>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl
                sem, convallis in fermentum sed, iaculis ut erat. Nam justo
                tellus, fermentum vel nunc pellentesque, vehicula pellentesque
                nibh. Pellentesque sed sem enim.{" "}
              </p>
            </div>
          </DetailsInformationStyle>
        </InformationComponentStyle>
      </WrapperComponent>
    );
  }
}

export default InformationComponent;
