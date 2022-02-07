import { Driver } from "../models/driver"
import { Lap } from "../models/lap"

export class RaceCalculator {

    public constuctor(){};

    public getDriversFromLaps(laps: Lap[]){
        var drivers: Map<String, Driver> = new Map(),
            result: Driver[];

        //Get all drivers
        laps.forEach(function (lap){
            var tempDriver: Driver;
            if(drivers.has(lap.driver)){
                drivers.get(lap.driver)?.modifyDriverValues(lap.lapTime, lap.lapTimeSeconds, lap.fuel);
            } else {
                tempDriver = new Driver(lap.driver);
                tempDriver.modifyDriverValues(lap.lapTime, lap.lapTimeSeconds, lap.fuel);
                drivers.set(lap.driver, tempDriver);
            }
        })

        result = Array.from(drivers.values());
        return result;
    }
    

}
