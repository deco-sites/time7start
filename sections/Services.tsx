export interface Props {
  title: string;
  description?: string;
  services: Service[];
  ancora?: string;
}

export interface Service {
  title: string;
  description: string;
}

export default function ServicesTime7({
  title = "Services title",
  description = "Description of services",
  services = [
    {
      title: "Benefit title",
      description: "Benefit description",
    },
    {
      title: "Benefit title",
      description: "Benefit description",
    },
    {
      title: "Benefit title",
      description: "Benefit description",
    },
    {
      title: "Benefit title",
      description: "Benefit description",
    },
  ],
  ancora,
}: Props) {
  return (
    <>
      <div
        className="py-16 sm:py-10 sm:px-14 bg-[#2fd180]/[15%] scroll-mt-8"
        id={ancora}
      >
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl text-base-500 text-center mb-2 px-4">
            {title}
          </h2>
          <p className="text-2xl text-base-400 text-center mb-10">
            {description}
          </p>
          <div className="flex flex-wrap">
            {services.map(({ title, description }) => (
              <div className="flex flex-col w-full sm:w-1/2 md:w-1/2 lg:w-1/3 p-6 bg-custom-3 text-accent-content ">
                <div className="mb-4" style="display:none">
                  <svg
                    width="31"
                    height="30"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.58512 29.9985C14.2821 29.9985 17.5224 27.3859 21.2903 19.3782C23.3452 14.9665 25.1023 10.6408 27.1152 6.3591L29.514 7.13069C30.1556 7.34457 30.4994 6.95878 30.1996 6.3591L27.2871 0.406275C27.0733 -0.0214971 26.6015 -0.0654736 26.3017 0.0644571L19.0635 2.805C18.4639 3.01888 18.5058 3.57658 19.1055 3.74649L21.2464 4.43213C19.4913 8.416 17.3065 14.4108 15.5494 18.1788C13.5785 22.3766 12.595 25.331 9.25476 25.331C5.91454 25.331 5.35684 22.7184 6.77009 18.9924C8.39722 14.6667 11.1378 13.3814 14.2641 14.2809C15.1216 13.0815 15.7633 11.2825 16.0192 9.65534C15.1196 9.39748 14.0482 9.31352 13.1507 9.31352C8.09738 9.31352 3.08605 11.9261 1.03114 17.4072C-1.62344 24.4734 0.831251 29.9985 8.58312 29.9985H8.58512Z"
                      className="fill-accent-content"
                    />
                  </svg>
                </div>
                <h3 className="text-left text-xl mb-2">{title}</h3>
                <p className="text-left text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
