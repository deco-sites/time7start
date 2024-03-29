export interface Props {
  text: string;
}

export default function Footer({ text = "© 2023" }: Props) {
  return (
    <footer className="w-full mt-auto">
      <div className="container mx-auto px-4 flex justify-center h-12">
        <p className="text-[#767676]">{text}</p>
      </div>
    </footer>
  );
}
