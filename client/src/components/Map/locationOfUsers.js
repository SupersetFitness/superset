$(document).ready(function(){

    // Global Variables
    const arrayOfAllEvents = [];
    const arrayOfEventKeys=[];
    const exampleEvent = {
        trainerName: "name of trainer chosen",
        latitudeOfEvent: "lat",
        longitudeOfEvent: "long",
        addressOfEvent: "address",
        nameOfEventLocation: "name",
        eventKey: "math.ceiling(math.random() * latitude)",
        eventAdded:1111, // unix time
        eventStartTime: 1234, // unix time
        eventEndTime: 4321, // unix time
        eventExpiryTime: 999,
        eventName:"the name of the event"
    }
    const exampleLocation = {
        latitude:"",
        longitude:""
    }
    const currentLocation = {
        latitude:"",
        longitude:""
    }
    const database;

    // Data manipulation and calculations
    const convertStringToUnixTime=(theDateAndTimeAsString)=>{ // WORKS
        const convertedDate = moment(theDateAndTimeAsString).format("X");
        return convertedDate;
    }
    const convertUnixTimeToUserReadable = (unixTimeValue)=>{
        const dateString = moment.unix(unixTimeValue).format("MM/DD/YYYY hh:mm");
        return dateString
    }
    const doesUserHaveActiveTrainer = (trainerName){ // WORKS
        const currentTimeInUnix = convertStringToUnixTime(Date.now());
        for (const i=0;i<arrayOfAllEvents.length;i++){
            if (arrayOfAllEvents[i].trainerName == trainerName && arrayOfAllEvents[i].eventStartTime>= currentTimeInUnix){
                return true;
            }
        }
        return false;
    }
    function testIfEventIsInProximityWindow(currentLocation, theEvent, proximityWindowInMiles){ // WORKS
        const distanceBetweenEvents = getDistanceBetweenCoordinatesInMiles(currentLocation.latitude,currentLocation.longitude,theEvent.latitudeOfEvent,theEvent.longitudeOfEvent);
        if (distanceBetweenEvents <= proximityWindowInMiles) {
            return true;
        } else {
            return false;
        }
    }
    function returnArrayOfAllEventsWithinProximityWindow(currentLocation, proximityWindowInMiles){ // WORKS
        const arrayOfProximateEvents = [];
        for (const i=0; i<arrayOfAllEvents.length; i++){
            if (testIfEventIsInProximityWindow(currentLocation, arrayOfAllEvents[i],proximityWindowInMiles)){
                arrayOfProximateEvents.push(arrayOfAllEvents[i]);
            }
        }
        return arrayOfProximateEvents;
    }
    function returnArrayOfEventsAfterTime(targetTime, arrayToInspect){ // need to test
        const returnedArray=[];
        if (targetTime == ""){
            targetTime = convertStringToUnixTime(Date.now());
        } else {
            targetTime = convertStringToUnixTime(targetTime);
        }
        if (arrayToInspect==[]){
            arrayToInspect = arrayOfAllEvents;
        }
        for (const i=0;i<arrayToInspect.length; i++){
            if (arrayToInspect[i].eventEndTime>=targetTime){
                returnedArray.push(arrayToInspect[i]);
            }
        }
        return returnedArray;
    }
    function getDistanceBetweenCoordinatesInMiles(lat1,lon1,lat2,lon2) { // WORKS
        // https://stackoverflow.com/questions/18883601/function-to-calculate-distance-between-two-coordinates-shows-wrong
        const R = 6371; // Radius of the earth in km
        const dLat = deg2rad(lat2-lat1);  // deg2rad below
        const dLon = deg2rad(lon2-lon1);
        const a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon/2) * Math.sin(dLon/2)
            ;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        const d = R * c; // Distance in km
        const distanceInMiles = d * 0.621371;
        return d;
    }
    function deg2rad(deg) { // WORKS
        return deg * (Math.PI/180)
    }
    const getLocation = data { // WORKS
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                currentLocation.latitude = position.coords.latitude;
                currentLocation.longitude = position.coords.longitude;
                console.log(currentLocation);
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    // Database Functions
    const connectToDataBase = data => { // WORKS
        // clears local array of events and connects program to database
        arrayOfAllEvents=[];
        const config = {

        };

    }
    const testPushToDatabase =()=>{
        const eventToPush = putUserEntryInEventObject();
        database.ref().push(eventToPush);
        $("input").val("");
        $("#startSearch").val("");
        $("#end").val("");
    }
    const populateDatabaseWithEventInfo =()=> { //
        // Gets info from user entry, pushes to database and clears user fields
        const eventToPush = putUserEntryInEventObject();
        database.ref().push(eventToPush);
        clearUserInputFields();
    }

    // Interface functions
    const putUserEntryInEventObject = ()=> { //Rewrite to interact with trainer page
    // pulls in user information and converts info to appropriate formats
        const localEventKey = Math.ceil(Math.random()*$("#lat-input").val());
        const startTimeToChangeToUnix = $("#train-date").val() + " " + $("#startEvent").val();
        const endTimeToChangeToUnix = $("#train-date").val() + " " + $("#end").val();

        const userEvent = {
            // direct user inputs
            trainerName: $("#name").val(),
            eventName: $("#event").val(),
            nameOfEventLocation: $("#locationName").val(),
            eventStartTime: convertStringToUnixTime(startTimeToChangeToUnix),
            eventEndTime: convertStringToUnixTime(endTimeToChangeToUnix),

            // info received from google location search
            // need to integrate with places.js
            latitudeOfEvent: googleInfoLatAndLong.googleLat,
            longitudeOfEvent: googleInfoLatAndLong.googleLong,
            addressOfEvent: addressString,
            // nameOfEventLocation: addressString,


            // stuff we probably don't need
            eventAdded:parseInt(convertStringToUnixTime(Date.now())),
            // eventKey:localEventKey,
            // eventExpiryTime:parseInt($("#endTime-input").val())+(30*60)
        }
        // console.log(userEvent);
        return userEvent;
    }
    const pushEventToDatabase = ()=>{  // Works update for trainer page
        if (!doesUserHaveActiveTrainer($("#trainerName-input"))){
            const eventToPush = putUserEntryInEventObject();
            database.ref().push(eventToPush);
        } else {
            clearUserInputFields();
            //populate UI div to explain to user
        }
    }
    const returnArrayToPopulateDivs=(proximityWindowInMiles)=>{ //
        const arrayOfProximateEvents = returnArrayOfAllEventsWithinProximityWindow(currentLocation, proximityWindowInMiles);
        const arrayToPopulateTableWith = returnArrayOfEventsAfterTime(Date.now(),arrayOfProximateEvents);
        return arrayToPopulateTableWith;
    }

    const displayProximateEventsToUserPage =()=> {
        $(".event-table").find("tr:gt(0)").remove();

        const userSelectedProximity = $("#radius").val();
        console.log(userSelectedProximity);
        const arrayToPopulateDivsWith = returnArrayToPopulateDivs(userSelectedProximity);
        for (const i = 0; i < arrayToPopulateDivsWith.length; i++){
            const tr = $("<tr>");

            // create td's for data
            const td1 = $("<td>");
            const td2 = $("<td>");
            const td3 = $("<td>");
            const td4 = $("<td>");
            const td5 = $("<td>");
            const td6 = $("<td>");

            td1.text(arrayToPopulateDivsWith[i].eventName);
            td2.text(arrayToPopulateDivsWith[i].trainerName);
            td3.text(arrayToPopulateDivsWith[i].nameOfEventLocation);
            td4.text(arrayToPopulateDivsWith[i].addressOfEvent);
            td5.text(convertUnixTimeToUserReadable(arrayToPopulateDivsWith[i].eventStartTime));
            td6.text(convertUnixTimeToUserReadable(arrayToPopulateDivsWith[i].eventEndTime));

            // append td's to tr
            td1.appendTo(tr);
            td2.appendTo(tr);
            td3.appendTo(tr);
            td4.appendTo(tr);
            td5.appendTo(tr);
            td6.appendTo(tr);

            tr.appendTo("#appendTableInfoHere");
        }
    }

    // Weather information
    const updateDescriptionOfWeather =()=>{
        const userDate = $("#trainer-weather-date").val();
        const userTime = $("#start").val();
        const userDateAndTime = userDate+" "+userTime;
        const userDateAndTimeInUnix = convertStringToUnixTime(userDateAndTime);
        const weatherQueryURL = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/4d7a5f366d026dfd52097e2d1c9481f4/"+currentLocation.latitude+","+currentLocation.longitude+","+userDateAndTimeInUnix;


        $.ajax({
            url: weatherQueryURL,
            method: "GET"
        }).then(function(response) {
            // console.log(response);
            // console.log(response.currently.apparentTemperature + " " + response.currently.summary);
            $("#testWeather").html(Math.floor(response.currently.apparentTemperature) + "&deg;F " + response.currently.summary);
        });
    }

    // Click listeners
    $("#click-button").on("click", function() { // DELETE - used for testing
        // console.log("clicked");
        testPushToDatabase();
    });
    $("#proxTest").on("click", function() { // DELETE - used for testing
        // console.log(returnArrayOfAllEventsWithinProximityWindow(currentLocation,5));
    });
    $("#get-weather").on("click", function() { // DELETE - used for testing
        event.preventDefault();
        updateDescriptionOfWeather();
    });
    $("#search").on("click", function() { // proximity search
        event.preventDefault();

        displayProximateEventsToUserPage();
    });
    $("#submit").on("click", function() { // proximity search
        event.preventDefault();
        testPushToDatabase();
    });

    // page load activities
    getLocation();
    connectToDataBase();
    database.ref().on("child_added", function(snapshot) {
        const sv = snapshot.val();
        arrayOfAllEvents.push(sv);
        const theKey = snapshot.key;
        arrayOfEventKeys.push(theKey);

    }, const(errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });
});
