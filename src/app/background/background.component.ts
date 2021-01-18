import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var slideIndex = 0;
    showSlides();

    function showSlides(){
      var i;
      var slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
      for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
      }
      slideIndex++;
      if(slideIndex > slides.length){
        slideIndex = 1
      }
      slides[slideIndex-1].style.display = "block";
      setTimeout(showSlides, 5000);
    }
  }

}
