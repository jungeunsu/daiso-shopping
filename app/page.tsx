import { Button } from '@/components/ui/button'
// import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1>Hello world</h1>

      <button className="bg-red-300 px-4 py-2 rounded-md">버튼</button>
      <br />
      <Button>Button</Button>
      <br />
      <Button variant={'destructive'}>Button-destructive</Button>
      <Button variant={'destructive'} size={'lg'}>
        Button-destructive-lg
      </Button>
      <br />
      <Button variant={'destructive'} size={'sm'}>
        Button-destructive-sm
      </Button>
    </div>
  )
}
