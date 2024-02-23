import Link from 'next/link';
import Style from './Navbar.module.css';
import ToggleButton from '../ToggleButton/ToggleButton';

export function Navbar() {
  return (
    <nav className={Style.Navbar}>
      <ul>
        <li>
          <Link className="HomeLink" href={'/'}>
            Home
          </Link>
        </li>
        <li>
          <Link className="AboutLink" href={'/about'}>
            About
          </Link>
        </li>
        <li>
          <Link className="ContactLink" href={'/contact'}>
            Contact
          </Link>
        </li>
      </ul>

      <ToggleButton />
    </nav>
  );
}
