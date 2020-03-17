import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy  {

  userActivate = false;

  private activatedSubscription: Subscription;

  constructor(private userService: UserService){}

  ngOnInit(): void{
   this.activatedSubscription= this.userService.activatedEmitter.subscribe(didActivate =>{
      this.userActivate = didActivate;
    })
  }

  ngOnDestroy(){

    this.activatedSubscription.unsubscribe();

  }
}
