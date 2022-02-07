import { Component, OnInit } from '@angular/core';
import { Lap } from 'src/app/models/lap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test-lap-input',
  templateUrl: './test-lap-input.component.html',
  styleUrls: ['./test-lap-input.component.css']
})
export class TestLapInputComponent {
  @Output() addLapEvent = new EventEmitter<Lap>();

  drivers: String[] = [];

  public lapInputForm: FormGroup = new FormGroup({
    fuelUsed: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ], []),
    lapTime: new FormControl('', [
      Validators.pattern("^(?:(\\d{0,2}\\:|)(\\d{2}))(\\.\\d{0,3}|)"),
      Validators.required
    ], []),
    driverName: new FormControl('', [
      Validators.minLength(2),
      Validators.required
    ], [])
  });

  addLap(time: string, fuel: string, save: boolean, driver: string) {
    var testLap;
    if(!this.drivers.includes(driver)){
      this.drivers.push(driver);
    }
    testLap = new Lap(time, -1, Number(fuel), save, driver);
    this.addLapEvent.emit(testLap);
    this.lapInputForm.reset();
  }

}
