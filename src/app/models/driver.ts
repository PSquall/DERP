export class Driver {

    name: String;
    bestLap?: String;
    bestLapInSeconds?: number;
    numberOfLaps: number = 0;
    bestfuelUsed?: number;
    averageTime?: String;
    averageTimeInSeconds?: number;

    constructor(name: String) {
        this.name = name;
    }

    public modifyDriverValues(newLaptime: String, newLapTimeInSeconds: number, fuelused: number) {
        //modify best Lap
        var lapDiff;
        if (!this.bestLapInSeconds || newLapTimeInSeconds < this.bestLapInSeconds) {
            this.bestLapInSeconds = newLapTimeInSeconds;
            this.bestLap = newLaptime;
        }

        //modify fuel Save
        if (!this.bestfuelUsed || fuelused < this.bestfuelUsed) {
            this.bestfuelUsed = fuelused;
        }
        this.numberOfLaps++;
        if (this.averageTimeInSeconds) {
            lapDiff = newLapTimeInSeconds - this.averageTimeInSeconds;
            this.averageTimeInSeconds = this.averageTimeInSeconds + (newLapTimeInSeconds / this.numberOfLaps);
        } else {
            this.averageTimeInSeconds = newLapTimeInSeconds;
        }
        this.averageTime = TimeUtils.lapTimeSecondsToString(this.averageTimeInSeconds);
    }
}
