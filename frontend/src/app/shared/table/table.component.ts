// import { CommonModule } from '@angular/common';
// import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { EventService } from '../../services/event.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-table',
//   standalone: true,
//   imports: [CommonModule,FormsModule],
//   templateUrl: './table.component.html',
//   styleUrl: './table.component.css'
// })
// export class TableComponent {
//   @Input() data: any[] = [];
//   @Input() columns: {key:string;header:string}[] = [];
//   @Input() deleteItem: any
//   @Input() updateItem: any
//   @Input() actions:boolean = true;

//   @Output() eventEdit = new EventEmitter<any>();
//   @Output() eventDelete = new EventEmitter<any>()
//   searchQuery: string = '';
//   emptyDataMessage:string = ''

//   constructor(private eventService:EventService,private router:Router) {}

//   // Filter rows based on the search query
//   filteredData() {
//     if (this.data.length > 0) {
//       return this.data.filter((row) =>
//         row?.name?.toLowerCase().includes(this.searchQuery.toLowerCase())
//       );
//     } else {
//       return []; // Always return an array
//     }
//   }
  
//   isEmptyData(): boolean {
//     return (
//       this.data.length === 0 || 
//       this.filteredData().length === 0
//     );
//   }
//   // Edit row handler
//   editEvent(row: any) {
    
//     this.eventEdit.emit(row.eventId)
//   }

//   // Delete row handler
//   async deleteEvent(row: any) {
//     this.eventDelete.emit(row.eventId)
//   }
// }
