import React, { useEffect, useState } from 'react';

function PlaceholderPostHook() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1/posts')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <section>
      {data.map(el => (
           <h2 key={el.id}>{el.id}. {el.title} <p>{el.body}</p> </h2> 
        ))}
    </section>
  );
}

export default PlaceholderPostHook;
