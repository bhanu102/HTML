var school{
    firstName="saveetha",
    middleName="school of",
    lastName="engineering",
    year="2022"
};
document.getElementById("demo").innerHTML=myFunction(school.firstName,school.middleName,school.lastName)
function myFunction(firstName,middleName,lastName){
return school.firstName+" "+school.middleName+" "+school.lastName;
}