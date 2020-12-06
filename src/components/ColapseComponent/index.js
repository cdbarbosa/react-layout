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
    selected: '',
    data: [
      { title: 'Lorem ipsum', body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ut nisl sem, convallis in fermentum sed, iaculis ut
      erat. Nam justo tellus, fermentum vel nunc pellentesque,
      vehicula pellentesque nibh. Pellentesque sed sem enim.`},
      { title: 'Lorem ipsum', body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ut nisl sem, convallis in fermentum sed, iaculis ut
      erat. Nam justo tellus, fermentum vel nunc pellentesque,
      vehicula pellentesque nibh. Pellentesque sed sem enim.`},
      { title: 'Lorem ipsum', body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ut nisl sem, convallis in fermentum sed, iaculis ut
      erat. Nam justo tellus, fermentum vel nunc pellentesque,
      vehicula pellentesque nibh. Pellentesque sed sem enim.`},
      { title: 'Lorem ipsum', body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ut nisl sem, convallis in fermentum sed, iaculis ut
      erat. Nam justo tellus, fermentum vel nunc pellentesque,
      vehicula pellentesque nibh. Pellentesque sed sem enim.`},
      { title: 'Lorem ipsum', body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ut nisl sem, convallis in fermentum sed, iaculis ut
      erat. Nam justo tellus, fermentum vel nunc pellentesque,
      vehicula pellentesque nibh. Pellentesque sed sem enim.`},
      { title: 'Lorem ipsum', body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ut nisl sem, convallis in fermentum sed, iaculis ut
      erat. Nam justo tellus, fermentum vel nunc pellentesque,
      vehicula pellentesque nibh. Pellentesque sed sem enim.`},
    ]
  };

  handleCollapse = (e) => {
    let index = 'header'+e
    if (this.state.selected === '') {
      document.getElementById(index).classList.add('active')
    } else if (this.state.selected !== e) {
      const target = 'header'+this.state.selected
      document.getElementById(target).classList.remove('active')
      document.getElementById(index).classList.add('active')
    } else if (this.state.selected === e) {
      document.getElementById(index).classList.remove('active')
      this.setState({ selected: '' })
      return;
    }
    this.setState({ selected: e })
  };

  render() {
    return (
      <WrapperComponent>
        <div className="component">

          <ColapseComponentStyle>
            <Accordion>
              {this.state.data.map((item, index) => (
                <Card key={index} style={{ backgroundColor: 'transparent'}}>
                  <Card.Header
                    id={'header'+index}
                    className="card-header-collapse d-flex aling-items-center justify-content-between"
                  >
                    <div className={"header-title " + (this.state.selected === index ? 'active' : '')}>
                      <h3>{item.title}</h3>
                    </div>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey={index.toString()}
                      onClick={() => this.handleCollapse(index)}
                    >
                      {this.state.selected === index ? (
                          <FaArrowUp color="#333"/>
                        ) : (
                          <FaArrowDown color="white" />
                      )}
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={index.toString()}>
                    <Card.Body style={{ backgroundColor: '#fff'}}>
                      <div className="row justify-content-center align-items-center">
                        <div className="collapse-image col-12 col-sm-12 col-md-4 col-lg-3">
                          <CollapseComponentImage src={Background} />
                        </div>
                        <div className="col-12 col-sm-12 col-md-7 col-lg-9">
                          <p>
                            {item.body}
                          </p>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              ))}
            </Accordion>
          </ColapseComponentStyle>
        </div>
      </WrapperComponent>
    );
  }
}

export default ColapseComponent;
