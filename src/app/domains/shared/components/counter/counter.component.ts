import { Component, Input, signal, SimpleChange } from '@angular/core';


@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message = '';
  counter = signal(0);
  counterRef: number | undefined;

  constructor() {
    //Lo primero que se ejecuta -> NO ASYNC, before render
    //Solo corre una vez
    console.log('constructor');
    console.log('-'.repeat(10))
  }

  ngOnChanges(changes: SimpleChange) {
    //before and during render -> varias veces corre
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = (changes as any)['duration'];
    console.log(duration && duration.currentValue !== duration.previousValue);
    if (duration) {
      this.doSomething();
    }
  }

  ngOnInit() {
    //Evento muy importante y mas usado
    // after render, solo corre una vez -> ASYNC, then, subs
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
    this.counterRef = window.setInterval(() => {
      console.log('run interval')
      this.counter.update(statePrev => statePrev +1);
    }, 1000)
  }

  ngAfterViewInit() {
    //After render y si los hijos ya fueron renderizados(pintados)
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef);
  }

  doSomething() {
    console.log('change duration')
    //ASYNC
  }
}
