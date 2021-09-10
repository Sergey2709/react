import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';

function Header() {
  return (
    <div>
      <nav>
        <ul className="list">
          <Button outline color="primary">
            <li>
              <NavLink exact className="" to="/">
                Home
              </NavLink>
            </li>
          </Button>
          <Button outline color="primary">
            <li>
              <NavLink className="" to="/note">
                Note
              </NavLink>
            </li>
          </Button>
          <Button outline color="primary">
            <li>
              <NavLink className="" to="/create">
                Create
              </NavLink>
            </li>
          </Button>
          <Button outline color="primary">
            <li>
              <NavLink className="" to="/about">
                About
              </NavLink>
            </li>
          </Button>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
