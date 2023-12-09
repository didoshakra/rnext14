//HeaderLogo.js

import Link from "next/link";
import Image from "next/image";

const HeaderLogo = () => {
  return (
    // <div className="flex min-w-[200px] items-center  justify-start px-0 md:px-2  ">
    <div className="flex items-center  justify-start">
      {/* <Link href="/" className=" w-[70px], h-[50px] "> */}
      {/* <Link href="/" className=" w-[70px], h-[50px] items-center"> */}
      <Link href="/" className="items-center">
        <Image
          src="/images/home/sun_man_hands-oval-ra-red-64-41.png"
          height={41} //Завжди Avto?
          width={64} //Чомусь має пріорітет
          //   fill
          alt="Logo"
        />
      </Link>
      <Link href="/">
        <div className="flex items-center justify-start px-1 text-xl font-bold italic text-hText hover:text-hTextHov hover:bg-hBgHov dark:text-hText dark:hover:text-hTextHov dark:hover:bg-hBgHov md:px-2 md:text-2xl">
          RAtest
        </div>
      </Link>
      {/* ========================================================================== */}
    </div>
  );
};
export default HeaderLogo;
