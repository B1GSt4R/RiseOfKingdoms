import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Banned_DM, DataService } from '../data.service';

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

@Component({
  selector: 'app-banned',
  templateUrl: './banned.component.html',
  styleUrls: ['./banned.component.scss']
})
export class BannedComponent implements AfterViewInit {
  
  displayedColumns: string[] = ['Id', 'Name', 'ReadName', 'PlayerId', 'Registered'];
  liste!:MatTableDataSource<Banned_DM>;

  constructor(private data:DataService){}

  async ngAfterViewInit() {
    await delay(1 * 5);
    this.liste = new MatTableDataSource(await this.data.getBanList());
    // this.liste.sortingDataAccessor = (item, property) => {
    //   switch(property){
    //     case 'Lieferant': return item.Lieferant.Bezeichnung;
    //     default: return item[property];
    //   }
    // };
    // this.liste.paginator = this.paginator;
    // this.liste.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.liste.filter = filterValue.trim().toLowerCase();
  }
}
