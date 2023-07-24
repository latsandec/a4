import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editUserAsync } from '../redux/users/thunks';

export default function Detail() {
  const item = useSelector(state => state.users.detail);
  const priceRef = React.useRef();
  const dispatch = useDispatch();
  if (item == null) {
    return (<div className='detail'>
      <h3>(Select a menu and the details will be shown here)</h3>
    </div>);
  } else {
    return (
      <div className='detail'>
        <h3>{item.name}</h3>
        <h3>Difficulty: $ {item.difficulty}</h3>
        <h3>Price: $ {item.price}</h3>
        <h3>Description: {item.description}</h3>
        <input type="text" name="price" className="field" placeholder="Price" ref={priceRef} />
        <button className="btn" onClick={() => {
          const user = {...item};
          user.price = priceRef.current.value;
          dispatch(editUserAsync(user));
          priceRef.current.value = '';
        }}>Edit Price</button>
      </div>
    );
  }

}