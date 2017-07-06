import React from 'react';


export default class Mainbox extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contentbox">
      		<h1>contentbox</h1>
      		{this.props.children}
      </div>
    );
  }
}
