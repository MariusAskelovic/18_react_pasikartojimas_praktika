import { Link, NavLink } from 'react-router-dom';
import css from './Header.module.css';

export default function Header() {
  return (
    <header className={css.header}>
      <div className='container'>
        <Link to='/'>
          LOG<span>O</span>
        </Link>
        <nav className={css.navLinks}>
          <NavLink to='/posts'>Posts</NavLink>
          <NavLink to='/products'>Products</NavLink>
          <NavLink to='/todos'>Dodos</NavLink>
          <NavLink to='/users'>Users</NavLink>
        </nav>
      </div>
    </header>
  );
}
