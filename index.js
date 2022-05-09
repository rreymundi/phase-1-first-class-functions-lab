const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const firstTwoDrivers = drivers.slice(0, 2);

const returnFirstTwoDrivers = function (drivers){
    return firstTwoDrivers;
}

const lastTwoDrivers = drivers.slice(-2);

const returnLastTwoDrivers = function (drivers){
    return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer){
    return function multiplier() { 
        return integer * integer;
    }
}

const fareDoubler = integer => integer *2;

const fareTripler = integer => integer *3;

function selectDifferentDrivers(drivers, selector){
    if (selector === returnFirstTwoDrivers)
        return firstTwoDrivers;
        else if (selector === returnLastTwoDrivers)
            return lastTwoDrivers;
};