import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getUsersAsync, addUserAsync } from '../redux/users/thunks';

export default function Form() {
    const items = useSelector(state => state.buttonAdd);

    const nameRef = React.useRef();
    const difficultyRef = React.useRef();
    const descriptionRef = React.useRef();
    const priceRef = React.useRef();
    const urlRef = React.useRef();

    const dispatch = useDispatch();

  return (
    <div className='form'>
      <input type = "text" name = "name" className = "field" placeholder = "Menu Name" ref = {nameRef}/>
      <input type = "text" name = "difficulty" className = "field" placeholder = "Difficulty (1-5)" ref = {difficultyRef}/>
      <input type = "text" name = "description" className = "field" placeholder = "Description" ref = {descriptionRef}/>
      <input type = "text" name = "price" className = "field" placeholder = "Price" ref = {priceRef}/>
      <input type = "text" name = "url" className = "field" placeholder = "Image url"ref = {urlRef}/>
      <button className = "btn" onClick={() => {
        const user = {
          'name': nameRef.current.value,
          'difficulty' : difficultyRef.current.value,
          'description': descriptionRef.current.value,
          'price': priceRef.current.value,
          'url': urlRef.current.value};
        dispatch(addUserAsync(user));
        nameRef.current.value='';
        difficultyRef.current.value='';
        descriptionRef.current.value='';
        priceRef.current.value='';
        urlRef.current.value='';
      }}>Add</button>
      <button className = "btn" onClick={() => {
        nameRef.current.value='';
        difficultyRef.current.value='';
        descriptionRef.current.value='';
        priceRef.current.value='';
        urlRef.current.value='';
      }}>Clear</button>

    </div>
  );
}