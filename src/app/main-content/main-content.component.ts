import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {
  accordionItems = [
    { title: 'Accordion 1', content: 'This is the content of Accordion 1.' },
    { title: 'Accordion 2', content: 'This is the content of Accordion 2.' },
    { title: 'Accordion 3', content: 'This is the content of Accordion 3.' }
  ];

  selectedAccordion: number | null = null;

  toggleAccordion(index: number): void {
    this.selectedAccordion = this.selectedAccordion === index ? null : index;
  }

  isVisible: boolean = false;

  // Method to show overlay
  openOverlay() {
    this.isVisible = true;
  }

  // Method to hide overlay
  closeOverlay() {
    this.isVisible = false;
  }
}
