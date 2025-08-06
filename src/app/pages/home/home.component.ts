import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	imageSets: string[][] = [
		['assets/gallery/gallery1.jpg', 'assets/gallery/gallery2.jpg', 'assets/gallery/gallery3.jpg'],
		['assets/gallery/gallery4.jpg', 'assets/gallery/gallery5.jpg', 'assets/gallery/gallery6.jpg']
  	];

	currentSetIndex = 0;

	ngOnInit() {
		setInterval(() => {
			this.currentSetIndex = (this.currentSetIndex + 1) % this.imageSets.length;
		}, 5000);
	}
}
