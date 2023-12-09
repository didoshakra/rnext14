import Link from "next/link";
import Image from "next/image";
// import buromobelexperte_brands from "@/public/icon_svg/ecomerc/buromobelexperte_brands.svg";
import promo_banner from "/public/baners/promo_banner.jpg";
import Categories from "@/components/product/Categories";
// import promo_banner from "/public/images/home/VitrynaBakal-930-620.jpg"

// group-hover - при наведенні на (group) буде змінюватись */

export default function LayoutWithSidebar() {
//   const goods_quantity = 12345;
  return (
    <section className=" border border-2 pb-8 pt-6 lg:px-8">
      <div className="mx-auto max-w-[1440px]">
        {/*  */}
        <div className="flex flex-col justify-between md:flex-row md:gap-3">
          {/*  */}
          <div className="hidden md:block">
            <Categories />
          </div>
          <div className="bg-orange-500 p-1">
            {/* <div className=" relative max-h-[220px] bg-slate-200"> */}
            <div className="bg-slate-200 p-1">
              {/* overflow-:перелив по висоті: hidden-обрізає/visibble-не обрізає/scroll-скрол/auto-скрол*/}
              {/* <div className="p-1 h-[200px] w-[400px] max-h-[300px] overflow-hidden rounded-xl"> */}
              <div className="max-h-[300px] overflow-hidden rounded-md">
                {/* / показує картинку по розмірах заданій у батьку */}
                <Image
                  priority={true}
                  className="h-auto w-full max-w-full"
                  src={promo_banner}
                  alt={"baner"}
                />
              </div>
              <p className="mt-4 text-xs text-white">
                Знижки в категоріях діють до 01.08.2023 23:59{" "}
              </p>
            </div>
            {/*  */}
            <div className="grid grid-cols-1 bg-lime-200 p-1 sm:max-w-full sm:grid-cols-2 sm:gap-3 md:grid-cols-3">
              <div className="mt-4  bg-lime-300">
                <p className="text-xl font-medium text-white ">General</p>
                <ul>
                  <li>
                    <Link
                      className="hover:text-bluviolet text-sm text-white transition-colors"
                      href="/"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-bluviolet text-sm text-white transition-colors"
                      href="/"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-bluviolet text-sm text-white transition-colors"
                      href="/"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-bluviolet text-sm text-white transition-colors"
                      href="/"
                    >
                      Courses
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-4  bg-lime-300">
                <p className="text-xl font-medium text-white ">Policies</p>
                <ul>
                  <li>
                    <Link
                      className="hover:text-bluviolet text-sm text-white transition-colors"
                      href="/"
                    >
                      Security safeguards
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-bluviolet text-sm text-white transition-colors"
                      href="/"
                    >
                      Terms of service
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-bluviolet text-sm text-white transition-colors"
                      href="/"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-bluviolet text-sm text-white transition-colors"
                      href="/"
                    >
                      Accessibility
                    </Link>
                  </li>
                </ul>
              </div>
              {/* col-span-2=2-ширина на 2-і колонки */}
              <div className="col-span-2 mt-4 bg-lime-300  md:col-span-1">
                <p className="text-xl font-medium text-white ">Get in touch</p>
                <p className="mt-2 text-xs text-white">
                  Follow us on social media and stay updated with the latest
                  information about our services
                </p>
                <ul className=" mt-2 flex items-center sm:gap-3">
                  <li>
                    <Link href="/">
                      <p className="hover:bg-bluviolet flex h-7 w-7 items-center justify-center rounded-full bg-white  transition-colors">
                        {/* <Image src={facebook} width={24} height={24} alt={"icon"} /> */}
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-bluviolet text-sm text-white transition-colors"
                      href="/"
                    >
                      <p className="hover:bg-bluviolet flex h-7 w-7 items-center justify-center rounded-full bg-white  transition-colors">
                        {/* <Image src={twitter} width={24} height={24} alt={"icon"} /> */}
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-bluviolet text-sm text-white transition-colors"
                      href="/"
                    >
                      <p className="hover:bg-bluviolet flex h-7 w-7 items-center justify-center rounded-full bg-white  transition-colors">
                        {/* <Image src={instagram} width={24} height={24} alt={"icon"} /> */}
                      </p>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-bluviolet text-sm text-white  transition-colors"
                      href="/"
                    >
                      <p className="hover:bg-bluviolet flex h-7 w-7 items-center justify-center rounded-full bg-white  transition-colors">
                        {/* <Image src={youtube} width={24} height={24} alt={"icon"} /> */}
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
