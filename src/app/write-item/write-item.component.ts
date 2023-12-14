import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-write-item',
  templateUrl: './write-item.component.html',
  styleUrls: ['./write-item.component.css']
})
export class WriteItemComponent {
  itemName: string = '';
  @Output() inputEvent = new EventEmitter<string>();

  addItem(){
    this.inputEvent.emit(this.itemName)

  }

  

}
