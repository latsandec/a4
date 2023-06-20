import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUserAsync } from '../redux/users/thunks';

export default function Card({index}) {
    const items = useSelector(state => state.users.list);
    const item = items.find(i => i.id == index);
    const dispatch = useDispatch();

  return (
    // <div onClick={() => dispatch(select(item))}>
    // <h2>{JSON.stringify(item)}</h2>
    <div className='card'>
      <h2>{item.name}</h2>
      <img className='pic' src={item.url} />
      <button className = "btn" onClick={() => {
        dispatch(deleteUserAsync(item.id));
      }}>Delete</button>
      <hr />
    </div>
  );
}