import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Lap } from 'src/app/models/lap';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent {

  public setupForm: FormGroup = new FormGroup({
    maxFuel: new FormControl('Maximum Fuel in Liter', [
      Validators.required,
      Validators.maxLength(3),
      Validators.minLength(1),
      Validators.pattern("^[0-9]*$")
    ], []),
    raceTime: new FormControl('Race Time in Hours', [
      Validators.required,
      Validators.maxLength(3),
      Validators.minLength(1),
      Validators.pattern("^[0-9]*$")
    ], [])
  })

  testLap: Lap | null = null
  drivers: String[] = [];
  value: String = "";

  addLap($event:Lap){
    this.testLap = $event;
    console.log(this.testLap);
  };

  addDriver(driver: String){
    this.drivers.push(driver);
  }

  constructor(){
    this.setupForm.valueChanges.subscribe(console.log)
  }

}
