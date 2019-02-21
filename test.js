/**
 * Created by jaychow on 6/6/17.
 */
// "use strict"; // for let
// var y = () => {console.log("hi")};
//
// y();
//
// setTimeout(() => {console.log("5s...")}, 5000);
//
//
// // JSON object
// var animal = {
//     species: "dog",
//     weight: 23,
//     sound: "woof"
// };
// // destructing sucks out local fields,
// var {species} = animal;
// console.log(species);
//
//
//
//

var myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
        return this;
    }
};

console.log(myObject);