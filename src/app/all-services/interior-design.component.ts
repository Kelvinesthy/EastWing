import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: './interior-design.component.html',
  styleUrls: ['./services.component.css']
})
export class InteriorDesignComponent implements OnInit{
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
