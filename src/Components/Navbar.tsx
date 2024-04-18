import { Menu } from "lucide-react"
import Link from "next/link"
import Image from 'next/image'
import { Logo } from "@/Assets"

interface IProps {

}

const Navbar = ({ }: IProps) => {
  return <>
    <header className="flex justify-between items-center p-5">
      <Image src={Logo} width={300} height={300} className="w-32 h-16" alt="Logo" priority />
      <nav>
        <ul className="flex items-center gap-10">
          <li><Link href={'/'}>الرئيسيه</Link></li>
          <li><Link href={'/1/5'}>من نحن </Link></li>
          <li><Link href={'/'}>اتصل بنا</Link></li>
          <li><Link href={'/'}>الدعم الفني</Link></li>
          <li><Link href={'/'}>ارقام التشغيل </Link></li>
          <li><Link href={'/'}>سياسة الخصوصيه</Link></li>
        </ul>
      </nav>
      <Menu rotate={"180"} size={30} />
    </header>
  </>
}

export default Navbar