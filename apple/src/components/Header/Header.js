import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/images/icons/logo-sm.png";
import Search from "../../Assets/images/icons/search-icon-sm.png";
import Cart from "../../Assets/images/icons/cart-sm.png";
import HeaderProps from "./HeaderProps";

function Header() {
  let url = "";
  return (
    <>
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <Link className="navbar-brand mx-auto" to="/">
              <img src={Logo} alt="logo" />
            </Link>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                {/* <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/mac/">
                    Mac
                  </a>
                </li> */}
                <HeaderProps url="/mac" name="Mac" />
                <HeaderProps url="/iphone" name="Iphone" />
                <HeaderProps url="/ipad" name="Ipad" />
                <HeaderProps url="/watch" name="Watch" />
                <HeaderProps url="/tv" name="Tv" />
                <HeaderProps url="/music" name="Music" />
                <HeaderProps url="/support" name="Support" />
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/search/">
                    <img src={Search} alt="search" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/cart/">
                    <img src={Cart} alt="cart" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
//with react-bootstrap
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Row from "react-bootstrap/Row";
// import Navbar from "react-bootstrap/Navbar";
// {/*
// <div classNameName="nav-wrapper fixed-top">
//         <div classNameName="container header-list">
//           <Navbar
//             bg="dark"
//             gap={"10"}
//             variant={"dark"}
//             item-align={"center"}
//             expand="lg"
//           >
//             <Container classNameName="justify-content-md-center">
//               <Navbar.Brand href="#home">
//                 <img src={Logo} alt="logo" />
//               </Navbar.Brand>
//               <Navbar.Toggle aria-controls="basic-navbar-nav" />
//               <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav classNameName="me-auto">
//                   <Nav.Link href="#home">Mac</Nav.Link>
//                   <Nav.Link href="#link">Ipad</Nav.Link>
//                   <Nav.Link href="#home">Watch</Nav.Link>
//                   <Nav.Link href="#link">tv</Nav.Link>
//                   <Nav.Link href="#home">Music</Nav.Link>
//                   <Nav.Link href="#link">Support</Nav.Link>
//                   <Navbar.Brand href="#home">
//                     <img src={Search} alt="logo" />
//                   </Navbar.Brand>
//                   <Navbar.Brand href="#home">
//                     <img src={Cart} alt="logo" />
//                   </Navbar.Brand>
//                 </Nav>
//               </Navbar.Collapse>
//             </Container>
//           </Navbar>
//         </div>
// </div>
//  */}
