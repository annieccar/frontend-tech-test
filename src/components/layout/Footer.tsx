import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer({ footerData }) {
  return (
    <div className=" flex flex-col items-center w-full ml-5 mr-5 mt-10 text-xl">
      <div className="flex gap-6 text-2xl">
        <FaFacebook className="text-lightGray" />
        <FaInstagram className="text-lightGray" />
        <FaLinkedin className="text-lightGray" />
        <FaTwitter className="text-lightGray" />
      </div>
      <div className="text-lightGray text-base mt-5">Copyright Origins Digital 2024</div>
    </div>
  );
}

export default Footer;
