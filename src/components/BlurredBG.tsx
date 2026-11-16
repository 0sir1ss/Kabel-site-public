import Image from "next/image";
import logo from "../images/logo.svg";

export default function BlurredBG() {
  return (
    <Image
      src={logo as string}
      alt=""
      className="fixed right-0 mt-96 origin-bottom-right blur-xl drop-shadow-2xl"
    />
  );
}
