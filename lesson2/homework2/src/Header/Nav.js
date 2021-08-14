function Nav(props) {
  const navObj = props.nav;
  const listItem = navObj.map(item => (
    <li>
      <a href={item.link} key={item.link}>
        {item.text}
      </a>
    </li>
  ));
  return (
    <>
      <nav>
        <ul className="main-navigation">
          {listItem}
        </ul>
      </nav>
    </>
  );
}

export default Nav;
