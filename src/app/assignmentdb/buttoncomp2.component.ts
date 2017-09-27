import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttoncomp2',
  templateUrl: './buttoncomp2.component.html',
  styleUrls: ['./buttoncomp2.component.css']
})
export class Buttoncomp2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  image1(image) {
    image.src = 'https://australianbananas.com.au/Images/Home/RipenessBlend.png';
  }
  image2(image) {
    image.src = 'http://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?k=6&m=185262648&s=612x612&w=0&h=u9rMspGGTOkgUSzZ6INtT_Ww4NpGz9zHMGRmIJJjBqQ=';
  }
  image3(image) {
    image.src = 'https://s-media-cache-ak0.pinimg.com/736x/d2/8a/2a/d28a2abd96219cabb27bb309a8fd4902.jpg';
  }
  image4(image) {
    image.src = 'http://media.istockphoto.com/photos/orange-fruit-isolated-on-white-background-picture-id489425692?k=6&m=489425692&s=612x612&w=0&h=W9SEn9QvJiy_OJiKH4uD0Dsad8T9zZluZ7xgrux5HJY=';
  }
}
