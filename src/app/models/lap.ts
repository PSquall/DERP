
export class Lap {
    lapTime: String;
    lapNumber: number;
    lapTimeSeconds: number;
    fuel: number;
    fuelSave: boolean;
    driver: String = '';

    constructor(lapTime: String, lapNumber: number,fuel: number ,fuelSave: boolean, driver: string) {
        this.lapTime = lapTime;
        this.lapNumber = lapNumber;
        this.fuel = fuel;
        this.fuelSave = fuelSave;
        this.lapTimeSeconds = TimeUtils.lapTimeStringToSeconds(this.lapTime);
        this.driver = driver;
    }

    public getLapTimeAsString(){
        var res = TimeUtils.lapTimeSecondsToString(this.lapTimeSeconds);
       
        return res;
    }
}
