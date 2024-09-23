import { Link, NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link 
          
          
          to="/" className="flex items-center">
            <img
              src="https://img.freepik.com/free-vector/triple-letter-modern-logo-svg_530521-1017.jpg?t=st=1726660515~exp=1726664115~hmac=eba18d58154f8fb2325a34bec3d5937cc0f19c69e76d272c61fae83fde11b455&w=826"
              alt="Logo"
              className="h-20"/>
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink 
                state={{ from: 'header' }}
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? 'text-slate-700' : 'text-slate-300'} lg:hover:bg-transparent lg:border-0 hover:text-slate-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/comments"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? 'text-slate-700' : 'text-slate-300'} lg:hover:bg-transparent lg:border-0 hover:text-slate-700 lg:p-0`
                  }
                >
                  comments
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? 'text-slate-700' : 'text-slate-300'} lg:hover:bg-transparent lg:border-0 hover:text-slate-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/posts"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? 'text-slate-700' : 'text-slate-300'} lg:hover:bg-transparent lg:border-0 hover:text-slate-700 lg:p-0`
                  }
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/user"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? 'text-slate-700' : 'text-slate-300'} lg:hover:bg-transparent lg:border-0 hover:text-slate-700 lg:p-0`
                  }
                >
                  User
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
