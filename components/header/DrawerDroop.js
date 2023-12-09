//Drawer.js

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/multiLevelMenu/Navbar";
import {
  menuAdmin,
  menuDocuments,
  menuBig,
} from "@/components/multiLevelMenu/dataMultilevelMenu";
//***************************************************************** */
export default function DrawerDroop({ drawerOpen, setDrawerOpen }) {
  const SocialMenuUl = ({ title = "" }) => (
    <div className=" text-base font-bold">
      <p className="pl-2 text-sm  font-bold italic  text-hText dark:text-hText">
        {title}
      </p>
      {/* <li> */}
      <a
        className="active:text-hTextAct dark:active:text-hTextAct group flex list-none flex-nowrap items-center space-x-1 p-1 text-hText hover:bg-drawDropMenuBgHov hover:text-hTextHov dark:text-hText dark:hover:bg-drawDropMenuBgHovD dark:hover:text-hTextHov"
        href="https://www.facebook.com/profile.php?id=100004339204236"
        title="Facebook"
      >
        {/* Facebook */}
        <svg
          className="h-6 w-6  dark:hover:text-hTextHovD dark:group-hover:text-hTextHovD"
          //   className="h-6 w-6 text-hText dark:text-hText"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>

        <p>Facebook</p>
      </a>
      <a
        className="active:text-hTextAct dark:active:text-hTextAct group flex list-none flex-nowrap items-center space-x-1 p-1 text-hText hover:bg-drawDropMenuBgHov hover:text-hTextHov dark:text-hText dark:hover:bg-drawDropMenuBgHovD dark:hover:text-hTextHovD"
        href="https://github.com/didoshakra?tab=repositories"
        title="IconGitHub"
      >
        {/* GitHub */}
        <svg
          className="h-6 w-6  dark:hover:text-hTextHovD dark:group-hover:text-hTextHovD"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
        <p>GitHub</p>
      </a>
      <a
        className="active:text-hTextAct dark:active:text-hTextAct group flex list-none flex-nowrap items-center space-x-1 p-1 text-hText hover:bg-drawDropMenuBgHov hover:text-hTextHov dark:text-hText dark:hover:bg-drawDropMenuBgHovD dark:hover:text-hTextHovD"
        href="https://twitter.com/home?lang=uk"
        title="Twitter"
      >
        {/* Twitter */}
        <svg
          className="h-6 w-6  dark:hover:text-hTextHovD dark:group-hover:text-hTextHovD"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
        </svg>
        <p>Twitter</p>
      </a>
      <a
        className="active:text-hTextAct dark:active:text-hTextAct group flex list-none flex-nowrap items-center space-x-1 p-1 text-hText hover:bg-drawDropMenuBgHov hover:text-hTextHov dark:text-hText dark:hover:bg-drawDropMenuBgHovD dark:hover:text-hTextHovD"
        href="https://www.facebook.com/profile.php?id=100017742340573"
        title="Instagram"
      >
        {/* IconInstagram */}
        <svg
          className="h-6 w-6  dark:hover:text-hTextHovD dark:group-hover:text-hTextHovD"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />{" "}
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />{" "}
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
        <p>Instagram</p>
      </a>
      {/* </li> */}
    </div>
  );

  return (
    <div
      //Виїжджає Зправа
      //   className={`fixed right-0 top-0 z-20 flex h-full w-[35vw] flex-col overflow-y-scroll  bg-drawDropMenuBg dark:bg-headMenuBgDark ${
      //     drawerOpen ? "translate-x-0" : "translate-x-full"
      //   } duration-300 ease-in-out `}
      //Виїжджає Зліва
      className={`top-50 fixed -left-[100vw] z-20 flex h-full w-[100vw] flex-col overflow-y-scroll bg-drawDropMenuBg dark:bg-drawDropMenuBgD  md:-left-[30vw] md:w-[30vw] ${
        drawerOpen ? "translate-x-full" : "translate-x-0"
      } duration-500 ease-in-out `}
    >
      {/* <div className="w-full/5 fixed inset-0 z-20 flex max-h-[600px] max-w-[300px] flex-col overflow-y-scroll bg-drawerDropMenuBg transition-transform duration-200 ease-out dark:bg-drawDropMenuBgD"> */}
      {/* Шапка */}
      <div className="flex h-20 items-center justify-between gap-1">
        <div className="flex items-center justify-between gap-2 pl-1  ">
          <Link href="/">
            <Image
              title="ramag"
              width={70}
              height={70}
              src="/images/home/sun_man_mount-380-RA-Algerian.png"
              alt="logo"
            />
          </Link>
          <Link
            href="/"
            className="justify-begin  flex items-center px-4 text-2xl font-bold italic text-hText  dark:text-hText md:text-2xl"
            title="RAMAG"
          >
            RAecom
          </Link>
        </div>
        <div onClick={(e) => setDrawerOpen(false)} className="pr-2">
          {/* <IconCancel */}
          <svg
            className="h-6 w-6 text-hText dark:text-hText"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <line x1="18" y1="6" x2="6" y2="18" />{" "}
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </div>
      {/* --- Список меню ----------------------------------------- */}
      <hr className="h-0.5 min-w-full bg-drawDropHr" />
      <Navbar
        multilevelMenu={menuBig}
        title={"Багаторівнневе пробне меню"}
        setDrawerOpen={setDrawerOpen}
      />
      <hr className="h-0.5 min-w-full bg-drawDropHr" />
      <Navbar
        multilevelMenu={menuAdmin}
        title={"Адмін"}
        setDrawerOpen={setDrawerOpen}
      />
      {/* ----------------------------------------------------------- */}
      {/* Divider/Роздільник */}
      <hr className="h-0.5 min-w-full bg-drawDropHr" />
      <Navbar
        multilevelMenu={menuDocuments}
        title={"Документи"}
        setDrawerOpen={setDrawerOpen}
      />
      <hr className="h-0.5 min-w-full bg-drawDropHr" />
      {/* ----------------------------------------------------------- */}
      <SocialMenuUl title={"Контакти"} />
    </div>
  );
}
