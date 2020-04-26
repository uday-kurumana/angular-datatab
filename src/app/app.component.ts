import { Component } from '@angular/core';
import { INglDatatableSort, INglDatatableRowClick } from 'ng-lightning';

const DATA = [
  { rank: 1, name: 'Kareem', surname: 'Abdul-Jabbar', points: 38387 },
  { rank: 2, name: 'Karl', surname: 'Malone', points: 36928 },
  { rank: 3, name: 'Kobe', surname: 'Bryant', points: 33643 },
  { rank: 4, name: 'Michael', surname: 'Jordan', points: 32292 },
  { rank: 5, name: 'Wilt', surname: 'Chamberlain', points: 31419 },
  { rank: 6, name: 'Kareem', surname: 'Abdul-Jabbar', points: 38387 },
  { rank: 7, name: 'Karl', surname: 'Malone', points: 36928 },
  { rank: 8, name: 'Kobe', surname: 'Bryant', points: 33643 },
  { rank: 9, name: 'Michael', surname: 'Jordan', points: 32292 },
  { rank: 10, name: 'Wilt', surname: 'Chamberlain', points: 31419 },
  { rank: 11, name: 'Kareem', surname: 'Abdul-Jabbar', points: 38387 },
  { rank: 12, name: 'Karl', surname: 'Malone', points: 36928 },
  { rank: 13, name: 'Kobe', surname: 'Bryant', points: 33643 },
  { rank: 14, name: 'Michael', surname: 'Jordan', points: 32292 },
  { rank: 15, name: 'Wilt', surname: 'Chamberlain', points: 31419 },
  { rank: 16, name: 'Kareem', surname: 'Abdul-Jabbar', points: 38387 },
  { rank: 17, name: 'Karl', surname: 'Malone', points: 36928 },
  { rank: 18, name: 'Kobe', surname: 'Bryant', points: 33643 },
  { rank: 19, name: 'Michael', surname: 'Jordan', points: 32292 },
  { rank: 20, name: 'Wilt', surname: 'Chamberlain', points: 31419 },
  { rank: 21, name: 'Kareem', surname: 'Abdul-Jabbar', points: 38387 },
  { rank: 22, name: 'Karl', surname: 'Malone', points: 36928 },
  { rank: 23, name: 'Kobe', surname: 'Bryant', points: 33643 },
  { rank: 24, name: 'Michael', surname: 'Jordan', points: 32292 },
  { rank: 25, name: 'Wilt', surname: 'Chamberlain', points: 31419 },
];




@Component({
  selector: 'app-demo-datatables-basic',
  templateUrl: './basic.html',
})
export class DemoDatatablesBasic {

  data = DATA;

  total = this.data.length;
  pageOptions = ['5','10','15'];
  selection: string = '5';

  open = false;

  // Initial sort
  sort: INglDatatableSort = { key: 'rank', order: 'asc' };

  // Show loading overlay
  loading = false;

  // Toggle name column
  hideName = false;

  // Custom sort function
  onSort($event: INglDatatableSort) {
    const { key, order } = $event;
    this.data.sort((a: any, b: any) => {
      return (key === 'rank' ? b[key] - a[key] : b[key].localeCompare(a[key])) * (order === 'desc' ? 1 : -1);
    });
  }

  toggleData() {
    this.data = this.data ? null : DATA;
  }

  onRowClick($event: INglDatatableRowClick) {
    console.log('clicked row', $event.data);
  }
}
