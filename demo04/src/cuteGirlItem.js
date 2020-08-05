import React, { Component } from 'react';
class CuteGirlItem extends Component {
  constructor(props) {
    super(props);
    this.handerClick = this.handerClick.bind(this);
  }
  state = {  }
  render() { 
    return ( 
      <li>
        {this.props.content}
        <button onClick={this.handerClick}>删除</button>
      </li>
     );
  }
  handerClick() {
    this.props.remove(this.props.index);
  }
}
 
export default CuteGirlItem;