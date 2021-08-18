import React from 'react';

class Homework1 extends React.Component {
  constructor(props) {
    console.log(props);
    super();
    this.state = {
      s1: props.p1,
      s2: 201,
    };
  }

  buttonHandler = () => {
    let addNum3 = this.state.s1;
    addNum3 += 50;
    let addNum4 = this.state.s2;
    addNum4 += 50;
    this.setState({ s1: addNum3, s2: addNum4 });
  }

  componentDidMount() {
    const addNum1 = this.state.s1 + 5;
    const addNum2 = this.state.s2 + 5;
    this.setState({ s1: addNum1, s2: addNum2 });
  }

  render() {
    return (
      <>
        <div>{this.state.s1}</div>
        <div>{this.state.s2}</div>
        <button onClick={this.buttonHandler}>Add 50</button>
      </>
    );
  }
}

export default Homework1;
