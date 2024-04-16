import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Inventory } from '../inventory';
import { InventoryDetailService } from '../inventory-detail.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-create-inventory',
  templateUrl: './create-inventory.component.html',
  styleUrls: ['./create-inventory.component.css']
})
export class CreateInventoryComponent {
  inventory : Inventory = new Inventory();


  constructor(private invs: InventoryDetailService, private route: Router ){}


  saveinventory(invent :any){
    this.invs.createInventory(invent).subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log(err),
      complete: () => this.gotoHome(),
      

      
    });
       
    //  data => {console.log(data);
     //   this.gotoHome();},
    //  error => console.log(error));
 //   this.invs.createInventory(this.inventory).subscribe(
  //    data => {console.log(data);
  //     },
  //    error => console.log(error));
      
  }

  gotoHome(){
    this.route.navigate(['/inventory']);
  }
  

  onSubmit(invent : any){
    console.log(invent);
    this.saveinventory(invent);

  }

}
