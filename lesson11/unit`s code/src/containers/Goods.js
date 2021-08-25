import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { addGoods } from '../actions';

const Goods = () => {
  let input
  const dispatch = useDispatch();

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        console.dir(e.target.elements.id.value);
        console.dir(e.target.elements.title.value);
        console.dir(e.target.elements.image.value);
        dispatch(addGoods(e.target.elements.id.value, e.target.elements.title.value, e.target.elements.image.value))
      }}>
        <input name="id" defaultValue="3jf8f" />
        <input name="title" defaultValue="new goods" />
        <input name="image" defaultValue="https://i8.rozetka.ua/goods/20227720/jogway_tj532c_images_20227720511.jpg" />
        <button type="submit">
          Add New Goods
        </button>
      </form>
    </div>
  )
}

export default connect()(Goods)
