import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";


const Footer = () => {
    
    return (
        <div>
            <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Side - Logo & Description */}
        <div className="md:w-1/4 md:mt-14">
          <Link to="/" className="btn-ghost font-bold text-5xl">
            JobsProtal
          </Link>
          <p className="text-gray-400 mt-3.5 text-sm">
            A new way to make payments easy,<br /> reliable, and secure.
          </p>
        </div>

        {/* Center - Useful Links */}
        <div className="md:w-1/2 grid grid-cols-3 gap-6">
          <div>
            <h4 className="text-lg font-semibold mb-2">Useful Links</h4>
            <ul className="space-y-1 text-gray-400">
              <li>
                <Link to="/content" className="hover:text-blue-400">
                  Content
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-blue-400">
                  How it Works
                </Link>
              </li>
              <li>
                <Link to="/create" className="hover:text-blue-400">
                  Create
                </Link>
              </li>
              <li>
                <Link to="/explore" className="hover:text-blue-400">
                  Explore
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-blue-400">
                  Terms & Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Community</h4>
            <ul className="space-y-1 text-gray-400">
              <li>
                <Link to="/help-center" className="hover:text-blue-400">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/partners" className="hover:text-blue-400">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/suggestions" className="hover:text-blue-400">
                  Suggestions
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-blue-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/newsletters" className="hover:text-blue-400">
                  Newsletters
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Partner</h4>
            <ul className="space-y-1 text-gray-400">
              <li>
                <Link to="/our-partner" className="hover:text-blue-400">
                  Our Partner
                </Link>
              </li>
              <li>
                <Link to="/become-partner" className="hover:text-blue-400">
                  Become a Partner
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side - Contact Info */}
        <div className="md:w-1/4 space-y-2">
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <p className="flex items-center text-gray-400">
            <MdEmail className="mr-2 text-xl" /> example@email.com
          </p>
          <p className="flex items-center text-gray-400">
            <MdPhone className="mr-2 text-xl" /> +123 456 7890
          </p>
          <p className="flex items-center text-gray-400">
            <MdPhone className="mr-2 text-xl" /> +987 654 3210
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://instagram.com"
              className="text-gray-400 hover:text-blue-400"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-blue-400"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-blue-400"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-blue-400"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        Copyright © 2022 HooBank. All Rights Reserved.
      </div>
    </footer>
        </div>
    );
};

export default Footer;