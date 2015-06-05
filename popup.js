//substitutes a function that would get class grades for the student
var classes = [
    {
        "ID": "22726291",
        "ClassID": "148787",
        "ClassName": "Computer Mediated Communication",
        "SubjectID": "0",
        "SubjectName": null,
        "Number": "100",
        "Letter": "P",
        "Comments": "Aren't you amazing!",
        "Viewable": "1",
        "PDate": "11/18/13"
    },
    {
        "ID": "22616330",
        "ClassID": "199806",
        "ClassName": "Delete Test",
        "SubjectID": "59129",
        "SubjectName": "English",
        "Number": "85",
        "Letter": "B",
        "Comments": "You're Awesome Blossom!",
        "Viewable": "1",
        "PDate": "11/14/13"
    }
]
//substitutes a function that would get last 5 assigments in each class for the student
var assignments = [
  [
    {
        "ID": "8211412",
        "Subject": "Math",
        "Title": "Qtr 3 Assignment",
        "DueDate": "01/31/13",
        "Possible": "100",
        "Received": "90",
        "Score": "90/100",
        "Comments": ""
    },{
        "ID": "8211412",
        "Subject": "Math",
        "Title": "Qtr 3 Askhbkhent",
        "DueDate": "01/31/13",
        "Possible": "100",
        "Received": "90",
        "Score": "90/100",
        "Comments": ""
    },{
        "ID": "8211412",
        "Subject": "Math",
        "Title": "Qtr 3 5876t",
        "DueDate": "01/31/13",
        "Possible": "100",
        "Received": "90",
        "Score": "90/100",
        "Comments": ""
    },{
        "ID": "8211412",
        "Subject": "Math",
        "Title": "Qtr 3 Assignment",
        "DueDate": "01/31/13",
        "Possible": "100",
        "Received": "90",
        "Score": "90/100",
        "Comments": ""
    },{
        "ID": "8211412",
        "Subject": "Math",
        "Title": "Qtr 3 Assignment",
        "DueDate": "01/31/13",
        "Possible": "100",
        "Received": "90",
        "Score": "90/100",
        "Comments": ""
    }
  ],
  [
    {
        "ID": "8211412",
        "Subject": "Math",
        "Title": "Qtr 3 13254769808nt",
        "DueDate": "01/31/13",
        "Possible": "100",
        "Received": "90",
        "Score": "90/100",
        "Comments": ""
    },{
        "ID": "8211412",
        "Subject": "Math",
        "Title": "Qtr 3 Askhbkhent",
        "DueDate": "01/31/13",
        "Possible": "100",
        "Received": "90",
        "Score": "90/100",
        "Comments": ""
    },{
        "ID": "8211412",
        "Subject": "Math",
        "Title": "Qtr 3 5876t",
        "DueDate": "01/31/13",
        "Possible": "100",
        "Received": "90",
        "Score": "90/100",
        "Comments": ""
    },{
        "ID": "8211412",
        "Subject": "Math",
        "Title": "Qtr 3 bobt",
        "DueDate": "01/31/13",
        "Possible": "100",
        "Received": "90",
        "Score": "90/100",
        "Comments": ""
    },{
        "ID": "8211412",
        "Subject": "Math",
        "Title": "Qtr 3 steeeeeeeeevvvvvveeeeee",
        "DueDate": "01/31/13",
        "Possible": "100",
        "Received": "90",
        "Score": "90/100",
        "Comments": ""
    }
  ]
]
window.addEventListener("load", getGrades);
function getGrades() {
  for (i=0; i < classes.length; i++) {
    console.log(classes[i].ClassName);
    var row = document.createElement("tr");
    row.innerHTML = "<td>"+classes[i].ClassName+"</td><td>"+classes[i].Letter+"</td><td>"+classes[i].Comments+"</td><p>"+assignments[i][0].Title+"</p>";
    document.getElementById("classGrades").appendChild(row);
  }
}
