var Alexa = require('alexa-sdk');
var Data = require("./data");
 
const skillName = "Bedtime";
 
var handlers = {
 
    "LanguageIntent": function () {
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        var speechOutput = "";
        if(this.event.request.intent.slots.Language.value && this.event.request.intent.slots.Language.value.toLowerCase() == "java") {
            speechOutput = Data.java[getRandomInt(0, 2)];
        } else if(this.event.request.intent.slots.Language.value && this.event.request.intent.slots.Language.value.toLowerCase() == "ionic framework") {
            speechOutput = Data.ionic[getRandomInt(0, 3)];
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
        speechText += "You can ask a question like, <audio src='https://s3.amazonaws.com/niltoid/audio/sound.mp3' />  tell me something interesting about Java.  ";
        var repromptText = "For instructions on what you can say, please say help me.";
        this.emit(':ask', speechText, repromptText);
    }
 
};
 
exports.handler = function (event, context) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = "amzn1.ask.skill.640b7c7f-06f0-4525-ab7a-deba656aa518";
    alexa.registerHandlers(handlers);
    alexa.execute();
};