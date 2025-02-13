function addData(){
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var enroll = document.getElementById("enroll");

    // alert(username.value+"\n"+email.value+"\n"+enroll.value);
    var obj = {
        username : username.value,
        email : email.value,
        enroll : enroll.value
    }
    var receivedData = JSON.parse(localStorage.getItem("data"));
    var newData = [...receivedData||[],obj];
    localStorage.setItem("data",JSON.stringify(newData));
}

function showData(){
    var data = JSON.parse(localStorage.getItem("data"));
    var table = '<table border="1" cellspacing="0" cellpadding="5"><tr><th>Username</th><th>Email</th><th>Enrollment Number</th></tr>'
    for(i=0;i<data.length;i++){
        table+='<tr><td>'+data[i].username+'</td><td>'+data[i].email+'</td><td>'+data[i].enroll+'</td></tr>';
    }
    table+='</table>';
    document.getElementById('show').innerHTML=table;
}
showData();