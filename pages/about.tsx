import Head from 'next/head'
import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayouts } from '../components/layouts/MainLayouts'


export  default function AboutPage (){
  return (
  < >
      <h2>AboutPage</h2>
        <h1 className={'title'}>
         Ir a about <Link href="/">Home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/index.js</code>
        </p>

  </>
  )
}

AboutPage.getLayout = function getLayout( page: any ) {
 return(
  <MainLayouts>
  <DarkLayout>
    { page }
  </DarkLayout>
</MainLayouts>
 )
}
