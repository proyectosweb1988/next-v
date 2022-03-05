import React from 'react'
import Link from 'next/link'
import { MainLayouts } from '../../components/layouts/MainLayouts'

export default function Pricing() {
  return (
    <MainLayouts>
      
      <h2>Pricing</h2>
        <h1 className={'title'}>
         Ir a about <Link href="/">Home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/index.js</code>
        </p>

    </MainLayouts>
  )
}
