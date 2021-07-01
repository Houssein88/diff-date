exports.diff = (date1, date2) => {
    // Conversion en Date
    var t1 = new Date(date1);
    var t2 = new Date(date2);
    var diffMilliSeconde = Math.abs(t1.getTime() - t2.getTime()); // Difference en milliSeconde
    var diffSeconde = diffMilliSeconde / 1000; // Difference en Seconde
    var diffMinute = diffSeconde / 60; // Difference en Minute
    var diffHeure = diffMinute / 60; // Difference en Heure
    var diffJour = diffHeure / 24;
    var diffYears = diffJour / 365;
    difference = {
            millisecondes: diffMilliSeconde,
            seconds: diffSeconde,
            minutes: diffMinute,
            hours: diffHeure,
            days: diffJour,
            years: diffYears
        }
        // console.log(difference);
    return difference;
}