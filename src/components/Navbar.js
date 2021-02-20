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
      <a href="#search">
        <i className="fa fa-fw fa-search"></i> Search
      </a>
      <a href="#friends">
        <i className="fa fa-handshake-o"></i> Friends
      </a>
      <a href="#groups">
        <i className="fa fa-users"></i> Groups
      </a>
      <a href="#icon" className="icon" onClick={myFunction}>
        <i className="fa fa-bars"></i>
      </a>

      <div className="dropdown" id="navbar-right">
        <button href="#account" className="dropbtn">
          <i className="fa fa-fw fa-user"></i> Account
        </button>
        <div className="dropdown-content">
          <a href="#link">Settings</a>
          <a href="#link">Register</a>
          <a href="#link">Log In</a>
          <a href="#link">Log Out</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
