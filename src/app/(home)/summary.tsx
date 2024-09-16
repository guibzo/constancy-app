import { CreateGoalModalContent } from '@/components/create-goal-modal-content'
import { LogoIcon } from '@/components/logo'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import { CheckCircle2, LucidePlus, LucidePlusCircle } from 'lucide-react'

export const Summary = () => {
  const total = 15
  const current = 8
  const progressPercentage = (100 / total) * current

  return (
    <div className='py-5 flex flex-col gap-6'>
      <div className='flex w-full items-center justify-between mx-auto'>
        <div className='flex items-center gap-3'>
          <LogoIcon iconClassName='size-6' />
          <h2 className='text-lg font-semibold leading-snug'>
            05 a 12 de Agosto
          </h2>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button className='flex gap-2 items-center' size='sm'>
              <LucidePlusCircle className='size-4' />
              <span className='text-sm font-medium tracking-tight'>
                Cadastrar meta
              </span>
            </Button>
          </SheetTrigger>

          <CreateGoalModalContent />
        </Sheet>
      </div>

      <div className='flex flex-col gap-3'>
        <Progress value={progressPercentage} />

        <div className='flex items-center justify-between text-xs text-muted-foreground'>
          <span>
            Você completou <span className='text-foreground'>{current}</span> de{' '}
            <span className='text-foreground'>{total}</span> metas nessa semana.
          </span>

          <span>{progressPercentage.toFixed(0)}%</span>
        </div>
      </div>

      <Separator />

      <div className='flex items-center gap-2 flex-wrap'>
        {Array.from({ length: 15 }).map((_, index) => (
          <Badge key={index} variant='dashed' className='px-3 py-2'>
            <div className='flex items-center gap-2'>
              <LucidePlus className='size-4 text-muted-foreground' />
              Hello {index + 10}
            </div>
          </Badge>
        ))}
      </div>

      <div className='space-y-6'>
        <h2 className='font-medium text-xl leading-snug'>Sua semana</h2>

        <div className='space-y-4'>
          <h3 className='font-medium'>
            Domingo{' '}
            <span className='text-xs text-muted-foreground'>
              (10 de agosto)
            </span>
          </h3>

          <ul className='space-y-3'>
            <li className='flex items-center gap-2'>
              <CheckCircle2 className='text-secondary size-4' />

              <span className='text-sm text-muted-foreground'>
                Você completou{' '}
                <span className='text-foreground font-medium'>
                  “Acordar cedo”
                </span>{' '}
                às <span className='text-foreground font-medium'>08:13h</span>
              </span>

              <button className='underline hover:text-muted-foreground/80 text-xs text-muted-foreground underline-offset-2'>
                Desfazer
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
