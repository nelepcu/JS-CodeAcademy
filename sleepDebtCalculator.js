const getSleepHours = day => {
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday'){
    return 7;
  } else if (day === 'wednesday'){
    return 9;
  } else if (day === 'thursday'){
    return 6;
  } else if (day === 'friday'){
    return 8;
  } else if (day === 'saturday'){
    return 9;
  } else if (day === 'sunday'){
    return 10;
  } else {
    return 'There is no such day!'
  }
};

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = (idealHours = 8) => {
  return idealHours*7;
}

const calculateSleepDebt = () => {
  actualSleepHours = getActualSleepHours();
  idealSleepHours = getIdealSleepHours(7);

  if (actualSleepHours === idealSleepHours) {
    console.log("You have the ideal amount of sleeping hours!")
  } else if (actualSleepHours < idealSleepHours) {
    let debtHours = idealSleepHours - actualSleepHours;
    console.log(`You are sleeping less than you should! You have to sleep ${debtHours} more hours per week to cover your debt.`)
  } else {
    moreHours = actualSleepHours - idealSleepHours;
    console.log(`You are sleeping mare than you should! You have to sleep ${moreHours} less hours per week.`)
  }
}

calculateSleepDebt();

