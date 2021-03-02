import React from 'react';

function Food({ name, picture }){
  return (
  <div>
    <h2>I like { name }</h2>
    <img src={picture}/>
  </div>
    );

}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
  },
  {
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  },
  {
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }

]

function App() {
  return(
  <div>
   <h1>Hello!</h1>
    {foodILike.map(dish =>(
       <Food name ={dish.name} picture={dish.image}/>
    ))}
  </div>
  );
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