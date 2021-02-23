import { interval, of } from 'rxjs'
import { filter, map, take } from 'rxjs/operators/index.js'

// const obs$ = of(1,2,3,4,5)

const obs$ = interval(500).pipe(
  take(8)
).pipe(
  map( item => item*item)
).pipe(
  filter(item => (item%2))
)



const subscriptor = obs$.subscribe(
  data => { console.log('Ha llegado ', data)},
  err => { console.error('Error ', err)},
  () => { console.log('Se ha completado el observable')}
)

// subscriptor.unsubscribe()

