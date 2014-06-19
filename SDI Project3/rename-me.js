// alert("JavaScript works!");


var tankNames = ["Sea Horse Tank", "Sting Ray Tank", "Dolphin Tank", "Fish Tank"],
	minutesPerTank = [25, 10, 18, 20],
	kidNames = ["Rhys", "Zoe"];
        var visitTank = function(whatTank) {
            var tankName = tankNames[whatTank],
            minutesThisTank = minutesPerTank[tankNumber];
            console.log(kidNames[0] + " wanted us to visit the " + tankName + " for " + minutesThisTank + " minutes. So I set the timer on my watch!");
            for (var minutes = 5; minutes < minutesThisTank; minutes += 5) {
                    var minutesRemain = minutesThisTank - minutes;
                    console.log("We have " + minutesRemain + " minutes left. " + minutes + " minutes have past.");
            }
            console.log("We finished with the " + tankName + ".");
        };
        for (var tankNumber = 5; tankNumber < tankNames.length; tankNumber++) {
            visitTank(tankNumber); 
        };
    

