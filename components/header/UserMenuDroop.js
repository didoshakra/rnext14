//UserMenuDroop.js
//Саме випадаюче меню мови

import { useContext, useRef, useEffect } from "react";
// import { ComponentContext } from "../../context/ComponentContext"
// import { useSession, signIn, signOut } from "next-auth"

const UserMenuDroop = ({ setUserMenuOpen, setSetingMenuOpen }) => {
  //   const { state } = useContext(ComponentContext)
  //    const [session] = useSession()

  //*************Для клацання поза обєктом
  const ref_UserMenuDroop = useRef(null);

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!ref_UserMenuDroop.current?.contains(event.target)) {
        // alert("Outside Clicked.");
        // console.log("Outside Clicked. ");
        // setSetingMenuOpen(false);
        setUserMenuOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref_UserMenuDroop]);

  const loginToggle = (e) => {
    // setLangMenuOpen(!langMenuOpen)
    e.preventDefault();
    // signIn();
    setUserMenuOpen(false);
    if (setSetingMenuOpen) setSetingMenuOpen(false);

  };
  const registrationToggle = (e) => {
    e.preventDefault();
    //  signOut()
    setUserMenuOpen(false);
    if (setSetingMenuOpen) setSetingMenuOpen(false);

  };

  const handleSignin = () => {
    console.log("UserMenuDroop.js/handleSignin");
      setUserMenuOpen(false);
      if (setSetingMenuOpen) setSetingMenuOpen(false);
  };

  return (
    <div
      ref={ref_UserMenuDroop}
      className="absolute right-0 z-10 m-0 p-0 text-base font-medium"
    >
      <ul className="rounded-lg border border-hBorder bg-hBg  p-1 drop-shadow-md dark:border-hBorder dark:bg-hBgD">
        <li
          className="flex list-none flex-nowrap  items-center p-1  text-hText  hover:bg-hBgHov  hover:text-hTextHov dark:text-hText dark:hover:bg-hBgHov dark:hover:text-hTextHov"
          onClick={loginToggle}
        >
          {/* {session && (
            <a href="#" onClick={loginToggle} className="btn-signin">
              Sign out/Вийти
            </a>
          )}
          {!session && (
            <a href="#" onClick={handleSignin} className="btn-signin">
              Sign in/Вхід
            </a>
          )} */}
          <a href="#" onClick={handleSignin} className="flex-nowrap">
            Sing in/ Вхід
          </a>
        </li>
        <li
          //   className="userMenuDroop__dropdown__item"
          className="flex list-none flex-nowrap  items-center p-1  text-hText  hover:bg-hBgHov  hover:text-hTextHov dark:text-hText dark:hover:bg-hBgHov dark:hover:text-hTextHov"
          onClick={registrationToggle}
        >
          <a>Registration</a>
        </li>
        <li
          //   className="userMenuDroop__dropdown__item"
          className="flex list-none flex-nowrap  items-center p-1  text-hText  hover:bg-hBgHov  hover:text-hTextHov dark:text-hText dark:hover:bg-hBgHov dark:hover:text-hTextHov"
          onClick={registrationToggle}
        >
          {/* <a className="userMenuDroop__dropdown__item-p">Registration</a> */}
          {/* <a className="hover:text-menuTextHover ml-2 flex items-center bg-menuBg p-0 text-menuText hover:bg-menuBgHov"> */}
          <a>Registration1</a>
        </li>
      </ul>
    </div>
  );
};

export default UserMenuDroop;
