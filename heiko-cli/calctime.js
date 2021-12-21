module.exports = {
    myAge,
    workSince,
}

// Calculate my age
function myAge () {
    const birthDate = new Date("10/09/1981");
    const thisDay   = new Date();

    const years = (thisDay.getFullYear() - birthDate.getFullYear()).toString();

    return years;
}

// Calculate my years of work experience
function workSince () {
    const startDate = new Date("08/01/1998");
    const thisDay   = new Date();

    const years = (thisDay.getFullYear() - startDate.getFullYear()).toString();

    return years;
}