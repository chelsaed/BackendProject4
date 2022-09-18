require('./connection')
const Athlete = require('./models/athlete')

const athleteData = 
[
    {

    name: "John Doe",
    email:"testathlete@email.com",
    height: "5'10",     
    weight: "180", 
    image:  "https://assets.isu.pub/document-structure/210625151000-f8f567c36435f858111bc1e5eedc6dcd/v1/469872206c460d1b7f1f5f373821c371.jpeg",
    gradDate: "2023", 
    currentHS: "Smokey Hill High School",   
    sport:  "Football", 
},
{
    name: "Jane Doe",
    email:"email@email.com",
    height: "6'10",
    weight: "280",
    image:  "https://img.freepik.com/free-vector/athlete-doing-american-football-white_1308-41302.jpg?w=2000",
    gradDate: "2024",
    currentHS: "Rangeview High School",
    sport:  "Football",
    
}

]

Athlete.deleteMany({})
    .then(() => {
        return Athlete.insertMany(athleteSeed)
    })
        .then((athletes) => {
            console.log(athletes)
        })
        .catch(err => {
            console.log("Error in seeding data !!: ")
            console.log(err)
        })
        .finally(() => {
            process.exit()
        })

