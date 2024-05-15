import AddCategory from "./_components/AddCategory";
import AddManufacturer from "./_components/AddManufacturer";
import Image from "next/image";
import { ShieldBan } from "lucide-react";
export default function Home() {
  return (
    <div className="flex flex-col gap-y-10 mt-32 ">
      <div className="flex justify-center">
        {/*  Create Carosel Component */}
        <Image src="/homePage.jpeg" height={400} width={800} />
      </div>
      <div className="flex justify-center">
        <h2 className="font-bold text-4xl">secured </h2>
        <h2 className="font-bold text-4xl text-red-600"> Admin</h2>
        <ShieldBan />
      </div>
      <div className="flex justify-evenly gap-10 m-10">
        <AddCategory />
        <AddManufacturer />
      </div>
    </div>
  );
}
