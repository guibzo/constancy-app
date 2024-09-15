import { Logo } from '@/components/logo'

import Image from 'next/image'
import { RegisterGoal } from './register-goal'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center gap-8 h-full'>
      <Logo />

      <Image
        src='/illustrations/personal-goals-asset.svg'
        alt='Personal Goals Illustration'
        width={320}
        height={320}
        className='fill-none stroke-none'
      />

      <div className='space-y-5'>
        <p className='max-w-[320px] text-center leading-relaxed'>
          Você ainda não cadastrou nenhuma meta, que tal cadastrar uma agora
          mesmo?
        </p>

        <RegisterGoal />
      </div>
    </div>
  )
}
