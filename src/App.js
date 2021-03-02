import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component{
  constructor(props){
    super(props);
    console.log("hello");
  }
  state = {
    count: 0
  };
  add = () => {
    this.setState(current =>({count : current.count + 1}));
  };
  minus = () => {
    this.setState(current =>({count : current.count - 1}));
  };
  componentDidMount(){
    console.log("component rendered");
  }

  componentDidUpdate(){
    console.log("I just updated");
  }

  render(){
    console.log("I'm rendering");
    return <div>
    <h1>The number is {this.state.count}</h1>
    <button onClick={this.add}>Add</button>
    <button onClick={this.minus}>Minus</button>
    </div>
  }
}

export default App;




//component는 대문자로 시작
//jsx : component에 정보를 보낼 수 있다
// 재사용 가능한 component를 만들어 냄!
// component에서 component로, children component로 정보를 보내는 방법

//property = "value"
//원하는 만큼 props를 보낼 수 있다.
//component를 다른 곳으로 보낼때 props는 인자로 같이 감
//jsx는 단지 HTML + JavaScript

//map은 array의 각 item에 function을 적용하고
//반환 값으로 이루어진 array를 반환

//#2.4 원하는 props를 전달받았는지 확인하기
//PropTypes 사용해 원하는 타입(string, number...)을 확인하거나
// 필수(isRequired)인지 콘솔로 오류 문구 확인 가능

//#3.0 State : 동적 데이터와 함께 작업할 때 만들어진다.
// 변하는 데이터, 존재하지 않는 데이터 

//Function component는 function이고 무언가를 return 후 screen에 표시됨
//class component는 class이고 react componnent로부터 확장되고 screen에 표시됨
// 표시될것은 render 메소드 안에 넣어야 함
//react는 class component의 render method를 자동으로! 실행한다!

//class를 쓰는 이유 ! state를 쓰기 위해
//state는 object이고 component의 data를 넣을 공간이 있고
// 이 데이터는 변한다
// 바꾸고 싶은 데이터를 state 안에 넣는다!

//setState를 쓰지 않으면 
//새 state와 함께 render function이 호츨되지 않는다!

//setState를 호출할 때마다 react는 새로운 state와 함께
//render function을 호출한다

//#3.2 Component Life Cycle
//Mounting - component가 생성될 때
//constructor() - javascript
//render() 
//componentDidMount()

//Updating - component에 update할 때 
//setState 호출-> component 호출 -> render 호출 -> componentDidUpdate

//Unmounting - component가 죽을 때
//componentWillUnmount()