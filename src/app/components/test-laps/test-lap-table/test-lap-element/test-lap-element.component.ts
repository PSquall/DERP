import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Lap } from 'src/app/models/lap';

@Component({
  selector: 'app-test-lap-element',
  templateUrl: './test-lap-element.component.html',
  styleUrls: ['./test-lap-element.component.css']
})
export class TestLapElementComponent implements OnInit{

  @Input() lap?: Lap;
  @Output() deleteEvent: EventEmitter<Lap> = new EventEmitter<Lap>();

  constructor() { }

  ngOnInit(): void {  }

  public onDelete(event?: any){
    this.deleteEvent.emit(this.lap);
  }

}
