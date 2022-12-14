import React from "react";
import { Link } from "react-router-dom";
function HeaderProps({ url, name }) {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link js-scroll-trigger" to={url}>
          {name}
        </Link>
      </li>
    </>
  );
}

export default HeaderProps;
