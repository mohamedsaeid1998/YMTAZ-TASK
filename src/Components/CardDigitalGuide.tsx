import { IDigitalGuideResponse } from "@/InterFaces/CardsInterFaces";
import { Pencil } from "lucide-react"
import Link from "next/link";



const Card = ({lawyers_count ,title}: IDigitalGuideResponse) => {


  return <>
  
    <Link href={"./1"} className="flex flex-col items-center justify-center bg-white px-20 pt-8 pb-10 rounded-md shadow-md card ">
<div  className="bg-white rounded-full shadow-sm p-9 cycle ">
<Pencil className="icon" size={30}  />
</div>
<h3 className="text-subSecondaryColor font-semibold text-lg my-3">{title}</h3>
<span className="text-[#6F6863]">  متوفر عدد  {lawyers_count}</span>
    </Link>
  </>
}

export default Card