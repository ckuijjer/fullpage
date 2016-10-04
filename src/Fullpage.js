import React, { Component } from 'react';
import Scroll from 'react-scroll';
const Element = Scroll.Element;
const scroller = Scroll.scroller;

export class Fullpage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.active !== this.props.active) {
      scroller.scrollTo(nextProps.active,
        {
          duration: 1500,
          delay: 100,
          smooth: true,
        });
    }
  }
  
  render() {
    const components = this.props.children.map((current, index) => (
      <Element name={"" + index}>{current}</Element>
    ));

    return (
        <div>{components}</div>
    );
  }
}

export const Slide = ({ children }) => {
    const style = {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#f99',
        boxSizing: 'border-box',
        border: '10px solid #c66',
    };

    return (
      <div style={style}>
          {children}
      </div>
    );
};
