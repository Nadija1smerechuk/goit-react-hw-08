import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operation";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>
        Welcome, <span>{user.name}</span>
      </p>
      <button
        type="button"
        onClick={() => dispatch(logOut())}
        className={css.btn}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;