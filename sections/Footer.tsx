export interface Props {
  text: string;
}

export default function Footer({ text = "© 2023" }: Props) {
  return (
    <footer className="w-full mt-auto">
      <div className="container mx-auto px-4 flex justify-between h-12">
        <p>{text}</p>
      </div>
    </footer>
  );
}
