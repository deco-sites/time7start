import { context } from "$live/live.ts";
import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  description: string;
  image?: {
    src?: LiveImage;
    /**
     * @description Image alt text
     */
    alt?: string;
  };
}

export default function Hero({
  title = "Welcome to Live!",
  description = "You can create a new page by visiting it.",
  image,
}: Props) {
  return (
    <section class="py-8 sm:pb-32 sm:pt-20">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap items-center sm:-m-6">
          <div class="w-full md:w-1/2 p-6">
            <div class="bg-[#2FD180] p-1 mx-auto max-w-max overflow-hidden rounded-full">
              {image && image.src && image.alt
                ? (
                  <Image
                    class="object-cover rounded-full"
                    src={image.src}
                    alt={image.alt}
                    width={512}
                    height={512}
                    preload
                  />
                )
                : (
                  <Image
                    class="object-cover rounded-full"
                    src="https://start.deco.site/android-chrome-512x512.png"
                    alt="Hero"
                    width={512}
                    height={512}
                    preload
                  />
                )}
            </div>
          </div>
          <div class="w-full md:w-1/2 p-6">
            <div class="md:max-w-lg text-center sm:text-left">
              <h2 class="mb-3 font-bold text-primary-dark text-4xl">{title}</h2>
              <p class="text-xl">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
