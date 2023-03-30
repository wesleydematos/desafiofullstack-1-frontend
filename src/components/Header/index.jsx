import { Link } from "react-router-dom";
import { HeaderStyled } from "./style";

export const Header = () => {
  return (
    <HeaderStyled>
      <div className="logo">
        <p>C&C</p>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Customers">Customers</Link>
      </nav>
    </HeaderStyled>
  );
};
