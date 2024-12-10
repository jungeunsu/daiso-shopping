// import { Button } from '@/components/ui/button'

// export default function Home() {
//   return (
//     <div>
//       <h1>Hello world</h1>

//       <button className="bg-red-300 px-4 py-2 rounded-md">버튼</button>
//       <br />
//       <Button>Button</Button>
//       <br />
//       <Button variant={'destructive'}>Button-destructive</Button>
//       <Button variant={'destructive'} size={'lg'}>
//         Button-destructive-lg
//       </Button>
//       <Button variant={'secondary'} size={'sm'}>
//         Button-secondary-sm
//       </Button>
//     </div>
//   )
// }

import ProductList from '@/components/shared/product/product-list'
import sampleData from '@/lib/sample-data'

export default function Home() {
  return (
    <div className="space-y-8">
      <h2 className="h2-bold">Latest Products</h2>
      <ProductList data={sampleData.products} />
    </div>
  )
}
