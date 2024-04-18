"use client"
import UseAuthenticatedQuery from '@/Utils/Helpers/UseAuthenticatedQuery'
import Image from "next/image";
import { ArrowLeft, ArrowRight, CirclePlay, Crown, PenLine, PhoneCall, Star } from 'lucide-react';
import Button from './Ui/Button';
import { ReactNode, useEffect, useState } from 'react';
interface IProps {

}

interface IServicers {
  icon: ReactNode
  title: string
}



const PersonalInfo = ({ }: IProps) => {

  const [toggle, setToggle] = useState(true)

  // //?  **********Get PersonalInfo**********//
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

  const services = [
    { icon: <PhoneCall color='#DDB762' className='mb-10 ml-2' />, title: "خدمة الاستشارة الهاتفية" },
    { icon: <CirclePlay color='#DDB762' className='mb-10 ml-2' />, title: "خدمة الاستشارة المرئية" },
    { icon: <PenLine color='#DDB762' className='mb-10 ml-2' />, title: "خدمة الاستشارة المكتوبة" },
  ]

  return <>
    <section className="personal-Info flex gap-5 justify-between my-6">

      <div className="flex flex-col w-[50%] gap-8">

        <div className="bg-white w-full gap-14 rounded-lg p-5">

          <h1 className="text-secondaryColor text-2xl font-bold">المعلومات الشخصيه</h1>

          <div className="flex gap-3 mt-10 w-full">
            <Image className='rounded-full h-28 w-28' src={personInfo?.photo} width={100} height={100} alt="personal-Image" />
            <div className="flex flex-col my-1 gap-3 w-full ">
              <h2 className='text-2xl font-semibold'>{`${personInfo?.first_name + " " + personInfo?.second_name + " " + personInfo?.third_name + " " + personInfo?.fourth_name} `}</h2>
              <div className='flex items-center gap-3 '>
                <h3 className='text-md text-[#A3A4A5] '>{personInfo?.about}</h3>   <Crown color='gold' />
              </div>
              <div className='flex justify-between items-center '>

                <div className='flex items-center gap-2 '>
                  <Star color='gold' /> <Star color='gold' />  <Star color='gold' />  <Star color='gold' />  <Star color='gold' /> <span className='text-[#A3A4A5]'>5.00 التقييم العام من 154 من العملاء</span>
                </div>
                <span className='text-md'>اظهر التقيمات</span>
              </div>

              <div className='bg-[#F9F9F9] w-fit p-7 rounded-tl-3xl  rounded-br-3xl '>
                <p><span className='text-5xl font-bold'>’’</span> تميز الاستشاري بالاحترافية والخبرة العالية في المسائل القانونية </p>
                <div className='flex justify-between items-center mt-3  '>
                  <div className='flex items-center gap-2'>
                    <Star color='gold' /> <Star color='gold' />  <Star color='gold' />  <Star color='gold' />  <Star color='gold' />
                  </div>
                  <span className='text-[#A3A4A5]'>Abdullah Faleh</span>
                  <span className='text-[#A3A4A5]'>الخميس 3 فبراير 2024</span>
                </div>
              </div>
            </div>
          </div>

        </div>




        <div className='flex flex-col bg-white w-full gap-5 rounded-lg p-8 '>
          <h2 className="text-secondaryColor text-2xl font-bold">النبذة التعريفية</h2>
          <p className="text-md text-[#A3A4A5] max-w-[500px]">استشاري القانون عبد العزيز عبد الرحمن الربعي وهو محام مرخص في المملكة العربية السعودية، يحمل درجة البكالوريوس في القانون. يتمتع بخبرة تبلغ سنتين في مجال ممارسة القانون</p>
        </div>


        <div className='flex flex-col bg-white w-full gap-5 rounded-lg p-8 '>
          <h2 className="text-secondaryColor text-2xl font-bold">تقييم العملاء:</h2>
          <div className='flex justify-between items-center'>
            <div className="flex flex-col items-center  gap-1">
              <div className='flex gap-2 items-center'>
                <Star color='gold' /> <Star color='gold' />  <Star color='gold' />  <Star color='gold' />  <Star color='gold' />
              </div>
              <span className='text-xl text-[#A3A4A5] '>التقييم العام</span>
              <span className='text-md text-[#A3A4A5] '>من 154 من العملاء</span>
            </div>

            <div className="flex flex-col items-center  gap-1 mb-6">
              <div className='flex gap-2 items-center'>
                <Star color='gold' /> <Star color='gold' />  <Star color='gold' />  <Star color='gold' />  <Star color='gold' />
              </div>
              <span className='text-xl text-[#A3A4A5] '>تقييم المنصه</span>

            </div>

            <div className="flex flex-col items-center  gap-1 mb-4">

              <div className='text-md bg-[#E2A03F] px-4 py-2 rounded-md '>5/5</div>
              <span className='text-xl text-[#A3A4A5] '>تقييم  الاستشاري</span>
            </div>
          </div>
        </div>



        <div className='flex items-center justify-between bg-white w-full gap-5 rounded-lg p-8 '>
          <div className='flex flex-col'>
            <div className='flex gap-2 items-center mb-3'>
              <Star color='gold' size={20} />  <Star color='gold' size={20} />  <Star color='gold' size={20} />  <Star color='gold' size={20} />  <Star color='gold' size={20} />
            </div>

            <span className='text-lg text-[#A3A4A5] '>التقييم العام</span>
            <p className='text-md text-[#A3A4A5] max-w-[350px] '> “ استشارى ممتاز ومحترف وواعى بشكل كبير بمختلف القضايا القانونية والفقهية"</p>
            <span className='text-[#A3A4A5] mt-5'>الخميس 3 فبراير 2024</span>
            <div className='flex justify-between items-center'>
              <div className="flex flex-col items-center  gap-1">

              </div>




            </div>
          </div>
          <div>
            <div className="flex flex-col items-center  gap-1 mb-4">

              <div className='text-md bg-[#E2A03F] px-4 py-2 rounded-md '>5/5</div>
              <span className='text-xl text-[#A3A4A5] '>تقييم  الاستشاري</span>
            </div>
          </div>

        </div>
        <div className='flex items-center justify-between bg-white w-full gap-5 rounded-lg p-8 '>
          <div className='flex flex-col'>
            <div className='flex gap-2 items-center mb-3'>
              <Star color='gold' size={20} />  <Star color='gold' size={20} />  <Star color='gold' size={20} />  <Star color='gold' size={20} />  <Star color='gold' size={20} />
            </div>

            <span className='text-lg text-[#A3A4A5] '>التقييم العام</span>
            <p className='text-md text-[#A3A4A5] max-w-[350px] '> “ استشارى ممتاز ومحترف وواعى بشكل كبير بمختلف القضايا القانونية والفقهية"</p>
            <span className='text-[#A3A4A5] mt-5'>الخميس 3 فبراير 2024</span>
            <div className='flex justify-between items-center'>
              <div className="flex flex-col items-center  gap-1">

              </div>




            </div>
          </div>
          <div>
            <div className="flex flex-col items-center  gap-1 mb-4">

              <div className='text-md bg-[#E2A03F] px-4 py-2 rounded-md '>5/5</div>
              <span className='text-xl text-[#A3A4A5] '>تقييم  الاستشاري</span>
            </div>
          </div>

        </div>






      </div>

      <div className="flex flex-col w-[50%] gap-8">

        <div className="bg-white w-full gap-14 rounded-lg p-5">


          <h1 className="text-secondaryColor text-2xl font-bold">معلومات الحجز</h1>

          <div className='mt-10 flex justify-center gap-10 pb-4  border-b-2'>
            <h2 className={` ${toggle ? "text-[#A3A4A5]" : "text-secondaryColor"}  text-xl font-bold cursor-pointer`} onClick={() => setToggle(!toggle)}>أسعار الخدمات</h2>
            <h2 className={`${toggle ? "text-secondaryColor" : "text-[#A3A4A5]"} text-xl font-bold cursor-pointer`} onClick={() => setToggle(!toggle)}>أوقات العمل</h2>
          </div>

          <div className="flex flex-col justify-between items-center gap-10 mt-10">
            {toggle ? <>

              <div className='flex items-center gap-6'>

                <div className="flex items-center justify-center w-7 h-7 bg-mainColor">
                  <ArrowRight color='white' />
                </div>

                <div className="rounded-md w-[150px] h-[320px] flex flex-col bg-[#f9f9f9]">
                  <div className="w-full bg-mainColor rounded-md flex justify-center p-3 text-white">اليوم</div>
                  <p className='flex flex-col justify-center items-center h-full text-[#A3A4A5] text-md '>
                    لا يوجد مواعيد متاحة
                  </p>
                </div>
                <div className="rounded-md w-[150px] h-[320px] flex flex-col bg-[#f9f9f9]">
                  <div className="w-full bg-mainColor rounded-md flex justify-center p-3 text-white">غدا</div>
                  <ul className='flex flex-col justify-center items-center h-full text-[#A3A4A5] text-md gap-6 '>
                    <li>11:00 ص</li>
                    <li>11:30 ص</li>
                    <li>12:00 ص</li>
                    <li>12:30 ص</li>
                    <li>01:00 م</li>
                  </ul>
                </div>
                <div className="rounded-md w-[150px] h-[320px] flex flex-col bg-[#f9f9f9]">
                  <div className="w-full bg-mainColor rounded-md flex justify-center p-3 text-white">الاربعاء</div>
                  <ul className='flex flex-col justify-center items-center h-full text-[#A3A4A5] text-md gap-6 '>
                    <li>11:00 ص</li>
                    <li>11:30 ص</li>
                    <li>12:00 ص</li>
                    <li>12:30 ص</li>
                    <li>01:00 م</li>
                  </ul>
                </div>

                <div className="flex items-center justify-center w-7 h-7 bg-mainColor">
                  <ArrowLeft color='white' />
                </div>

              </div>





            </>





              : <>
                {services.map(({ icon, title }: IServicers) => <div key={title} className='bg-[#F9F9F9] rounded-md p-3'>
                  <div className='flex justify-between  items-center '>
                    {icon}

                    <div className='flex flex-col'>
                      <div className="flex ">
                        <h3 className='text-secondaryColor text-md'>{title}</h3>
                      </div>
                      <p className='text-md text-[#A3A4A5] max-w-[240px]'>ونقدم فيها استشارة من خلال الهاتف والاجابة على كافة الاسئلة</p>

                    </div>


                    <div className="flex flex-col items-center">
                      <h3 className='text-secondaryColor text-md'>سعر الخدمه </h3>
                      <span className='text-lg text-[#3FD06F]'>300 رس</span>
                    </div>
                  </div>
                  <Button fullWidth className='mt-5' rounded={'lg'}> طلب الخدمه</Button>
                </div>)}</>}



          </div>

        </div>
      </div>


    </section>
  </>
}

export default PersonalInfo