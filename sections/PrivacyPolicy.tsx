export interface Section {
  description: string;
}

export interface Props {
  title: string;
  description: Section[];
}

export default function PrivacyPolicy({ title, description }: Props) {
  return (
    <div className="container px-4 mt-5 mx-auto min-h-[86vh]">
      <h1 className="text-2xl mb-4">{title}</h1>
      {description.map((item) => (
        <p className="mb-3">{item.description}</p>
      ))}
    </div>
  );
}
