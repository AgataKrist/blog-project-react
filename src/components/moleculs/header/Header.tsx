import { Link } from "react-router-dom";
import s from "./Header.module.css";
import { Burger } from "../../atoms/burger";

import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenHeader } from "../../../core";
import { getAppState } from "../../../core/selectors/appSelectors";

export const Header = () => {
  const { isOpenHeader } = useSelector(getAppState);

  const dispatch = useDispatch();

  const toggleMenu = useCallback(() => {
    dispatch(setIsOpenHeader(!isOpenHeader));
  }, [dispatch, isOpenHeader]);

  useEffect(() => {
    return () => {
      dispatch(setIsOpenHeader(false));
    };
  }, [dispatch]);

  return (
    <div className={s.wrapper}>
      <Burger onClick={toggleMenu} />

      {isOpenHeader && (
        <nav>
          <ul className={"menu"}>
            <li>
              <Link className={"app"} to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link to="/registration">Registration</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};
