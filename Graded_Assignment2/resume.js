//main Template inner text

var i=0;

var searchIndex=0;
var namesarr=[];

//putting all the elements of the json applied for into the list


//Declared to get the values of the json Applied For
var arr=[];
// Fetching the data from Data.json file
async function fetchData() {

    // Fatching Data from JSON
    const response = await fetch('./Data.json');
    const resumeData = await response.json();
    const finalResumeData = resumeData;

    var l=finalResumeData.resume.length-1;
    if (i>l){
        createNoSearch();
        }

    backBtnImpl()
    ResumeGenerator(finalResumeData,i);

    return finalResumeData;
    
}

var result=await fetchData();
//putting all the elements of the json applied for into the list
for(var x=0;x<result.resume.length;x++){
    namesarr.push(result.resume[x].basics.AppliedFor);
}

function ResumeGenerator(data,i){


    //Assigning the names value
    var name=document.getElementById('Name');
    name.innerText=data.resume[i].basics.name;

    // Assigning software position

    var AppliedFor=document.getElementById('software_position');
    AppliedFor.innerText=data.resume[i].basics.AppliedFor;

    
    // Assigning phone number
    var phnumber = document.getElementById('phonenumber');
    phnumber.innerText=data.resume[i].basics.phone;

    //
    var gmail=document.getElementById('gmail');
    gmail.innerText=data.resume[0].basics.email;

    //
    var Linkedln=document.getElementById('Linkedln');
    Linkedln.innerText=data.resume[i].basics.profiles.url;


    //

    var technical_skills =document.getElementById('technical_skills');
    technical_skills.innerText=data.resume[i].skills.keywords;


    //

    var hobbies =document.getElementById('hobbies');
    hobbies.innerText=data.resume[i].interests.hobbies;


    //

    var companyname=document.getElementById('companyname');
    companyname.innerText='Company Name : ' + data.resume[i].work.CompanyName;
    

    //

    var position=document.getElementById('position');
    position.innerText='Position : ' + data.resume[i].work.Position;

    //

    var startdate =document.getElementById('startdate');
    startdate.innerText='Start Date : '+ data.resume[0].work.StartDate;

    //

    var Enddate=document.getElementById('Enddate');
    Enddate.innerText='End Date : '+ data.resume[i].work.EndDate;

    //

    var summarydesc =document.getElementById('summarydesc');
    summarydesc.innerText=data.resume[i].work.Summary;

    //

    var projectdesc=document.getElementById('projectdesc');
    projectdesc.innerText=data.resume[i].projects.name +" :" +data.resume[i].projects.description;

    var education =document.getElementById('educationdesc');
    education.innerText='UG :'+"," +'Institute :' + data.resume[i].education.UG.institute +"," +'Course :'+data.resume[0].education.UG.course+
    ","+ 'start Date:'+data.resume[0].education.UG.StartDate +"," +'End Date  :'+data.resume[0].education.UG.EndDate+
    "\n \n" +'Senior Secondary  :'+" "+"Institute :"+ data.resume[i].education.SeniorSecondary.institute+","+"CGPA : "+ data.resume[i].education.SeniorSecondary.cgpa+
    "\n \n"+'High School ' +" ,"+data.resume[i].education.HighSchool.institute+","+"CGPA : "+ data.resume[i].education.HighSchool.cgpa;


    //

    var achievements = document.getElementById('achievmentdesc');
    achievements.innerText=data.resume[i].achievements.Summary;



}


//On clicking next button, it should fetch the next persons resume

var nextBtn =document.getElementById('nextBtn');

nextBtn.addEventListener('click',nextFun);

function nextFun(e){
    console.log("insdie next Fun",arr.length);
    if (arr.length==0){
        i=i+1;
        fetchData();
    }
    else{
        console.log("The array length is not zero and the value of the i is " ,i);
        console.log("The array is ",arr);
            searchIndex=searchIndex+1;
            console.log("the search index value is ",searchIndex);
            i=arr[searchIndex];
            fetchData();

            if (searchIndex==arr.length){
                alert('no more resumes found !!')
            }
        }
        
       

    }
    


function createNoSearch(){
        var maintempl=document.getElementsByClassName('resumecontainer');
        /*getElementsByClassName('resumecontainer')[0].innerText='';
        const box = document.createElement("div");
        box.id = "box";
        document.body.getElementsByClassName('resumecontainer')[0].appendChild(box);
        document.getElementById('box').innerText='No Resumes Found 😐' ;
        document.getElementById('box').style.textAlign='center';
        document.getElementById('box').style.fontSize='x-large';
        document.getElementById('box').style.top= "100px";
        document.getElementById('box').style.left= "350px";
        document.getElementById('box').style.width="600px";
        document.getElementById('box').style.height="200px";
        document.getElementById('box').style.position= "absolute";*/
        alert('No More Resumes Found !!!');

}

function backBtnImpl(){
    var backbtn=document.getElementById('back');
    if (i<=0){
       
        backbtn.style.visibility = 'hidden';

    }
    else{
        backbtn.style.visibility = 'visible';
        
    }
   
}

var backbtn=document.getElementById('back');

//on click of back button

backbtn.addEventListener('click',backFun);

function backFun(){

    if (arr.length==0){
        i=i-1;
        fetchData();
    }
    else{
        console.log("The array length is not zero and the value of the i is " ,i);
        console.log("The array is ",arr);
            searchIndex=searchIndex-1;
            console.log("the search index value when clicking on back button  is ",searchIndex);
            i=arr[searchIndex];
            fetchData();

            if (searchIndex<0){
                alert('No more resumes found')
            }
        }
        

}

var resumecontainer=document.getElementById('resumecont');
var img = document.createElement('img');
        img.id="img";
        img.src='noresult.jpg';
        resumecontainer.appendChild(img);
        img.style.visibility='hidden';

var para=document.createElement('p');
para.textContent='Sorry 😑. No results Found';
resumecontainer.appendChild(para);
para.style.fontSize="50px";
para.style.visibility='hidden';
para.style.textAlign='center';

//Search Bar implementation

var searchBar=document.getElementById('searchBar');
searchBar.addEventListener('input',(e)=>{
    var search=e.target.value;
    

    
    if (search!==''){

    for(var x=0;x<result.resume.length;x++){
        var resumefind=result.resume[x].basics.AppliedFor;
        console.log("from the json ",resumefind)
        if (search.toLowerCase()==resumefind.toLowerCase()){
        console.log("the value of the search is ",search.toLowerCase());
        console.log("the value of hte result is ",resumefind.toLowerCase());
        arr.push(x);
        searchIndex=0;
        i=arr[searchIndex];
        console.log("the value of the array when matched ",arr);
        console.log("the page of resume is ",i)
        fetchData();
        resumecontainer.style.visibility='visible';
        
}
       
    
       
    else {
        if (arr.length==0 && search!==resumefind){
            resumecontainer.style.visibility='hidden';
            img.style.visibility='visible';
            img.style.width="30%";
            img.style.position="absolute";
            img.style.top="12%";
            img.style.left="35%";
            para.style.visibility='visible';
        }
        else{
            resumecontainer.style.visibility='visible';
            img.style.visibility='hidden';
            para.style.visibility='hidden';
        }
        
       
       
        fetchData()
        
       }
    }
}
else{
    img.style.visibility='hidden';
    para.style.visibility='hidden';
    resumecontainer.style.visibility='visible';
    arr=[];
    console.log("the value of array when the array is empty ", arr);
    i
}
    
});







//default function 
await fetchData();











