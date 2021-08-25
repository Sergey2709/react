import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { addNewUser } from '../action';

const AddUser = () => {
  const dispatch = useDispatch();

  const formHandler = e => {
    e.preventDefault();
    console.dir(e.target.elements.passport.value);
    console.dir(e.target.elements.name.value);
    console.dir(e.target.elements.age.value);
    dispatch(
      addNewUser(
        e.target.elements.passport.value,
        e.target.elements.name.value,
        e.target.elements.age.value,
      ),
    );
  };

  return (
    <div>
      <form onSubmit={e => formHandler(e)}>
        <input name="passport" />
        <input name="name" />
        <input name="age" />
        <button type="submit">Add New User</button>
      </form>
    </div>
  );
};

export default connect()(AddUser);
