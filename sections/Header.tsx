import { context } from "$live/live.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface MenuItem {
  title: string;
  ancora: string;
}
export interface Props {
  menu: MenuItem[];
}

export default function Header({ menu }: Props) {
  menu = [
    { title: 'Menu 1', ancora: "#section1"},
    { title: 'Menu 2', ancora: "#section2"},
    { title: 'Menu 3', ancora: "#section3"}
  ]
  return (
    <header className="w-full">
      <div className="container mx-auto px-4 flex justify-between h-12">
        <div className="flex items-center">Logo</div>
        <ul className="flex items-center justify-end gap-4">
          {menu.map((item:MenuItem) => (
          <li>
            <a href={item.ancora}>
              {item.title}
            </a>
          </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
