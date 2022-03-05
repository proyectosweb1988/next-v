import Link from 'next/link';
import { MainLayouts } from '../../components/layouts/MainLayouts'

export default function Contact() {
  return (
    <MainLayouts>

    <h1>Contact</h1>

    <h2> Ir a <Link href={'/'} >Home</Link></h2>
    <h2> Ir a <Link href={'/about'}>About</Link></h2> 

    </MainLayouts>
  )
}
