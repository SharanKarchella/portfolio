import Image from "next/image";
import Main from "./components/main/Main";
import Work from "./components/work/Work";

export default function Home() {
  return (
    <div>
      <Main />
      <hr className="w-3/4 mx-auto" />
      <Work />
    </div>
  );
}
