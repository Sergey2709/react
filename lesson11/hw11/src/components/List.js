function UserList(data) {
  console.log(data);

  return (
    <div>
      <ul>
        {data.user.map(item => (
          <li key={item.passport}>
            Passport: {item.passport} UserName: {item.name} Age: {item.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
