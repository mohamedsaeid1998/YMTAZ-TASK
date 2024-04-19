import { Loader } from "lucide-react"


interface IProps {

}

const loading = ({}: IProps) => {
  return <>
    <div className="flex justify-center items-center w-full h-[90vh]">
      <Loader className="animate-spin" size={150} color="#E2A03F"/>
    </div>
  </>
}

export default loading