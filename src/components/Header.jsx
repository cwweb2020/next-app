"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "../lib/links";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const pathName = usePathname();

  // temporary
  const isLoged = true;

  return (
    <section className="header">
      <div className="header__wrapper">
        <div className="header__left">
          <Link href="/">
            <h4>logo</h4>
          </Link>
        </div>
        <div className="header__right">
          <ul>
            {routes.map(({ name, path }) => (
              <Link href={path} key={name}>
                <li
                  style={{ textTransform: "capitalize" }}
                  className={`${pathName === path ? "active" : ""} otra-clase`}
                >
                  {name}
                </li>
              </Link>
            ))}
            {isLoged ? (
              <Link href="/logout">
                <li style={{ textTransform: "capitalize" }}>Logout</li>
              </Link>
            ) : (
              <Link href="/login">
                <li style={{ textTransform: "capitalize" }}>Login</li>
              </Link>
            )}
            <FiMenu />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Header;
