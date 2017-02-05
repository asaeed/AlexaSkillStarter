
# Alexa Skill Starter

In Alexa Skill Configuration

Interaction Model
-----------------

```
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
        },
        {
            "intent": "AMAZON.HelpIntent"
        },
        {
            "intent": "AMAZON.StopIntent"
        },
        {
            "intent": "AMAZON.CancelIntent"
        }
    ]
}
```


Utterances
----------

```
AboutIntent who developed this skill
AboutIntent tell me about the developer
AboutIntent give me information about the developer
AboutIntent who is the author

BedtimeActivityIntent {Activity}
BedtimeActivityIntent i want to {Activity}
BedtimeActivityIntent {Activity} first please
```


convert audio format
--------------------

ffmpeg -y -i input.mp3 -ar 16000 -ab 48k -codec:a libmp3lame -ac 1 output.mp3



Alexa App

Interaction Model
1. intents & slots
2. sample utterances


Backend App

1. AWS Lambda (Alexa Skill Kit trigger)


things not supported

- push notifications
- voice recognition/differentiation


things to test

- saving speech transcription and playing back stored text
- state persistance - in lambda vs in database
- multi-user potential
  - real-time - doable when both users present simultaneously
  - turn-based - possible if no push notifications

- can you play audio with alexa talking over it


