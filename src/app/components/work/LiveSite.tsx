import React from "react";

function LiveSite({ href }: { href: string}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
    >
      Live Site
    </a>
  );
}

export default LiveSite;
