import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from '@/components/ui/radio-group'
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'

export const CreateGoalModalContent = () => {
  return (
    <SheetContent className='flex flex-col gap-6'>
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
            autoFocus
            id='activity-name'
            placeholder='Praticar exercícios, meditar, etc...'
          />
        </div>

        <div className='space-y-2'>
          <Label>Quantas vezes na semana?</Label>
          <RadioGroup defaultValue='1'>
            <RadioGroupItem value='1'>
              <RadioGroupIndicator />
              <span className='text-muted-foreground text-sm font-medium leading-none'>
                1x na semana
              </span>
              <span className='text-lg leading-none'>🥱</span>
            </RadioGroupItem>

            <RadioGroupItem value='2'>
              <RadioGroupIndicator />
              <span className='text-muted-foreground text-sm font-medium leading-none'>
                2x na semana
              </span>
              <span className='text-lg leading-none'>🙂</span>
            </RadioGroupItem>

            <RadioGroupItem value='3'>
              <RadioGroupIndicator />
              <span className='text-muted-foreground text-sm font-medium leading-none'>
                3x na semana
              </span>
              <span className='text-lg leading-none'>😎</span>
            </RadioGroupItem>

            <RadioGroupItem value='4'>
              <RadioGroupIndicator />
              <span className='text-muted-foreground text-sm font-medium leading-none'>
                4x na semana
              </span>
              <span className='text-lg leading-none'>😜</span>
            </RadioGroupItem>

            <RadioGroupItem value='5'>
              <RadioGroupIndicator />
              <span className='text-muted-foreground text-sm font-medium leading-none'>
                5x na semana
              </span>
              <span className='text-lg leading-none'>🤨</span>
            </RadioGroupItem>

            <RadioGroupItem value='6'>
              <RadioGroupIndicator />
              <span className='text-muted-foreground text-sm font-medium leading-none'>
                6x na semana
              </span>
              <span className='text-lg leading-none'>🤯</span>
            </RadioGroupItem>

            <RadioGroupItem value='7'>
              <RadioGroupIndicator />
              <span className='text-muted-foreground text-sm font-medium leading-none'>
                7x na semana
              </span>
              <span className='text-lg leading-none'>🔥</span>
            </RadioGroupItem>
          </RadioGroup>
        </div>
      </form>

      <SheetFooter className='mt-auto'>
        <SheetClose asChild>
          <Button size='sm' variant='muted' className='flex-1'>
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
  )
}
