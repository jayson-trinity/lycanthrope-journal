console.log("______A LYNCANTHROPE'S LOG______");
console.log("Hi Mr Paul we've heard events of you Transforming into a werewolf with no certain idea how it comes up or what triggers it\nIll be your personal event recorder for the next 1 Month [4-WEEKS] to take records of your personal activities and know what triggers the warewolf so as to try prevent futher transformations out of your will ");

var weeklyEvents = [];
var recordOfWeeklyEvents = [];
var recordOfTransformationOutcomes = [];
var transformationTracker = 0;
var noTransformationTracker = 0;
var weeklyTransformationCheck = [];
var noWeeklyTransformationCheck = [];

class Journal {
    constructor(weekId) {
        this.weekId = weekId;
    }

    getEvents() {
        while (true) {
            let eventCollector = prompt("Enter your events: ", " \n");
            if (eventCollector === null || eventCollector === "") {
                alert("please input an event.");
                continue;
            } else if (eventCollector === "done" || eventCollector == "DONE" || eventCollector == "Done") {
                break;
            } else
                weeklyEvents.push(eventCollector);
        }

        return this;
    }

    checkForTransformation() {
        let transformTrigger1 = weeklyEvents.includes("sleep");
        let transformTrigger2 = weeklyEvents.includes("SLEEP");

        if ( transformTrigger1 === true || transformTrigger2 === true ) {
            recordOfTransformationOutcomes.splice(0, 0, (  this.weekId  ));
            transformationTracker++;
            weeklyTransformationCheck.push(this.weekId);
        } else {
            recordOfTransformationOutcomes.splice(0, 0, ( this.weekId ));
            noTransformationTracker++;
            noWeeklyTransformationCheck.push(this.weekId);
        }
    }
}
let allDays = ["WEEK-1", "WEEK-2", "WEEK-3", "WEEK-4",];
for (let i =0; i < allDays.length; i++) {
    allDays[i] = new Journal (allDays[i] + " ")
};
for (let i = 0; i < allDays.length; i++) {
    alert(("\nPlease Enter the events of " + allDays[i].weekId + "activities and type 'DONE' When youre are done with your Entries.\n"));
    allDays[i].getEvents().checkForTransformation();
    recordOfWeeklyEvents.splice(0, 0, weeklyEvents);
    weeklyEvents = [];
    let continueQuery = prompt("\nWould you like to move on to the following week? press ENTER to move on or Type 'no' to display the result so far. \n ");

    if (continueQuery == " ") {
       continue;
    } else if (continueQuery == 'no' || continueQuery == 'NO' || continueQuery == null) {
        break;
    }
}

console.log("\n____PRESENTING RESULTS____");
recordOfTransformationOutcomes.reverse();
recordOfWeeklyEvents.reverse();
for (let i = 0; i < recordOfTransformationOutcomes.length; i++) {
    console.log("\nThese are your activities", recordOfWeeklyEvents[i]);
    console.log("\n");
};
console.log("__TRANSFORMATION TRIGGER__\n")

if(transformationTracker == true) {
  console.log("You transformed into a werewolf on " + weeklyTransformationCheck + " because you slept.\n");
}else if (transformationTracker == false) {
  console.log("you didnt transform.");
}

console.log("\n__RECORD SUMMARY__")
console.log("Number of transformations " + transformationTracker);
console.log("\nWEEK(s)", weeklyTransformationCheck);
console.log("Number of week(s) without transformation " + noTransformationTracker);
console.log("\nWEEK(s)", noWeeklyTransformationCheck);