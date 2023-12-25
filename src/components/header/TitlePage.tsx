'use client'
import { usePathname } from "next/navigation";

function TitlePage() {
  const router = usePathname();  
  const title = router.split('/')[1] === '' ? 'Home' : router.split('/').slice(-1)
  return <div className="text-xl font-medium capitalize">{title}</div>
}


export default TitlePage