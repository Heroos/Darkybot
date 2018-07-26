var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

module.exports.formatDate = (date) => {
  date.setTime(date.getTime() + 7200000)
  var monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
  var dayNames = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
  
  var dayName = date.getDay();
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();
  var hour = date.getHours()
  var minutes = date.getMinutes()

  return dayNames[dayName] + ' ' + day + ' ' + monthNames[monthIndex] + ' ' + year + ' à '+ this.pad(hour) + ':' + this.pad(minutes);
}
module.exports.formatTimestamp = (delay, form) => {
    let days = Math.floor(delay / (24*60*60*1000));
    let daysms=delay % (24*60*60*1000);
    let hours = Math.floor((daysms)/(60*60*1000));
    let hoursms=delay % (60*60*1000);
    let minutes = Math.floor((hoursms)/(60*1000));
    let minutesms=delay % (60*1000);
    let sec = Math.floor((minutesms)/(1000));
  if(!form){
    if(days != 0) return days+":"+this.pad(hours)+":"+this.pad(minutes)+":"+this.pad(sec);
    if(hours != 0) return this.pad(hours)+":"+this.pad(minutes)+":"+this.pad(sec);
    return this.pad(minutes)+":"+this.pad(sec);
  }else{
    let result = ""
    if(days != 0) result += days + " jour" + (days==1 ? "" : "s") + " ";
    if(hours != 0) result += hours + " heure" + (hours==1 ? "" : "s") + " ";
    if(minutes != 0) result += minutes+" minute" + (minutes==1 ? "" : "s") + " ";
    if(sec != 0)result += sec + " seconde" + (sec==1 ? "" : "s")
    return result
  }
}
module.exports.pad = (number) => {
    var result = "" + number;
    if (result.length < 2) {
        result = "0" + result;
    }

    return result;
}
function parseTimestamp(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\-?\d?\.?\d+) *(millisecondes?|msecs?|ms|secondes?|secs?|s|minutes?|mins?|m|heures?|hrs?|h|jours?|d|semaines?|w|ans?|années?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'années':
    case 'année':
    case 'ans':
    case 'an':
    case 'y':
      return n * y;
    case 'semaines':
    case 'semaine':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'heures':
    case 'heure':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'secondes':
    case 'seconde':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'millisecondes':
    case 'milliseconde':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}
module.exports.parseTimestamp = parseTimestamp