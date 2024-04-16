import { Component, OnInit } from '@angular/core';
import { Inventory } from '../inventory';
import { FormsModule } from '@angular/forms';
import { InventoryDetailService } from '../inventory-detail.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-inventory',
  templateUrl: './update-inventory.component.html',
  styleUrls: ['./update-inventory.component.css']
})
export class UpdateInventoryComponent implements OnInit {
  id!:number;
  constructor(private route: Router, private invs: InventoryDetailService,
    private router: ActivatedRoute){}
  inventory: Inventory= new Inventory();

ngOnInit(): void{
  this.id= this.router.snapshot.params['id'];

  this.invs.searchInventory(this.id).subscribe(data =>{

    this.inventory=data;
    //error => console.log(error));
    

  });

}




  onSubmit(){
    

    this.invs.updateInventory(this.id, this.inventory).subscribe(data=>

{
 
  this.gotoHome();}
  )
  
      
    
    

  }

  gotoHome(){
    this.route.navigate(['/inventory']);
  }


}
