import React from 'react';
import { Search, User, ShoppingCart } from 'lucide-react';

const logo = '/assets/image/logo.png';

const Header = () => {

    const items = <>
     <li><a className="font-bold">New Drops</a></li>
      <li>
        <details>
          <summary className="font-bold">Men</summary>
          <ul className="p-2 bg-base-100 w-40 z-1">
            <li><a className="font-bold">Submenu 1</a></li>
            <li><a className="font-bold">Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a className="font-bold">Woman</a></li>
    </>

    return (
			<div className="flex justify-center">
				<div className="navbar bg-white shadow-sm w-[1320px]">
					<div className="navbar-start">
						<div className="dropdown">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost lg:hidden"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									{" "}
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h8m-8 6h16"
									/>{" "}
								</svg>
							</div>
							<ul
								tabIndex={-1}
								className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
							>
								{items}
							</ul>
						</div>
						<ul className="hidden lg:flex menu menu-horizontal px-1">
							{items}
						</ul>
					</div>
					<div className="navbar-center">
						<a className="">
							<img src={logo} alt="" />
						</a>
					</div>
					<div className="navbar-end gap-4">
						<button className="btn btn-ghost btn-circle">
							<Search size={20} />
						</button>
						<button className="btn btn-ghost btn-circle">
							<User size={20} />
						</button>
						<button className="btn btn-ghost btn-circle">
							<ShoppingCart size={20} />
						</button>
					</div>
				</div>
			</div>
		);
};

export default Header;