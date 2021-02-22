import {Subject, BehaviorSubject} from 'rxjs'


const sub$ = new Subject()


sub$.subscribe(
  data => { console.log('Al SB1 ha llegado ', data)}
)

sub$.next(1)
sub$.next(2)

sub$.subscribe(
  data => { console.log('Al SB2 ha llegado ', data)}
)
sub$.next(3)
sub$.next(4)


const bhs$ = new BehaviorSubject(100)

bhs$.subscribe(
  data => { console.log('Al BHS1 ha llegado ', data)}
)

bhs$.next(1)
bhs$.next(2)

bhs$.subscribe(
  data => { console.log('Al BHS2 ha llegado ', data)}
)

bhs$.next(3)
bhs$.next(4)