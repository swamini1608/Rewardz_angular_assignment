import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service';
import { Product } from 'src/app/classes/product';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit{
  public products: Product[]=[];
  public selectedAccordion: number | null = null;
  public totalLoadedItems :number | null=null;
  public accordionItems = [
    { title: 'E-voucher', content: 'evoucher related info' },
    { title: 'Fashion retail', content: 'fashion related info' },
    { title: 'Products', content: 'Products related info' }
  ];

  constructor(private dataService: DataService){}

  ngOnInit(){
    this.dataService.getProductData().subscribe(
      data => {
        this.products = data.products;  // Access the users array in the JSON
        this.totalLoadedItems=data.products.length;
        console.log(this.products);  // Log the users to the console
      },
      error => {
        console.error('Error fetching data', error);
      }
    );
   

  }

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

  isOutOfStock(product:Product):boolean{
    return !product?.quantity ? true: false
  }
  isOnHighDemand(product:Product):boolean{
    if(product && product.quantity!=null && product.quantity!=0 && product.quantity<=product.low_quantity){
      return true;
    }
    return false;
  }
}
