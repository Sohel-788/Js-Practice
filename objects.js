// Objects in js
var students = { Name: "SOHEL", id: 121, phone: 017400 };
var students2 = { Name: "Mahmud", id: 1423, phone: 0174454 };
console.log(students);
console.log(students2);
//specific object element
//process-1
var phone = students['phone'];
//process-2
var phone = students.phone;
// process-3
var phoneNo = 'phone';
var phone = students[phoneNo]
console.log(phone);
//Changing element in objects
students2.phone = 2323;
students2['phone'] = 3434;
console.log(students2)
    // adding element in object
students2.email = "mahmud3724@gmail.com";
console.log(students2)