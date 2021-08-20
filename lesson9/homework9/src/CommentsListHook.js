export default function CommentsListHook(props) {
  return (
    <>
      <div>
        
        {props.data.map((el, index) => (
          <section key={el.id}>
            <p>
              <b>
                {index + 1}. {el.email}
              </b>
            </p>
            <p>{el.body}</p>
          </section>
        ))}
      </div>
    </>
  );
}
