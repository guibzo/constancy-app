'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { LucidePlusCircle } from 'lucide-react'

export const RegisterGoal = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className='flex gap-2 items-center mx-auto'>
          <LucidePlusCircle className='size-4' />
          <span className='text-sm font-medium tracking-tight'>
            Cadastrar meta
          </span>
        </Button>
      </SheetTrigger>

      <SheetContent className='space-y-6'>
        <SheetHeader>
          <SheetTitle>Cadastrar meta</SheetTitle>

          <SheetDescription>
            Adicione atividades que{' '}
            <span className='underline underline-offset-2'>te fazem bem</span> e
            que você quer continuar praticando toda semana.
          </SheetDescription>
        </SheetHeader>

        <form action='' className='space-y-6'>
          <div className='space-y-2'>
            <Label htmlFor='activity-name'>Qual a atividade?</Label>
            <Input
              name='activity-name'
              placeholder='Praticar exercícios, meditar, etc...'
            />
          </div>

          <div className='space-y-2'>
            <Label>Quantas vezes na semana?</Label>
            <RadioGroup defaultValue='option-one'>
              <div className='flex items-center space-x-2 bg-zinc-950'>
                <RadioGroupItem value='option-one' id='option-one' />
                <Label htmlFor='option-one'>Option One</Label>
              </div>

              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='option-two' id='option-two' />
                <Label htmlFor='option-two'>Option Two</Label>
              </div>
            </RadioGroup>
          </div>
        </form>

        <SheetFooter className='w-full h-full'>
          <SheetClose asChild>
            <Button size='sm' variant='secondary' className='flex-1'>
              Fechar
            </Button>
          </SheetClose>

          <SheetClose asChild>
            <Button size='sm' className='flex-1'>
              Salvar
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
