import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

export default function Card({index}) {
    const items = useSelector(state => state.users.list);
    const item = items[index - 1];
    const dispatch = useDispatch();

  return (
    // <div onClick={() => dispatch(select(item))}>
    // <h2>{JSON.stringify(item)}</h2>
    <div>
      <h2>{item.name}</h2>
      <img className='pic' src={item.url} />
      <hr />
    </div>
  );
}