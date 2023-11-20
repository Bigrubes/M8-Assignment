//STEP 1
// let movies = ['Jurassic Park', 'Back to the Future', 'The Rock', 'Ponyo', 'Spiderman across the Spiderverse']
// console.log(movies[1])
//STEP 2
// let movies = new Array(5)
// movies[0] = 'Jurassic Park'
// movies[1] = 'Back to the Future'
// movies[2] = 'The Rock'
// movies[3] = 'Ponyo'
// movies[4] = 'Spiderman across the Spiderverse'

// console.log(movies[0])
//STEP 3
// let movies = new Array(5)
// movies[0] = 'Jurassic Park'
// movies[1] = 'Back to the Future'
// movies[2] = 'The Rock'
// movies[3] = 'Ponyo'
// movies[4] = 'Spiderman across the Spiderverse'

// let newMovies = movies.splice(2,0,'Top Gun: Maverick') 

// console.log(movies.length)
//STEP 4
// let movies = ['Jurassic Park', 'Back to the Future', 'The Rock', 'Ponyo', 'Spiderman across the Spiderverse']
// delete movies[0]
// console.log(movies)
//STEP 5
// let movies = ['Jurassic Park', 'Back to the Future', 'The Rock', 'Ponyo', 'Spiderman across the Spiderverse','Top Gun: Maverick', 'Gladiator']
// for (let movie in movies){
//     console.log(movies[movie])
// }
//STEP 6
// let movies = ['Jurassic Park', 'Back to the Future', 'The Rock', 'Ponyo', 'Spiderman across the Spiderverse','Top Gun: Maverick', 'Gladiator']
// for (let movie of movies){
//     console.log(movie)
// }
//STEP 7
// let movies = ['Jurassic Park', 'Back to the Future', 'The Rock', 'Ponyo', 'Spiderman across the Spiderverse','Top Gun: Maverick', 'Gladiator']
// for (let movie of movies.sort()){
//     console.log(movie)
// }
//STEP 8
// let movies = ['Jurassic Park', 'Back to the Future', 'The Rock', 'Ponyo', 'Spiderman across the Spiderverse','Top Gun: Maverick', 'Gladiator']
// let leastFavMovies = ['Cobweb', 'Super Mario Brothers: The Movie', 'Morbius']
// console.log(`Movies I Like: \n \n `)
// for (let movie of movies.sort()){
//     console.log(movie)
// }
// console.log(`\n `)
// console.log(`Movies I regret watching: \n \n `)
// for (let leastFavMovie of leastFavMovies.sort()){
//     console.log(leastFavMovie)
// }
//STEP 9
// let movies = ['Jurassic Park', 'Back to the Future', 'The Rock', 'Ponyo', 'Spiderman across the Spiderverse','Top Gun: Maverick', 'Gladiator']
// let leastFavMovies = ['Cobweb', 'Super Mario Brothers: The Movie', 'Morbius']
// let allMovies = movies.concat(leastFavMovies)
// console.log(allMovies.reverse())

//STEP 10
// let movies = ['Jurassic Park', 'Back to the Future', 'The Rock', 'Ponyo', 'Spiderman across the Spiderverse','Top Gun: Maverick', 'Gladiator']
// let leastFavMovies = ['Cobweb', 'Super Mario Brothers: The Movie', 'Morbius']
// let allMovies = movies.concat(leastFavMovies)
// //REVERSE ORDER OF CONCATENATED ARRAYS AND RETURN LAST ITEM
// console.log(allMovies.reverse().pop())

//STEP 11
// let movies = ['Jurassic Park', 'Back to the Future', 'The Rock', 'Ponyo', 'Spiderman across the Spiderverse','Top Gun: Maverick', 'Gladiator']
// let leastFavMovies = ['Cobweb', 'Super Mario Brothers: The Movie', 'Morbius']
// let allMovies = movies.concat(leastFavMovies)
// //REVERSE ORDER OF CONCATENATED ARRAYS AND RETURN FIRST ITEM
// console.log(allMovies.reverse().shift())

//STEP 12
// let movies = ['Jurassic Park', 'Back to the Future', 'The Rock', 'Ponyo', 'Spiderman across the Spiderverse','Top Gun: Maverick', 'Gladiator']
// let leastFavMovies = ['Cobweb', 'Super Mario Brothers: The Movie', 'Morbius']
// let allMovies = movies.concat(leastFavMovies)

// console.log(allMovies.indexOf('Cobweb'))
// console.log(allMovies.indexOf('Super Mario Brothers: The Movie'))
// console.log(allMovies.indexOf('Morbius'))

// // let newMovies = allMovies.splice(7,1,'The Dark Knight') && allMovies.splice(8,1,"Avenger's: Endgame") && allMovies.splice(9,1,'Everything Everywhere All At Once')
// let newMovies = allMovies.splice(7,8,'The Dark Knight',"Avenger's: Endgame",'Everything Everywhere All At Once') 
// console.log(allMovies)

//STEP 13
// let movies = [['Jurassic Park',1], ['Back to the Future',2], ['The Rock',3], ['Ponyo',4], ['Spiderman across the Spiderverse',5]]
// let favMovies = movies.filter((movie) =>{
// console.log(`${movie[0]}`)
// })
//STEP 14
// let employees = ['ZAK', 'JESSICA', 'MARK', 'FRED', 'SALLY']

// let showEmployee = (employees) => {
// for (let employee of employees){
//     console.log(employee)
// }
// }
// console.log(`Employees: \n \n `)
// console.log(showEmployee(employees))

//STEP 15
// let values = [58,'','abcd',true, null,false,0]
// let filterValues = values.filter((item) => {
// return typeof item === 'boolean' && item !== false || typeof item === 'number' && item !== 0 || typeof item === 'string' && item !== ''
  
// })
// console.log(filterValues)
//STEP 16
// let num = [1,2,3,4,5,6,7,8,9,10]
// function randomNum(num){
//     return num[Math.floor(Math.random()*num.length)]
// }
// console.log(randomNum(num))
//STEP 17
// let num = [1,20,3,4,50,6,7,8,9,10]
// function maxNum(num){
//     return Math.max(...num)
// }
// console.log(maxNum(num))