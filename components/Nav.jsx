'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useContext } from 'react';
import { Context } from '../app/Provider';

const Nav = () => {
  const { state } = useContext(Context);
  const { userInfo } = state;

  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          alt="Promptopia Logo"
          width={30}
          height={30}
          className="object-contain"
          src="/assets/images/logo.svg"
        />

        <p className="logo_text">Promptopia</p>
      </Link>

      {/* Desktop Nav */}

      <div className="sm:flex hidden">
        {userInfo ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button type="button" onClick={() => {}} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            <button className="black_btn" type="button" onClick={() => {}}>
              Sign In
            </button>
          </>
        )}
      </div>

      {/* Mobile Nav */}
      <div className="sm:hidden flex relative">
        {userInfo ? (
          <div className="flex">
            <Image
              src="/assets/images/logo.svg"
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => {
                setToggleDropdown((prev) => !prev);
              }}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <button className="black_btn" type="button" onClick={() => {}}>
              Sign In
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
