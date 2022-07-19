import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{/* display an <a> tag for each link here */}</nav>;
  return (
    <nav>
      {links.map((link) => (
        <a href={"#" + link} key={link+new Date()}>{link}</a>
        
        
      ))}
    </nav>
  );
}

export default NavBar;
