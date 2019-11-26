import React from 'react';

// function App() {
//   return (
//     <div>
//       hello react
//     </div>
//   );
// }

// export default App;

class Button extends React.Component {
  // static defaultProps = {
  //   name: "noname"
  // }

  state = {
    click: 0
  };

  onClickBtn = () => {
    console.log(`clicked`);
    this.setState({click: this.state.click+1});
  }

  render() {
    return (
      // <button>
      //   {/* 난 {this.props.name}'s 버튼이야 */}
      //   난 {this.state.name}'s 버튼이야
      // </button>
      <input onClick={this.onClickBtn} value={`난 ${this.state.click}이야.`} />
    )
  }
}

function FuncBtn(props) {
  const {name} = props;
  return (
    <button>
      {name}'s 함수 버튼
    </button>
  )
}

class NumCnt extends React.Component {
  state = {
    num : 0
  };

  plusBtn= () => {
    const current = this.state.num;
    this.setState({num: current+1});
  }

  minusBtn= () => {
    const current = this.state.num;
    this.setState({num: current-1});
  }

  render() {
    return (
      <div>
      <button onClick={this.plusBtn}>+1</button>
      {this.state.num}
      <button onClick={this.minusBtn}>-1</button>
    </div>
    )
  }
}

export default class App extends React.Component {
  render() {
    const name = "지원"
    const style = {
      height: '100vh',
      backgroundColor : 'black',
      color : 'white'
    }
    return (
      <div style={style}>
        {/* hello react. My name is {name}.
        <Button name={"지원"}/>
        <Button />
        <FuncBtn name={'zwon_lala'} /> */}
        <NumCnt/>

      </div>
    );
  }
}