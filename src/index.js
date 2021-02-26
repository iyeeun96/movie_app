import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render( <App />,  document.getElementById('root'));
//<App>/ : component - HTML을 반환하는 함수
//JSX : javascript 안의 HTML. 
//Component를 만들고 어떻게 사용하는지에 대한 것

//react application은 한 번에 하나의 component만 rendering 할 수 있다.
//따라서 모든 것은 App 안에 들어가야함