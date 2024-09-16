import { EmptyGoals } from './empty-goals'
import { Summary } from './summary'

export default function Home() {
  const goals = ['']

  return (
    <div className='max-w-2xl mx-auto'>
      {goals.length === 0 ? <EmptyGoals /> : <Summary />}
    </div>
  )
}
