import { Component, Input, OnInit } from '@angular/core';
import { Lap } from 'src/app/models/lap';

@Component({
  selector: 'app-test-lap-table',
  templateUrl: './test-lap-table.component.html',
  styleUrls: ['./test-lap-table.component.css']
})
export class TestLapTableComponent{

  laps: Lap[] = [];
  
  
  private _inputLap: Lap | null = null;
  get testLap() {
    return this._inputLap;
  }

  @Input() set testLap(lap: Lap | null){
    this._inputLap = lap
    if(lap)
    this.laps.push(lap);
  };

  deleteLap($event: Lap){
    this.laps.splice(this.laps.indexOf($event), 1)
  }

}
