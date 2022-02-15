import { Component, OnInit } from '@angular/core';
declare var $:any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
       //>=, not <=
      if (scroll >= 50) {
          $(".navfix").addClass("sticky");
      } else{
          $(".navfix").removeClass("sticky");
      }
  }); //missing );
  }

  ngOnInit() {}
}
