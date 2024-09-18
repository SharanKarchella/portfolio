import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function Links() {
  return (
    <div className="flex gap-4">
      <a href="https://github.com/SharanKarchella">
        <FaGithub size="48px" />
      </a>
      <a href="https://www.instagram.com/karchellasharan/">
        <FaSquareInstagram size="48px"/>
      </a>
      <a href="https://x.com/SKarchella">
        <FaXTwitter size="48px"/>
      </a>

    </div>
  );
}

export default Links;
