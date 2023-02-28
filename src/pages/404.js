import Link from "next/link";

export default function FourZeroFour() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-center text-3xl my-2">404 Not Found!</p>
      <p className="">Sorry, that Pokemon could not be found!</p>
      <Link href='/pokemon'><p className="text-center hover:cursor-pointer w-[200px] m-auto my-4 bg-red-500 rounded-xl text-white">All Pokemon</p></Link>
    </div>
  );
}
