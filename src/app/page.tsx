
import CardsDigitalGuide from "@/Components/CardsDigitalGuide";
import DigitalGuideSkeleton from "@/Components/DigitalGuideSkeleton";
import { Search, SlidersHorizontal } from "lucide-react";
import { Suspense } from "react";


export default function Home() {

  return <>
    <section >
      <h1 className="text-center text-4xl text-subColor font-bold">الدليل الرقمي</h1>
      <div className="flex items-center p-2 bg-white border border-[#DADADA] rounded-sm w-[35%] m-auto mt-8 mb-14 px-3 focus-within:border-mainColor focus-within: outline-none focus-within:ring-1 focus-within:ring-mainColor">
        <Search color="#B0B0B0" className="cursor-pointer  me-auto" />
        <input type="text" className="outline-none flex-1 border-none mr-2  py-1.5 pl-1 caret-mainColor" />
        <SlidersHorizontal color="#B0B0B0" className="cursor-pointer" />
      </div>
      <Suspense fallback={<DigitalGuideSkeleton />}>
        <CardsDigitalGuide />
      </Suspense>
    </section>

  </>
}
