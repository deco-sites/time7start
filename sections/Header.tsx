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
        <ul className="flex items-center justify-end gap-4">
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
