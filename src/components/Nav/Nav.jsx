import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <ul className="flex items-center justify-around w-2/3 gap-12 mx-auto">
        <Link className="py-2 px-3 bg-slate-800 text-white rounded-md" to={'/'}>
          Home
        </Link>
        <Link
          className="py-2 px-3 bg-slate-800 text-white rounded-md"
          to={'/about'}
        >
          About
        </Link>
        <Link
          className="py-2 px-3 bg-slate-800 text-white rounded-md"
          to={'/login'}
        >
          Login
        </Link>
        <Link
          className="py-2 px-3 bg-slate-800 text-white rounded-md"
          to={'/register'}
        >
          Register
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
