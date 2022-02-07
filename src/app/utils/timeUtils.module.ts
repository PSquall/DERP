
module TimeUtils {
  
  export function lapTimeStringToSeconds(lapTime: String) {
      var hasMinutes = lapTime.includes(":"),
      splittedTimeString,
      timeMinutes,
      timeSeconds;

      if(hasMinutes){
      //MinuteValue
          splittedTimeString = lapTime.split(":");
          timeMinutes = Number(splittedTimeString[0]);
          //Second and Millisecond Value
          timeSeconds = Number(splittedTimeString[1]);
      } else {
          splittedTimeString = [lapTime];
          timeMinutes = 0;
          timeSeconds = Number(lapTime);
      }
      
      return timeSeconds + (60 * timeMinutes);            
  }

  export function lapTimeSecondsToString(lapTimeInSeconds: Number){
      var seconds = Number(lapTimeInSeconds) % 60,
          minutes = (Number(lapTimeInSeconds) - seconds) / 60,
          miliseconds  = (seconds % 1),
          res = '';
          
          seconds = seconds - miliseconds;
          if(minutes > 0){
              res = minutes + ':'
          }

          if(seconds < 10){
              res = res+'0';
          }
          res = res + seconds;

          miliseconds = miliseconds*1000;
          miliseconds = Number(miliseconds.toFixed(0));
          if(miliseconds > 0){
              res = res + '.' + String(miliseconds);
          } else { 
              res = res + '.000'
          }

      return res;
  }
}
