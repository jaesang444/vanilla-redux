import {createStore} from 'redux';

const form = document.querySelector("form");
const input = document.querySelector("input");
//const ul = document.querySelector('ul');

const ADD_TODO="ADD_TODO";
const DELETE_TODO="DELETE_TODO";

const reducer = (state = [], action) =>{
  switch(action.type){
    case ADD_TODO :
      return [...state, {text : action.text, id : Date.now() }];
    case DELETE_TODO :
      return [...state, ]
    default :
      return 0;
  }
};

const store = createStore(reducer);

const addTodo = text => {
  store.dispatch({type : ADD_TODO, text : text});
}

const onSubmit = e =>{
  e.preventDefault();
  const toDo = input.value;
  input.value ="";
  addTodo(toDo);
};

const onChange = () => {
  console.log(store.getState());
}

store.subscribe(onChange);

form.addEventListener("submit", onSubmit);
