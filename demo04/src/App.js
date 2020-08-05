import React,{Component,Fragment} from 'react';
import CuteGirlItem from './cuteGirlItem';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue:'',
      list:['1','2','3'],
    }
  }
  render() {
    return (
      <Fragment>
        <input value={this.state.inputValue} onChange={this.changeValue.bind(this)}/>
        <button onClick={this.addList.bind(this)}>提交</button>
        <ul>
          {
            this.state.list.map((item,index) => {
              return (
                <div key={index}>
                  <CuteGirlItem content={item} index={index} remove={this.removeList.bind(this)}/>
                </div>
                )
            })
          }
        </ul>
      </Fragment>
    )
  }
  changeValue(e) {  
    this.setState({
      inputValue:e.target.value
    })
  }
  addList() {
    if(this.state.inputValue === '') {
      return;
    }
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:'',
    })
  }
  removeList(index) {
    let newList = this.state.list;
    newList.splice(index,1);
    this.setState({
      list:newList
    })
  }
}
export default App;