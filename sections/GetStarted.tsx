import { context } from "$live/live.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  enableInspectVSCode?: boolean;
}

export default function GetStarted({ enableInspectVSCode }: Props) {
  return (
    <section class="pt-20 pb-32">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap items-center -m-6">
          <div class="w-full md:w-1/2 p-6">
            <div class="bg-[#2FD180] p-1 mx-auto max-w-max overflow-hidden rounded-full">
              <Image
                class="object-cover rounded-full"
                src="https://start.deco.site/android-chrome-512x512.png"
                alt=""
                width={512}
                height={512}
              />
            </div>
          </div>
          <div class="w-full md:w-1/2 p-6">
            <div class="md:max-w-lg">
              <h2 class="mb-3 font-bold text-primary-dark text-4xl">
                Seus clientes estão na web!
              </h2>
              <p class="text-xl">
                e nós te ajudamos a encontrá-los, conectá-los e fidelizá-los.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
