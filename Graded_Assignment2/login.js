
localStorage.setItem('username','vamsi');
localStorage.setItem('password','Vamsi@123');


function validate(){
    var uname=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if (uname==localStorage.getItem('username') && password==localStorage.getItem('password')){

           
             window.location.href="resume.html";
            alert('login successfully') ;
           
}
    else{
        alert('Invalid credentials');
    }
}

function preventBack(){
    window.history.forward();
}


preventBack();
setTimeout("preventBack()",0);
window.onunload=function(){null};


