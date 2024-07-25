const {kafka} = require("./client")

async function init(){
    const producer = kafka.producer()

    console.log("connecting producer")
    await producer.connect()
    console.log("producer connected successfully")

    await producer.send({
        topic: "rider-updates",
       messages: [
            {partition: 0, key: "location-update", value: JSON.stringify({name: "Tony Stark", location: "Hyderabad"})}
        ]
    })

    await producer.disconnect()
}

init();