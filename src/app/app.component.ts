import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
  {
    title: "Tree",
    userName: "@Tree",
    imgURL:"assets/tree.jpeg",
    content: "I saw a free"
  },
  {
    title: "Snowy Mountain",
    userName: "@Mountainlover",
    imgURL:"assets/mountain.jpeg",
    content: "Here is a picture of a mountain"
  },
  {
    title: "Bike",
    userName: "@Mountainbiking!",
    imgURL:"assets/biking.jpeg",
    content: "I did some biking today"
  },
  ]

}
