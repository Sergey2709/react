import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectGoods } from '../store/goodsSlice';

import Goods from '../components/Goods';
import { increment } from '../store/cartSlice';

function GoodsList() {
  const goods = useSelector(selectGoods);
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    e.preventDefault();
    let t = e.target;
    if(!t.classList.contains('add-to-cart')) return true;
    dispatch(increment(t.getAttribute('data-key')));
  }

  return (
    <div className="goods-field" onClick={(e) => clickHandler(e)}>
      {goods.map(item => (
        <Goods
          title={item.title}
          cost={item.cost}
          image={item.image}
          articul={item.articul}
          key={item.articul}
        />
      ))}
    </div>
  );
}

export default GoodsList;
