import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { Inventory } from '../inventory';
import { InventoryDetailService } from '../inventory-detail.service';
@Component({
  selector: 'app-search-inventory',
  templateUrl: './search-inventory.component.html',
  styleUrls: ['./search-inventory.component.css']
})
export class SearchInventoryComponent implements OnInit {
 
  inventories : Inventory = new Inventory();
  public form! : FormGroup;
  pid!:number;
  
  constructor(private invs: InventoryDetailService){ }

  ngOnInit(): void {
      this.onSubmit();
  }
  

   onSubmit(){
    
      console.log(this.pid);
      this.invs.searchInventory(this.pid).subscribe(data=>{
        this.inventories = data;
      }
      )
  
    

  }

}
