import React from "react";

const FooterLink = ({ href, text }) => {
  return (
    <div>
      <a
        href={href}
        className="link text-black text-lg no-underline hover:text-[#0076FF] transition"
      >
        {text}
      </a>
    </div>
  );
};

export default FooterLink;
