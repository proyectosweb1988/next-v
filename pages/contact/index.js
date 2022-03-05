import Head from 'next/head'

import { NavBar } from '../../components/NavBar'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
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
