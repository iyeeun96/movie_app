import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  { 
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
    ,rating: 5  
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
     ,rating: 4.9 
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
    , rating: 4.8
   },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
      ,rating: 5.5
   },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
      ,rating: 4.7
    }

]

function Food({ name, picture, rating }){
  return (
  <div>
    <h2>I like { name }</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
  </div>
    );

}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
}

function App() {
  return(
  <div>
    {foodILike.map(dish =>(
       <Food key={dish.id} name ={dish.name} picture={dish.image} rating={dish.rating}/>
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

//#2.4 원하는 props를 전달받았는지 확인하기
//PropTypes 사용해 원하는 타입(string, number...)을 확인하거나
// 필수(isRequired)인지 콘솔로 오류 문구 확인 가능

//#3.0 State : 동적 데이터와 함께 작업할 때 만들어진다.
// 변하는 데이터, 존재하지 않는 데이터 