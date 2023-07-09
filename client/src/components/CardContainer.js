import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Card from './Card';
import { getUsersAsync } from '../redux/users/thunks';

export default function CardContainer() {
  const items = useSelector(state => state.users.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersAsync());
  }, [items]);

  return (
    <div className='card-container'>
          {items.map((item) => {
            return (<Card index={item['id']}/>);}   
          )}
    </div>
  );
}