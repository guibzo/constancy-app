import { cn } from '@/lib/utils'
import { LucideCrown } from 'lucide-react'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
})

export const Logo = ({
  textClassName,
  iconClassName,
}: {
  textClassName?: string
  iconClassName?: string
}) => {
  return (
    <div className='flex items-center gap-2.5'>
      <LucideCrown
        className={cn('size-7 text-primary fill-primary', iconClassName)}
      />

      <span
        className={cn(
          'text-3xl font-bold',
          spaceGrotesk.className,
          textClassName
        )}
      >
        Constancy
      </span>
    </div>
  )
}
