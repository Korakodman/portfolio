import React from "react";
import {
  faGithub,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef } from "react";
import EmailForm from "../EmailForm";
const Demofooter = forwardRef((ref, contactRef) => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4" ref={contactRef}>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Section 1: About */}
        <div>
          <EmailForm />
        </div>

        {/* Section 2: Links */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact me</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex">
              <FontAwesomeIcon icon={faPhone} className=" fa-2x" />
              <p className="ml-2 text-lg">091-038-0792</p>
            </li>
            <li className="flex">
              <FontAwesomeIcon icon={faEnvelope} className=" fa-2x" />
              <p className="ml-2 text-lg">korakodmice@gmail.com</p>
            </li>
          </ul>
        </div>

        {/* Section 3: Socials */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow me</h2>
          <div className="flex space-x-4 text-xl">
            <a
              href="https://github.com/korakodman"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} className=" fa-2x" />
            </a>
            <a
              href="https://www.facebook.com/HFGSMM"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faFacebook} className=" fa-2x" />
            </a>
            <a
              href="https://www.facebook.com/HFGSMM"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faInstagram} className=" fa-2x" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Create By Korakod. All rights reserved.
      </div>
    </footer>
  );
});
Demofooter.displayName = "Demofooter";
export default Demofooter;
