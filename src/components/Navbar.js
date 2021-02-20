import "../css/Navbar.css";
import "../css/Content.css";

const Navbar = () => {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

  return (
    <div className="navbar" id="myTopnav">
      <a className="active" href="#home">
        <i className="fa fa-fw fa-home"></i> Home
      </a>
      <a href="#">
        <i className="fa fa-fw fa-search"></i> Search
      </a>
      <a href="#news">
        <i className="fa fa-handshake-o" aria-hidden="true"></i> Friends
      </a>
      <a href="#contact">
        <i className="fa fa-users" aria-hidden="true"></i> Groups
      </a>
      <a id="navbar-right" href="#login">
        <i className="fa fa-fw fa-user"></i> Login
      </a>
      <a href="#icon" className="icon" onClick={myFunction}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
};

export default Navbar;
