import "../styles/layout/Header.scss";
import title from "../images/gif/header.gif";

function Header() {
  return (
    <header>
      <figure className="headerTitle">
        <img
          className="headerTitle__img"
          src={title}
          alt="Website title: Harry Potter"
        />
      </figure>
    </header>
  );
}

export default Header;
