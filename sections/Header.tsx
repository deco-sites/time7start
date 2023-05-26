import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface MenuItem {
  title: string;
  ancora: string;
}
export interface Props {
  menu: MenuItem[];
  logo: {
    src?: LiveImage;
    /**
     * @description Image alt text
     */
    alt: string;
    /**
     * @description When you click you go to
     */
    href?: string;
  };
}

export default function Header({
  menu = [
    { title: "Menu 1", ancora: "#section1" },
    { title: "Menu 2", ancora: "#section2" },
    { title: "Menu 3", ancora: "#section3" },
  ],
  logo = {
    alt: "Logo",
    href: "#",
  },
}: Props) {
  return (
    <header className="w-full fixed top-0 bg-base-100 z-50">
      <div className="container mx-auto px-4 flex justify-between h-12">
        <div className="flex items-center">
          <a href={logo.href} alt={logo.alt} className="max-w-[100px]">
            {logo.src
              ? <img src={logo.src} alt={logo.alt} width="100" height="40" />
              : (
                logo.alt
              )}
          </a>
        </div>
        <div className="dropdown  dropdown-bottom dropdown-end sm:hidden">
          <label
            tabIndex={0}
            className="btn m-0 min-h-[48px] h-[48px] bg-white border-0 hover:bg-gray-200 -mr-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 96 960 960"
            >
              <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu.map((item: MenuItem) => (
              <li>
                <a className="hover:link" href={item.ancora}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="hidden items-center justify-end gap-4 sm:flex">
          {menu.map((item: MenuItem) => (
            <li>
              <a className="hover:link" href={item.ancora}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
