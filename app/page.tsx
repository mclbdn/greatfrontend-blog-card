import Image from "next/image";
import Link from "next/link";
import { SVGProps } from "react";

export default function Home() {
  return (
    <div className="mt-[120px]">
      <BlogCard />
    </div>
  );
}

const BlogCard = () => {
  return (
    <div className="w-[340px] bg-white h-[504px] rounded-lg">
      <div className="w-[340px] relative h-[280px]">
        <Image
          src={"/assets/unsplash.jpg"}
          priority
          quality={100}
          alt="picture of a room"
          fill
          className="rounded-t-lg"
        />
      </div>
      <div className="px-4 py-6">
        <p className="bg-green-50 text-sm border mb-2 rounded-full border-green-200 text-green-700 inline-block px-2 py-[2px]">
          Interior
        </p>
        <p className="font-semibold pb-3 text-lg text-neutral-900">
          Top 5 Living Room Inspirations
        </p>
        <p className="text-[16px] pb-6 font-medium text-neutral-600">
          Curated vibrants colors for your living, make it pop & calm in the
          same time.
        </p>
        <Link
          href="#"
          className="text-indigo-700 disabled:text-neutral-400 focus:px-[2px] focus:rounded-md custom-btn-shadow focus:text-indigo-800 hover:text-indigo-800 gap-2 inline-flex items-center font-medium"
        >
          Read more
          <SvgComponent />
        </Link>
      </div>
    </div>
  );
};

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="m13.476 9.167-4.47-4.47 1.179-1.179L16.667 10l-6.482 6.482-1.179-1.179 4.47-4.47H3.333V9.167h10.143Z"
    />
  </svg>
);
