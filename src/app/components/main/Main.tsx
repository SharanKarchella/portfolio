import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Links from "./Links";
import Image from "next/image";

function Main() {
  return (
    <div className="px-44 py-32 grid grid-cols-3">
      <div className="flex flex-col gap-12 col-span-2 place-content-center">
        <Heading>Hello Everyone, I am Sharan</Heading>
        <Paragraph className="text-xl">
          I am doing Projects on Full Stack Web Development
        </Paragraph>
        <Links />
      </div>
      <img
        src="/images/work/meNew.jpeg"
        className="min-h-96 w-full bg-gray-200 rounded-xl object-cover object-right hidden md:block "
        alt="Sharan Image"
      />
    </div>
  );
}

export default Main;
