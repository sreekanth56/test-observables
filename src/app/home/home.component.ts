import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  private firstObsSebscription: Subscription;

  constructor() { }

  ngOnInit(): void {

  //  this.firstObsSebscription = interval(1000).subscribe(count=>{
  //     console.log(count);
  //   });

  const customIntervalObservable = Observable.create( observer =>{

    let count = 0;

    setInterval(()=>{
      observer.next(count);
      if(count === 5){
        observer.complete();
      }

      if( count >=3 ){
        observer.error(new Error(' count greater than are equal to 3'));

      }
      count++;
    },1000)
  })

  this.firstObsSebscription = customIntervalObservable.subscribe(data => {

    console.log(data);
  }, error=>{
    console.log("than are equal to 3 ");
  })


  }

  ngOnDestroy(): void{

    this.firstObsSebscription.unsubscribe();

}
}
