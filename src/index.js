var Alexa = require('alexa-sdk');
//var Data = require("./data");
 
const skillName = "Bedtime";
 
var handlers = {
 
    "BedtimeActivityIntent": function () {
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        var speechOutput = "";
        if(this.event.request.intent.slots.Activity.value && this.event.request.intent.slots.Activity.value.toLowerCase() == "brush teeth") {
            speechOutput = "brush, brush, brush. <audio src='https://s3.amazonaws.com/niltoid/audio/brushteeth.mp3' />";
        } else if(this.event.request.intent.slots.Activity.value && this.event.request.intent.slots.Activity.value.toLowerCase() == "wear pajamas") {
            speechOutput = "wear pajamas time!";
        } else {
            speechOutput = "I don't have anything interesting to share regarding what you've asked."
        }
        this.emit(':tellWithCard', speechOutput, skillName, speechOutput);
    },
 
    "AboutIntent": function () {
        var speechOutput = "I don't know too much about the " + skillName + " skill.  ";
        this.emit(':tellWithCard', speechOutput, skillName, speechOutput);
    },
 
    "AMAZON.HelpIntent": function () {
        var speechOutput = "";
        speechOutput += "Here are some things you can say: ";
        speechOutput += "Tell me something interesting about Java. ";
        speechOutput += "Tell me about the skill developer. ";
        speechOutput += "You can also say stop if you're done. ";
        speechOutput += "So how can I help?";
        this.emit(':ask', speechOutput, speechOutput);
    },
 
    "AMAZON.StopIntent": function () {
        var speechOutput = "Goodbye";
        this.emit(':tell', speechOutput);
    },
 
    "AMAZON.CancelIntent": function () {
        var speechOutput = "Goodbye";
        this.emit(':tell', speechOutput);
    },
 
    "LaunchRequest": function () {
        var speechText = "";
        speechText += "Welcome to " + skillName + ", Nami and Miya.  ";
        speechText += "Its bedtime time, <audio src='https://s3.amazonaws.com/niltoid/audio/sound.mp3' />  Do you want to brush teeth, or change into pajamas first? ";
        var repromptText = "Do you want to brush teeth, or wear pajamas first? ";
        this.emit(':ask', speechText, repromptText);
    }
 
};
 
exports.handler = function (event, context) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = "bedtime";
    alexa.registerHandlers(handlers);
    alexa.execute();
};