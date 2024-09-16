'use client'

import { CreateGoalModalContent } from '@/components/create-goal-modal-content'
import { Button } from '@/components/ui/button'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import { LucidePlusCircle } from 'lucide-react'

export const CreateGoal = () => {
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

      <CreateGoalModalContent />
    </Sheet>
  )
}
