let temperature:number =25.5;
console.log(`Temperature of a city in : ${temperature} °C`);

// 2. Whether a customer has placed an order (Boolean)
let isOrderPlaced:boolean=true;
console.log(`Has the customer placed an order?: ${isOrderPlaced}`);

//3.Person's phone number: "123-456-7890"
let mobileNumber:string= "123-456-7890"
console.log(`Person's phone number: ${mobileNumber}`);

//4. Amount of money in a customer's bank account: 1000.50
let accAmount:number = 1000.50;
console.log(`Amount of money in a customer's bank account: ${accAmount}`);

//5. Person's email address: "john.doe@example.com"
let email:string ="john.doe@example.com";
console.log(`Person's email address: ${email}`);

//6. Coordinates of a location (latitude, longitude): 37.7749, -122.4194
interface cordinate {     
    latitude: number ,     
    longitude: number,     
    }  
let locationData:cordinate = {   
    latitude: 37.7749,    
    longitude: -122.4194, }; 
    console.log("Coordinates of a location ", locationData.latitude,locationData.longitude); 

//7.Person's marital status: true or false
let maritalstatus1 : boolean = true;
console.log(`Person's marital status: true or false: ${maritalstatus1}`);
let maritalstatus2 : boolean = false;
console.log(`Person's marital status: true or false: ${maritalstatus2}`);

//8. Person's occupation: "Software Engineer"
let occupation : string = '"Software Engineer"';
console.log(`Person's occupation: ${occupation}`);

//9. Person's favourite colour: "Blue"
let color : string = '"Blue"';
console.log(`Person's favourite colour:: ${color}`);

//10.Current year: 2023
let currentDate = new Date();
console.log(currentDate);
let currentYear = currentDate.getFullYear();
console.log(currentYear);

//11.Number of followers on a social media platform: 1,000,000
let followers : string = '1,000,000';
console.log(`Number of followers on a social media platform: ${followers}`);

//12.Rating of a movie: 7.5
let rating : number = 7.5;
console.log(`Rating of a movie: ${rating}`);

//13.Person's blood type: 'A'
let bloodtype : string = 'A';
console.log(`Person's blood type : ${bloodtype}`);

//14.Title of a book: "To Kill a Mockingbird"
let booktitle : string = '"To Kill a Mockingbird"';
console.log(`Title of a book: ${booktitle}`);

//15.Number of employees in a company: 500
let employeestrength : number = 500;
console.log(`Number of employees in a company: ${employeestrength}`);

//16.Time of an event: 2:30 PM
let eventtime : string = '2:30 PM';
console.log(`Time of an event: ${eventtime}`);


//17.Name of a country: "United States"
let countryname : string = "United States";
console.log(`Name of a country: ${countryname}`);

//18.Person's eye color: "Brown"
let eyecolor : string = "Brown";
console.log(`Person's eye color : ${eyecolor}`);

//19.Person's birthplace: "New York City"
let birthplace : string = "New York City";
console.log(`Person's birthplace: ${birthplace}`);

//20.Distance between two cities: 200.5
let distance : number = 200.5;
console.log(`Distance between two cities: ${distance}`);