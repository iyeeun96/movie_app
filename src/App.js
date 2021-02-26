import React from 'react';

function Food({ fav }){
  return <h1>I like {fav}</h1>;
}
//jsx : component에 정보를 보낼 수 있다
// 재사용 가능한 component를 만들어 냄!
// component에서 component로, children component로 정보를 보내는 방법
function App() {
  return(
  <div>
   <h1>Hello!</h1>
    <Food fav="kimchi" />
    <Food fav="ramen" />
    <Food fav="orange" />
    <Food fav="apple" />
  </div>
  );
}

export default App;

//property = "value"
//원하는 만큼 props를 보낼 수 있다.
//component를 다른 곳으로 보낼때 props는 인자로 같이 감
//jsx는 단지 HTML + JavaScript