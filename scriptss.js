var users = [{
    name:"ramon",
    lastname:"perez",
    age:50,
    city:"rosario",
},
{
    name:"ernesto",
    lastname:"javier",
    age:56,
    city:"Rosario",
},
{
    name:"pedro",
    lastname:"aznar",
    age:42,
    city:"casilda",
}]

for (var i = 0; i < users.length; i++) {
    console.log(users[i].lastname + " " + users[i].name + " tiene " + users[i].children.length + " hijos");
}
function sumar5(val) {
    return val + 5;
}
console.log(sumar5(20));

function sumar2(vala, valb) {
    return vala + valb;
}
console.log(sumar2(20, 80))

function nombres(vala, valb) {
    return vala + ", " + valb;
}
console.log(nombres("axel", "galindo"))

function assamble(user) {
    return user.lastname + ", " + user.name + " vive en " + user.city;
}

function listUserByAgeLimit(agelimit) {

    for (var i = 0; i < users.length; i++) {
        if (users[i].age < agelimit) {
            console.log(assamble(users[i]))
        }
    }
}

var listUsers = {
    assamble: function (user) {
        return '<tr>'
    +'<td>'+user.Name+'</td>'
    +'<td>'+user.email+'</td>'
    +'<td>'+user.salary+'</td>'
    +'<td>'+user.country+'</td>'
    +'<td>'+user.phone+'</td>'
    +'<td>'+user.age+'</td>'
+'</tr>';
    },
    listByAgeLimit: function (users, age) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].age < age) {
                console.log(listUsers.assamble(users[i]))
            }
        }
    },
    users: [],
    setUsers: function (users) {
        listUsers.users = users;
    },

    listAll: function () {
        for (var i = 0; listUsers.users.length > i; i++) {
            $("#userstable tbody").append(listUsers.assamble(listUsers.users[i]));
        }
    }
}

function toggleClass(){
        if($("h1").hasClass("active")){
            $("h1").removeClass("active")
            $("h1").addClass("disable");
        }else{
            $("h1").removeClass("disable")
            $("h1").addClass("active")
                    
        }
}


function assamble(user) {
    return
 


}