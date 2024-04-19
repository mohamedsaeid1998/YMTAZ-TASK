"use client"
import UseAuthenticatedQuery from '@/Utils/Helpers/UseAuthenticatedQuery';
import { IDigitalGuideResponse } from '@/InterFaces/CardsInterFaces';
import CardDigitalGuide from './CardDigitalGuide';
import DigitalGuideSkeleton from './DigitalGuideSkeleton';
import { Suspense } from 'react';
interface IProps {

}

const Cards = ({ }: IProps) => {

  const { data } = UseAuthenticatedQuery({
    queryKey: [`getDigitalGuide`],
    url: `https://ymtaz.sa/api/client/digital-guide/categories`,
  })

  return <>

    <div className="grid grid-cols-3 w-[70%] m-auto gap-10 justify-center ">
        {data?.data?.categories?.map(({ id, lawyers_count, title }: IDigitalGuideResponse) => <CardDigitalGuide {...{ lawyers_count, title }} key={id} />)}
    </div>


  </>
}

export default Cards