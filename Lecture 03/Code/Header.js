import Logo from "./logo.png";
import Icon from "./user_icon.png";

export default function Header() {
  return (
    <div className="header">
      <img className="image" src={Logo} width={50} />
      <input className="search" placeholder="Search" />
      <img className="image" src={Icon} width={50} alt="User Icon" />
    </div>
  );
}
