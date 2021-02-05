import React from "react";
import { CgAdd } from "react-icons/cg";
import { RiGalleryFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex bg-blue-600 text-white h-14">
      <ul className="flex items-center justify-center px-2 w-3/12">
        <li>Meme generator</li>
      </ul>
      <ul className="flex items-center justify-center flex-1 bg-blue-400 text-gray-200">
        <li className="mx-2 hover:text-white flex items-center space-x-1">
          <CgAdd />
          <Link to="/">Create Meme</Link>
        </li>
        <li className="mx-2 hover:text-white flex items-center space-x-1">
          <RiGalleryFill />
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
