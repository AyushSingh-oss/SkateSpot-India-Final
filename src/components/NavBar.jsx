import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useClerk, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = ({ onHomeClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { openSignIn, signOut } = useClerk();

  const onAddSpotClick = () => {
    navigate("/addspot");
  };


const Navbar = ({ onHomeClick,  onLoginClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const onAddSpotClick=() => {
       navigate("/addspot");
  }
  return (
    <nav className="sticky top-0 z-50 bg-neutral-950 text-white shadow-md">
      <div className="flex justify-between items-center px-6 py-3">
        {/* === Left Section === */}
        <div className="flex items-center gap-3">
          {/* Hamburger (Mobile) */}
          <div
            className={`flex flex-col justify-center gap-[5px] w-6 h-5 cursor-pointer transition-transform md:hidden ${
              menuOpen ? "rotate-90" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`block h-[3px] w-full bg-red-500 rounded transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`block h-[3px] w-full bg-red-500 rounded transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[3px] w-full bg-red-500 rounded transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </div>

          {/* Logo */}
          <div

            onClick={() => navigate("/")}
            onClick={()=>{navigate('/')}}

            className="text-lg font-bold uppercase tracking-wide cursor-pointer hover:text-red-500 transition-colors"
          >
            SkateSpot India
          </div>
        </div>

        {/* === Desktop Nav Links === */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <button

              onClick={() => navigate("/community")}
              className="hover:text-red-500 transition-colors cursor-pointer"
            >
              Community

              onClick={()=>navigate('/community')}
              className="hover:text-red-500 transition-colors cursor-pointer"
            >
              community

            </button>
          </li>
          <li>
            <button
              onClick={onAddSpotClick}
              className="hover:text-red-500 transition-colors cursor-pointer"
            >
              Add Spot
            </button>
          </li>

          {/* === Auth Section === */}
          <SignedOut>
            <li>
              <button
                onClick={() => openSignIn({})}
                className="hover:text-red-500 transition-colors cursor-pointer"
              >
                Login
              </button>
            </li>
          </SignedOut>

          <SignedIn>
            <li className="flex items-center gap-3">
              <UserButton />
            </li>
          </SignedIn>
        </ul>
      </div>

      {/* === Mobile Dropdown === */}
      {menuOpen && (
        <ul className="flex flex-col md:hidden bg-neutral-950 border-t border-red-500/20 px-6 py-3 animate-fadeIn space-y-3">
          <li>
            <button
              onClick={() => {
                onHomeClick();
                setMenuOpen(false);
              }}
              className="w-full text-left hover:text-red-500 transition-colors"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                onAddSpotClick();
                setMenuOpen(false);
              }}
              className="w-full text-left hover:text-red-500 transition-colors"
            >
              Add Spot
            </button>
          </li>

          {/* === Auth Buttons for Mobile === */}
          <SignedOut>
            <li>
              <button
                onClick={() => {
                  openSignIn({});
                  setMenuOpen(false);
                }}
                className="w-full text-left hover:text-red-500 transition-colors"
              >
                Login
              </button>
            </li>
          </SignedOut>

          <SignedIn>
            <li className="flex items-center justify-between">
              <UserButton/>
            </li>
          </SignedIn>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
