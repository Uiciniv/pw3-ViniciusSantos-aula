import { Outlet, Link } from "react-router-dom";
import style from "./NavBar.module.css";
import logo from "../../../public/book.png";

const NavBar = () => {
  return (
    <>
      <nav className={style.navbar}>
        <ul className={style.list}>
          <Link to="/">
            <li>
              <img src={logo} className={style.fotinha} />
            </li>
          </Link>

          <Link to="/">
            <li className={style.item}>HOME</li>
          </Link>

          <Link to="/createBooks">
            <li className={style.item}>CADASTRAR LIVROS</li>
          </Link>

          <Link to="/listBooks">
            <li className={style.item}>LISTAR LIVROS</li>
          </Link>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default NavBar;
