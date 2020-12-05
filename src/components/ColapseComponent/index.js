import React, { Component } from "react";
import { Accordion, Button, Card } from "react-bootstrap";
import {
  ColapseComponentStyle,
  WrapperComponent,
  CollapseComponentImage,
} from "./styled";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import Background from "../../assets/img/background.png";

class ColapseComponent extends Component {
  state = {
    screen: 700,
    collpase: false,
  };

  handleCollapse = (e) => {};

  render() {
    return (
      <WrapperComponent>
        <ColapseComponentStyle>
          <Accordion defaultActiveKey="0">
            <Card style={{ backgroundColor: 'transparent'}}>
              <Card.Header
                className="d-flex aling-items-center justify-content-between"
                style={{ backgroundColor: "#6f6f6f", border: 'none' }}
              >
                <div className="header-title" style={{ color: "#fff" }}>
                  <h3>Lorem ipsum</h3>
                </div>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="0"
                  onClick={(e) => this.handleCollapse()}
                >
                  <FaArrowDown color="white" />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body style={{ backgroundColor: '#fff'}}>
                  <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-3">
                      <CollapseComponentImage image={Background} />
                    </div>
                    <div className="col-12 col-sm-12 col-md-7 col-lg-9">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut nisl sem, convallis in fermentum sed, iaculis ut
                        erat. Nam justo tellus, fermentum vel nunc pellentesque,
                        vehicula pellentesque nibh. Pellentesque sed sem enim.
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card style={{ backgroundColor: 'transparent'}}>
              <Card.Header
                className="d-flex aling-items-center justify-content-between"
                style={{ backgroundColor: "#6f6f6f", border: 'none' }}
              >
                <div className="header-title" style={{ color: "#fff" }}>
                  <h3>Lorem ipsum</h3>
                </div>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="1"
                  onClick={(e) => this.handleCollapse()}
                >
                  <FaArrowDown color="white" />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body style={{ backgroundColor: '#fff'}}>
                  <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-3">
                      <CollapseComponentImage image={Background} />
                    </div>
                    <div className="col-12 col-sm-12 col-md-7 col-lg-9">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut nisl sem, convallis in fermentum sed, iaculis ut
                        erat. Nam justo tellus, fermentum vel nunc pellentesque,
                        vehicula pellentesque nibh. Pellentesque sed sem enim.
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </ColapseComponentStyle>
      </WrapperComponent>
    );
  }
}

export default ColapseComponent;
