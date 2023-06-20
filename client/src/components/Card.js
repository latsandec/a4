import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUserAsync, getUserAsync } from '../redux/users/thunks';

export default function Card({index}) {
    const items = useSelector(state => state.users.list);
    const detail = useSelector(state => state.users.detail);
    const item = items.find(i => i.id == index);
    const dispatch = useDispatch();

  return (
    <div className='card' onClick={() => {
      if ((detail == null) || (detail.id != item.id)) {
        dispatch(getUserAsync(item.id));
      }
    }}>
      <h2>{item.name}</h2>
      <img className='pic' src={item.url} />
      <button className = "btn" onClick={() => {
        dispatch(deleteUserAsync(item.id));
      }}>Delete</button>
      <hr />
    </div>
  );
}