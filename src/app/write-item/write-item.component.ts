import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-write-item',
  templateUrl: './write-item.component.html',
  styleUrls: ['./write-item.component.css']
})
export class WriteItemComponent {
  itemName: string = '';
  @Output() inputEvent = new EventEmitter<{itemName: string, action: string }>();

  writeItem(action: string){
    this.inputEvent.emit({ itemName: this.itemName, action: action })

  }

 

}
