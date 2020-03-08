import { Component, OnInit } from '@angular/core';

@Component({
 /*doesn't need because isn't nested selector: 'app-welcome',*/
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent implements OnInit {
  public pageTitle='Mooves - For achiving your perfect performances'

  ngOnInit(): void {
  }

}
