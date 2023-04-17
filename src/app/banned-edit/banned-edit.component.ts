import { AfterViewInit, Component } from '@angular/core';
import { Banned_DM, DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-banned-edit',
  templateUrl: './banned-edit.component.html',
  styleUrls: ['./banned-edit.component.scss']
})
export class BannedEditComponent implements AfterViewInit{

  constructor(private data:DataService, private route:ActivatedRoute, private router:Router){}

  item:Banned_DM = new Banned_DM();
  neu:boolean = false;
  
  async ngAfterViewInit() {
    var id = String(this.route.snapshot.paramMap.get("id"));
    if(id !== "neu"){
      this.item = await this.data.getBan(+id);
    }else{
      this.neu = true;
      this.item.Registered = new Date();
    }
  }

  async save(){
    if(this.neu){
      await this.data.createBan(this.item);
    }else{
      await this.data.editBan(this.item);
    }
    this.router.navigateByUrl("/ban");
  }

  async del(){
    await this.data.delBan(this.item.Id);
    this.router.navigateByUrl("/ban");
  }
}
