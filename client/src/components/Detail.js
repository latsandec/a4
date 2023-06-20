import React from 'react';
import {useSelector} from 'react-redux';

export default function Detail() {
    const item = useSelector(state => state.users.detail);
    if (item == null) {
        return (<div className='detail'>
            <h3>(Select a menu and the details will be shown here)</h3>
          </div>);
    } else {
        return (
            <div className='detail'>
              <h3>{item.name}</h3>
              <h3>Price: $ {item.price}</h3>
              <h3>Description: {item.description}</h3>
            </div>
          );
    }
  
}