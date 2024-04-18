
interface IProps {

}

const DigitalGuideSkeleton = ({ }: IProps) => {
  return <>
    <div className="grid grid-cols-3 w-[70%] m-auto gap-10 justify-center ">
      {Array.from({ length: 6 }, (_, idx) => <div key={idx} className="  w-[412px] h-[250px] rounded-md animate-pulse bg-gray-500 ">
      </div>)}
    </div>
  </>
}

export default DigitalGuideSkeleton