exports.diff = (date1, date2) => {
    if (typeof date1 != String || typeof date2 != String) {
        return "Les dates doivent être en string !"
    }

    var t1 = new Date(date1);
    var t2 = new Date(date2);
    var diffSeconde = Math.abs(t1.getTime() / 1000 - t2.getTime() / 1000); // Difference en Seconde
    var diffMinute = diffSeconde / 60; // Difference en Minute
    var diffHeure = diffMinute / 60; // Difference en Heure
    var diffJour = diffHeure / 24;
    difference = {
        seconds: diffSeconde,
        minutes: diffMinute,
        hours: diffHeure,
        days: diffJour
    }
    console.log(difference);
    return difference;
}