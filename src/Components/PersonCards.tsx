"use client"
import { IDigitalGuideResponse } from "@/InterFaces/CardsInterFaces";
import UseAuthenticatedQuery from "@/Utils/Helpers/UseAuthenticatedQuery";
import { Crown, Pencil, Star } from "lucide-react"
import Image from "next/image";
import Link from "next/link";



const PersonCards = () => {

  const { data } = UseAuthenticatedQuery({
    queryKey: [`getPersonalInfo`],
    url: `https://ymtaz.sa/api/client/lawyer/5218`,
    config: {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3ltdGF6LnNhL2FwaS9jbGllbnQvbG9naW4iLCJpYXQiOjE3MTMxODgxOTAsImV4cCI6MjE2MDE3MTMxODgxOTAsIm5iZiI6MTcxMzE4ODE5MCwianRpIjoiOXVZU0lsOHY2UkkzNGxHciIsInN1YiI6IjE2NTEiLCJwcnYiOiIyYTg0NjYyYzMzMTU3NTQ2YzQzZjQwMzc1NDY0MTViYzcwZDc4YmJjIn0.jn7AwKiHQhN-z4qraZ0udGn_321-6V7JQJX3GyabQU4`
      }
    }
  })


  const personInfo = data?.data?.lawyer
  console.log(personInfo);

  return <>

    <div className="grid grid-cols-1 w-[35%] m-auto gap-10 justify-center ">
      <Link href={"./1/5218"} className="flex flex-col items-center justify-center bg-white px-20 pt-8 pb-10 rounded-md shadow-md card ">

        <Image className='rounded-full h-28 w-28' src={personInfo?.photo} width={100} height={100} alt="personal-Image" />
        <h3 className="text-subSecondaryColor font-semibold text-lg mt-3 mb-1">{`${personInfo?.first_name + " " + personInfo?.second_name + " " + personInfo?.third_name + " " + personInfo?.fourth_name} `} </h3>
        <div className='flex  items-center gap-3 '>
        <span className="text-[#6F6863] "> محامي متخصص لقضايا البرمجة</span><Crown color='gold' />
        </div>
        <div className='flex items-center gap-2 mt-3 '>
        <Star color='gold' /> <span>4.56 (35 مراجعة) </span>
        </div>

      </Link>
    </div>
  </>
}

export default PersonCards