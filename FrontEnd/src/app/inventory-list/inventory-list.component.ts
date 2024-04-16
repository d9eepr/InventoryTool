import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inventory } from '../inventory';
import { InventoryDetailService } from '../inventory-detail.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {



pid! : number;
  inventories: Inventory[] =[];
  
  searchTerm = '';


  updateInventory(id:number){
    this.router.navigate(['update-inventory',id]);

  }

  constructor(private invService: InventoryDetailService, private router:Router){
    
  }

  ngOnInit(): void {
      
    this.getInventoryList();
  }
  
  private getInventoryList(){
    this.invService.getInventoryList().subscribe(data=>{
      this.inventories =data;
    })
  }
create(){
    this.router.navigate(['create-inventory']);

  }
  search(){
    this.router.navigate(['search-inventory']);

  }
  delete(id: number) {
    this.invService.deleteInventory(id).subscribe( data => {
      console.log(data);
      this.getInventoryList();
      
    alert(id+" deleted");

  })
}


  


}
