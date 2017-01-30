
# Alexa Skill Starter

In Alexa Skill Configuration

Interaction Model
-----------------

{
    "intents": [
        {
            "intent": "BedtimeActivityIntent",
            "slots": [
                {
                    "name": "Activity",
                    "type": "ACTIVITY_LIST"
                }
            ]
        },
        {
            "intent": "AboutIntent"
        }
    ]
}


Utterances
----------

AboutIntent who developed this skill
AboutIntent tell me about the developer
AboutIntent give me information about the developer
AboutIntent who is the author

BedtimeActivityIntent {Activity}
BedtimeActivityIntent i want to {Activity}
BedtimeActivityIntent {Activity} first please



convert audio format
--------------------

ffmpeg -y -i input.mp3 -ar 16000 -ab 48k -codec:a libmp3lame -ac 1 output.mp3



