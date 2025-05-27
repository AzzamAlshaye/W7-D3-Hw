// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router";
import { FaTwitter, FaDiscord, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand & Social */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">
            The Rick and Morty API
          </h3>
          <p className="text-gray-400">
            This website showcases characters from the Rick and Morty TV show.
          </p>
          <div className="flex space-x-4">
            {[FaTwitter, FaDiscord, FaGithub].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 bg-white rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
                aria-label="social link"
              >
                <Icon className="text-black text-xl" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { label: "Home", to: "/" },
              { label: "Articles", to: "/articles" },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-gray-400 hover:text-gray-200 transition focus:outline-none focus:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">
            Get in Touch
          </h4>
          <p>
            <strong className="text-white">Email:</strong>{" "}
            <a
              href="mailto:info@wikipedia.org"
              className="text-gray-400 hover:text-gray-200 transition focus:outline-none focus:underline"
            >
              info@wikipedia.org
            </a>
          </p>
          <p>
            <strong className="text-white">Support:</strong>{" "}
            <a
              href="mailto:support@wikipedia.org"
              className="text-gray-400 hover:text-gray-200 transition focus:outline-none focus:underline"
            >
              support@wikipedia.org
            </a>
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-gray-400">
          &copy; 2025 Wikipedia. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
