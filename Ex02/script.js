function getNumberOfDays(start, end) {
    const date1 = new Date(start);
    const date2 = new Date(end);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
}

document.getElementById("birthday").innerHTML = 'How many days since I was born : '+ (getNumberOfDays("3/11/1981", "12/13/2022"));


document.getElementById("anyDate").innerHTML = 'How many days since : ' +(getNumberOfDays("12/12/2011", "12/13/2022"));