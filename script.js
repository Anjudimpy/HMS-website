//     /********EDITABLE PARAGRAPH****** */

function saveContent() {
  var e = [], e1 = [];
  document.querySelectorAll(".editablePara").forEach(function(p) { e.push(p.innerHTML); });
  document.querySelectorAll(".editablePara1").forEach(function(p1) { e1.push(p1.innerHTML); });
  localStorage.setItem("editedContent", JSON.stringify(e));
  localStorage.setItem("editedContent1", JSON.stringify(e1));
}

var eC = localStorage.getItem("editedContent");
var eC1 = localStorage.getItem("editedContent1");

if (eC) {
  var eCA = JSON.parse(eC);
  document.querySelectorAll(".editablePara").forEach(function(p, i) { p.innerHTML = eCA[i]; });
}

if (eC1) {
  var eCA1 = JSON.parse(eC1);
  document.querySelectorAll(".editablePara1").forEach(function(p1, i) { p1.innerHTML = eCA1[i]; });
}

let data_edit_login = document.querySelector("#data_edit_login");
var eP = document.querySelectorAll(".editablePara");
var eP1 = document.querySelectorAll(".editablePara1");

data_edit_login.addEventListener("click", () => {
  eP.forEach(function(p) { p.contentEditable = "true"; });
  eP1.forEach(function(p1) { p1.contentEditable = "true"; });
  swal("Now You Can Edit");
});

var eSb = document.querySelector(".edit_save_btn");
eSb.addEventListener("click", () => { saveContent(); 
  swal("", "Successfully saved your changes!", "success");  
});

/******* */
var EditPermissionBtn1=document.querySelector("#EditPermissionBtn1");
EditPermissionBtn1.addEventListener("click",()=>{
  edit_save_btn.style.display = "block";
  data_edit_login.style.display="block";
  MainPage.style.display="block";
  loginIcon.style.display="none";
})

/*************************************after heading*************************************** */
const imageUrls = [
  'img/img2.jpg',
  'img/img6.jpg',
  'img/img7.jpg',
  'img/img8.jpg',
  'img/img4.jpg',
  'img/img5.jpg',
  'img/pic1.WEBP',
  'img/pic2.jpg',
];

function changeBackground() {
  const container = document.getElementById('bg-container');
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  const imageUrl = imageUrls[randomIndex];
  container.style.backgroundImage = `url(${imageUrl})`;
}
setInterval(changeBackground, 3000);


document.addEventListener("DOMContentLoaded", function() {
  const nameElement = document.getElementById("name");

  function toggleVisibility() {
      const isVisible = getComputedStyle(nameElement).opacity === "1";
      nameElement.style.opacity = isVisible ? "0" : "1";
  }

  setInterval(toggleVisibility, 2000); 
});


/************************************Dashboard********************************* */
let Dashboard=document.getElementById("dashboardId");
let MainPage=document.getElementById("mainPage");
let DashboardBtn=document.getElementById("dashboard_btn")

DashboardBtn.addEventListener("click",()=>{
  Dashboard.style.display="block"
  MainPage.style.display="none";
  loginIcon.style.display="none";
  RegistrationForm.style.display="none";
  EducationDisplayPage.style.display="none";
  EconomicalDevelopment.style.display=" none";
  AdmissionForm.style.display="none";
  HostelDetails.style.display="none";
  SCHOOLSHIP.style.display="none";
  kallar_details.style.display="none";
  Cast_list.style.display="none";


})
/***************************home************************************ */

let HomeBtn=document.getElementById("home_btn")
HomeBtn.addEventListener("click",()=>{
  MainPage.style.display="block";
  RegistrationForm.style.display="none";
  Dashboard.style.display="none";
  loginIcon.style.display="none";
  EducationDisplayPage.style.display="none";
  EconomicalDevelopment.style.display=" none";
  AdmissionForm.style.display="none";
  HostelDetails.style.display="none";
  SCHOOLSHIP.style.display="none";
  kallar_details.style.display="none";
  Cast_list.style.display="none";


})
/*****************************************login page************************************************** */

let loginBtn=document.getElementById("login_btn")
let loginIcon=document.getElementById("login_icon")

loginBtn.addEventListener("click",()=>{
    loginIcon.style.display="block";
    MainPage.style.display="none";
    loginForm.style.display="none";
    AdminLoginForm.style.display="none";
    RegistrationForm.style.display="none";
    Dashboard.style.display="none";
    EducationDisplayPage.style.display="none";
    EconomicalDevelopment.style.display=" none";
    AdmissionForm.style.display="none";
    HostelDetails.style.display="none";
    SCHOOLSHIP.style.display="none";
    kallar_details.style.display="none";
    Cast_list.style.display="none";

})

let studentIcon=document.getElementById("std_icon")
let loginForm=document.getElementById("login_form")
studentIcon.addEventListener("click",()=>{
    loginForm.style.display="block";
    AdminLoginForm.style.display="none"; loginForm.style.display="block";
    AdminLoginForm.style.display="none";
    OfficerLoginPage.style.display="none"; 
    Commissioner_login_form.style.display="none";  

})


let AdminIcon=document.getElementById("admin_icon")
let AdminLoginForm=document.getElementById("Admin_login_form")
let OfficerIcon=document.getElementById("officer_icon")
let OfficerLoginPage=document.getElementById("Officer_login_form")
let Commissioner_icon=document.getElementById("Commissioner_icon");
let Commissioner_login_form=document.getElementById("Commissioner_login_form");

AdminIcon.addEventListener("click",()=>{
  AdminLoginForm.style.display="block"; 
  OfficerLoginPage.style.display="none";  
  loginForm.style.display="none";
  Commissioner_login_form.style.display="none"; 
})
OfficerIcon.addEventListener("click",()=>{
  OfficerLoginPage.style.display="block"; 
  loginForm.style.display="none";
  AdminLoginForm.style.display="none";
  Commissioner_login_form.style.display="none"; 

})

Commissioner_icon.addEventListener("click",()=>{
  OfficerLoginPage.style.display="none"; 
  loginForm.style.display="none";
  AdminLoginForm.style.display="none";
  Commissioner_login_form.style.display="block"; 

})
/***********************************ragistration page**************************************** */

let RegistrationForm=document.getElementById("registration_form_id")
let RegisterBtn=document.getElementById("register")
RegisterBtn.addEventListener("click",()=>{
RegistrationForm.style.display="grid";
MainPage.style.display="none";
loginIcon.style.display="none";
Dashboard.style.display="none";
EducationDisplayPage.style.display="none";
EconomicalDevelopment.style.display=" none";
AdmissionForm.style.display="none";
HostelDetails.style.display="none";
SCHOOLSHIP.style.display="none";
kallar_details.style.display="none";
Cast_list.style.display="none";

})
/***************************Education development***************************** */
let EducationBtn=document.getElementById("edu_btn_id");
let EducationDisplayPage=document.getElementById("education_id");

EducationBtn.addEventListener("click",()=>{
  EducationDisplayPage.style.display="block";
  MainPage.style.display="none";
  loginIcon.style.display="none";

})
/***************************Economical development Schemes */
let EconomicalDevelopment=document.getElementById("eco_dev_sch_Id")
let EconomicalDevelopment_btn=document.getElementById("eco_dev_sch_btn")
EconomicalDevelopment_btn.addEventListener("click",()=>{
  EconomicalDevelopment.style.display=" block";
  MainPage.style.display="none";
  loginIcon.style.display="none";

})

let Iron_bt=document.getElementById("iron")
let Iron_details=document.getElementById("ïron_details")
Iron_bt.addEventListener("click",()=>{
  Iron_details.style.display="block";
})


/************************admission form******************************* */
let AdmissionForm=document.getElementById("admission_form_id");
let AdmissionFormBtn=document.getElementById("std_login_btn");
AdmissionFormBtn.addEventListener("click",()=>{
    AdmissionForm.style.display="block";
   loginIcon.style.display="none";
})
           
let ProfilePic=document.getElementById("profile-pic");
let inputFile=document.getElementById("input-file");

inputFile.onchange= function(){
  ProfilePic.src=URL.createObjectURL(inputFile.files[0]);
}
/**********************************hostel details************************************************/
let HostelDetails=document.getElementById("hostels_details_id");
let HostelBtn=document.getElementById("hostel");
let HostelCloseBtn=document.getElementById("hostel_clsoe_btn");
HostelBtn.addEventListener("click",()=>{
  EducationDisplayPage.style.display="none";
  HostelDetails.style.display="block";
  SCHOOLSHIP.style.display="none";
  kallar_details.style.display="none";
})

HostelCloseBtn.addEventListener("click",()=>{
  EducationDisplayPage.style.display="block";
  HostelDetails.style.display="none";
})
/*****************************SCHOOLSHIP SCHEMES DEtails************ */
let SCHOOLSHIP=document.getElementById("scholarship_scheme_id");
let scholarshipBtn=document.getElementById("scholarship_btn");
let scholorshipClsoeBtn=document.getElementById("scholorship_clsoe_btn");
scholarshipBtn.addEventListener("click",()=>{
  EducationDisplayPage.style.display="none";
  SCHOOLSHIP.style.display="block";
})

scholorshipClsoeBtn.addEventListener("click",()=>{
  EducationDisplayPage.style.display="block";
  SCHOOLSHIP.style.display="none";
})


const displayImage = () => {
  const imageElement = document.getElementById('myImage');
  imageElement.src = 'img/girl.png'; 
  
};
setInterval(displayImage, 2000);

/******************* */
let ScholorshipDetail=document.getElementById("scholorship_link_details_id");
let PermatricLink= document.getElementById("pre-matric");

PermatricLink.addEventListener("click",()=>{
  ScholorshipDetail.style.display="block";
  ScholorshipDetail2.style.display="none";
  ScholorshipDetail3.style.display="none";

})

let ScholorshipDetail2=document.getElementById("scholorship_link_details_id2");
let PostmatricSchool= document.getElementById("post-matric-school");

PostmatricSchool.addEventListener("click",()=>{
  ScholorshipDetail2.style.display="block";
  ScholorshipDetail.style.display="none";
  ScholorshipDetail3.style.display="none";
})

let ScholorshipDetail3=document.getElementById("scholorship_link_details_id3");
let PostmatricCollege= document.getElementById("post_matric_College");
PostmatricCollege.addEventListener("click",()=>{
  ScholorshipDetail3.style.display="block";
  ScholorshipDetail2.style.display="none";
  ScholorshipDetail.style.display="none";
})
/*************boarding grants************* */
let boardingGrantsBtn= document.getElementById("bording_grant_btn");
let boardingGrantsDetails= document.getElementById("bording_grant_details");
let bording_grant_clsBtn= document.getElementById("bording_grant_clsBtn")
boardingGrantsBtn.addEventListener("click",()=>{
  boardingGrantsDetails.style.display="block";
  rural_scheme_container.style.display="none";
  FreeCycleScheme.style.display="none";

})
bording_grant_clsBtn.addEventListener("click",()=>{
  boardingGrantsDetails.style.display="none";
})

/*************rural scheme************* */
let rural_scheme_btn= document.getElementById("rural_scheme_btn");
let rural_scheme_container= document.getElementById("girlsScheme");
let girlsScheme_clsBtn=document.getElementById("girlsScheme_clsBtn");

rural_scheme_btn.addEventListener("click",()=>{
  rural_scheme_container.style.display="block";
  boardingGrantsDetails.style.display="none";
  FreeCycleScheme.style.display="none";

})
girlsScheme_clsBtn.addEventListener("click",()=>{
  rural_scheme_container.style.display="none"; rural_scheme_container.style.display="none";
})

/*****************Free CYCLE dISTRIBUTION**** */
let distribution_freeCycle_btn= document.getElementById("distribution_freeCycle_btn");
let FreeCycleScheme= document.getElementById("FreeCycleScheme");
let FreeCycle_clsBtn=document.getElementById("FreeCycle_clsBtn");

  distribution_freeCycle_btn .addEventListener("click",()=>{
    FreeCycleScheme.style.display="block";
  boardingGrantsDetails.style.display="none";
  rural_scheme_container.style.display="none";

})
FreeCycle_clsBtn.addEventListener("click",()=>{
  FreeCycleScheme.style.display="none";
})
/**********************kallar**************** */
let kallar_btn=document.querySelector("#Kallar_btn");
let kallar_details=document.querySelector("#Kallar_details");
let kallar_clsoe_btn=document.getElementById("kallar_clsoe_btn");
kallar_details.style.display="none";
kallar_btn.addEventListener("click",()=>{
  kallar_details.style.display="block";
  EducationDisplayPage.style.display="none";

})
kallar_clsoe_btn.addEventListener("click",()=>{
  kallar_details.style.display="none";
  EducationDisplayPage.style.display="block";

})

/*****auto fill age***** */
function calculateAge() {
  const dobInput = document.getElementById("DateOfBirth");
  const ageInput = document.getElementById("age");

  if (dobInput.value) {
      const dob = new Date(dobInput.value);
      const today = new Date();
      const age = today.getFullYear() - dob.getFullYear();

      // Check if the birthday has already occurred this year
      if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
          age--;
      }

      ageInput.value = age;
  } else {
      ageInput.value = '';
  }
}


/******************************warden page*********** */

let WardenPage=document.getElementById("warden_id");
let WardenLoginBtn=document.getElementById("warden_login_btn");
WardenLoginBtn.addEventListener("click",()=>{

  WardenPage.style.display="block";
   loginIcon.style.display="none";
})
var  Waitingstudent=document.getElementById("Waiting-student");
var  formDataTable=document.querySelector(".formDataTable");
Waitingstudent.addEventListener("click",()=>{
  formDataTable.style.display="block";
  Waitingstudent.style.backgroundColor="white";
  Waitingstudent.style.color="red";
})

/***form */
var StudentData=[];
var StudentName= document.querySelector("#username");
var StudentGender=document.querySelector("#stuGender");
var submitBtn=document.querySelector("#submit");
var DateOfBirth=document.querySelector("#DateOfBirth");
var Age=document.querySelector("#age");
var category=document.querySelector("#category");
var Question=document.querySelector("#qus");
var Answer=document.querySelector("#ans");
var caste= document.querySelector("#caste");
var parentName= document.querySelector("#parent");
var AddressVillage=document.querySelector("#Village");
var area=document.querySelector("#area");
var district= document.querySelector("#district");
var income= document.querySelector("#income");
var insti_name=document.querySelector("#insti_name");
var course1=document.querySelector("#course1");
var course2=document.querySelector("#course2");
var course3=document.querySelector("#course3");
var course4=document.querySelector("#course4");
var course5=document.querySelector("#course5");
var course6=document.querySelector("#course6");
var course7=document.querySelector("#course7");
var Marks1=document.querySelector("#Marks1");
var Marks2=document.querySelector("#Marks2");
var Marks3=document.querySelector("#Marks3");
var Marks4=document.querySelector("#Marks4");
var Marks5=document.querySelector("#Marks5");
var Marks6=document.querySelector("#Marks6");
var Marks7=document.querySelector("#Marks7");

var qus2=document.querySelector("#qus2");
var enrolledAddress=document.querySelector("#enrolledAddress");
var admissionDate=document.querySelector("#admissionDate");
var courseName= document.querySelector("#courseName");
var duration=document.querySelector("#duration");

var registrationForm = document.getElementById("addmission_form_container");
var imgUrl;
var castDocument;
var imgCaste;
var imgIncome;
var incomeDocument;
var imgTransfer;
var transferDocument;
var imgMarksheet;
var MarksheetDocument;
var imgCharacter;
var characterDocument;

submitBtn.onclick=function(e){
  e.preventDefault();
  applicationFormData();
  getDataFormLocal();
  registrationForm.reset('');
}
if(localStorage.getItem("studentData")!=null){
  
  StudentData=JSON.parse(localStorage.getItem("studentData"));
}
function applicationFormData(){
StudentData.push({
  StudentName: StudentName.value,
  StudentGender: StudentGender.value,
  DateOfBirth: DateOfBirth.value,
  Age: Age.value,
  category: category.value,
  Question: Question.value,
  Answer:  Answer.value,
  caste: caste.value,
  parentName: parentName.value,
  AddressVillage: AddressVillage.value,
  area: area.value,
  district: district.value,
  income:  income.value,
  insti_name: insti_name.value,
  course1: course1.value,
  course2: course2.value,
  course3: course3.value,
  course4: course4.value,
  course5: course5.value,
  course6: course6.value,
  course7: course7.value,
  Marks1: Marks1.value,
  Marks2: Marks2.value,
  Marks3: Marks3.value,
  Marks4: Marks4.value,
  Marks5: Marks5.value,
  Marks6: Marks6.value,
  Marks7: Marks7.value,
  qus2: qus2.value,
  enrolledAddress: enrolledAddress.value,
  admissionDate: admissionDate.value,
  courseName: courseName.value,
  duration: duration.value,
  Profile:imgUrl,
  castDocument:imgCaste,
  incomeDocument:imgIncome,
  transferDocument: imgTransfer,
  MarksheetDocument: imgMarksheet,
  characterDocument:imgCharacter
});
var userString =JSON.stringify(StudentData);
localStorage.setItem("studentData",userString);
swal("Good job!", "Application Submitted Successfully!", "success");
}
// returning data on page

var tableData= document.querySelector("#stdataTable")
const getDataFormLocal = () =>{
  tableData.innerHTML="";
  StudentData.forEach((data,index)=>{
    tableData.innerHTML +=`
    <tr index='${index}'></br>
    <td></br>${index+1}</br>
    <ol type="i">
    <div class="stdProfile"><div>
    <li>Applicant's Name:<label class="hed"> ${data.StudentName}</label></li></br>
   <li> Gender: <label class="hed"> ${data.StudentGender}</label></li></br>
   <li>Date of birth:<label class="hed"> ${data.DateOfBirth}</label></li></br>
   <li> Age on the date of application: <label class="hed">${data.Age}</label></li></br></div>
   <div class="stdProfilePic">
   <img src="${data.Profile}" width="100" height="100">
   </div></div>
   <li>Category: <label class="hed">${data.category}</label></li></br>
   <li>Caste:<label class="hed"> ${data.caste}</label></li></br>
    <li>Whether there is any educational institution with in a distance of five 
    Kilometers from the applicant's residence ? <label class="hed"> ${data.Question}</label></li></br>
   <li> If so, Why he has not joined  the educational institution ? <label class="hed"> ${data.Answer}</label></li></br>
    <li>Name of parent/guardian: <label class="hed">${data.parentName}</label></li></br>
<li>Full Address </br>
    Village: <label class="hed"> ${data.AddressVillage}</label></br>
    Area:<label class="hed"> ${data.area}</label></br>
    District:<label class="hed">${data.district}</label>
</li></br>
<li>Annual income of parent/guardian: <label class="hed">${data.income}</label> </li></br>
<li>Name of class attended last year and Name of the educational institution:
<label class="hed"> ${data.insti_name}</label></li></br>
<li>
Marks obtained by the students in the subject category in the last year final examination:
<div class="CourseMarksData">
<div class="courseName">
Courese
</br><label class="hed">${data.course1}</label>
</br><label class="hed">${data.course2}</label>
</br><label class="hed">${data.course3}</label>
</br><label class="hed">${data.course4}</label>
</br><label class="hed">${data.course5}</label>
</br><label class="hed">${data.course6}</label>
</br><label class="hed">${data.course7}</label>
</div>
<div class="Course_marks">
Marks
</br><label class="hed">${data.Marks1}</label>
</br><label class="hed">${data.Marks2}</label>
</br><label class="hed">${data.Marks3}</label>
</br><label class="hed">${data.Marks4}</label>
</br><label class="hed">${data.Marks5}</label>
</br><label class="hed">${data.Marks6}</label>
</br><label class="hed">${data.Marks7}</label>
</div>
</div>
</li></br>
<li>Where did you stay last year ?<label class="hed"> ${data.qus2}</label></li></br>
<li>Full address of the educational institution enrolled in this academic year: 
<label class="hed">${data.enrolledAddress}</label></li></br>
<li>Date of admission of the student to the educational institution: <label class="hed">
${data.admissionDate}</label></li></br>
<li>Description of the course:<label class="hed"> ${data.courseName}</label></li></br>
<li>Duration of study: <label class="hed">${data.duration}</label></li></br>
<li> Caste Certificate: </br></br><img src="${data.castDocument}" width="700" height="700"></li></br>
<li> Annual Income Certificate: </br></br><img src="${data.incomeDocument}" width="700" height="700"></li></br>
<li>School Transfer Certificate: </br></br><img src="${data.transferDocument}" width="700" height="700"></li></br>
<li>Marksheet: </br></br><img src="${data.MarksheetDocument}" width="700" height="700"></li></br>
<li>Character Certificate: </br></br><img src="${data.characterDocument}" width="700" height="700"></li></br>
<button class="del-btn">Delete</button> <button class="accept-btn">Accept</button>
    </ol></td>
   
    </tr>
    `;
  });
  /*****start delete coding****** */
  var a;
var allDelBtn=document.querySelectorAll(".del-btn");
for(a=0; a<allDelBtn.length; a++){
  allDelBtn[a].onclick=function(){
    var tr=this.parentElement.parentElement;
    var id= tr.getAttribute("index");

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        StudentData.splice(id,1);
        localStorage.setItem("studentData",JSON.stringify(StudentData));
        tr.remove();
        swal("Poof! Your data has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your data is safe!");
      }
    });    
   
  }
}

/*******accept form******* */
var i;
var AcceptBtn=document.querySelectorAll(".accept-btn");
var selected_student=document.querySelector(".selected_student");
for(i=0; i<AcceptBtn.length; i++){
  AcceptBtn[i].onclick=function(){
    selected_student.style.display="block";
  }
}

 
}
getDataFormLocal();

/*****image and document upload****/

var profilePic=document.getElementById("profile-pic");
var inputpic=document.getElementById("input-file");

inputpic.onchange = function(){
  var fReader= new FileReader();
  fReader.onload=function(e){
    imgUrl=e.target.result;
    profilePic.src=imgUrl;
    console.log(imgUrl);
  }
  fReader.readAsDataURL(inputpic.files[0]);
}


/*******cast document**** */
var caste_Certificate=document.getElementById("caste_Certificate");
caste_Certificate.onchange = function(){
  var fReader= new FileReader();
  fReader.onload=function(e){
   imgCaste=e.target.result;
    caste_Certificate.src=imgCaste;
    console.log(imgCaste);
  }
  fReader.readAsDataURL(caste_Certificate.files[0]);
}
/***income */
var Income_certificate=document.getElementById("Income_certificate");
Income_certificate.onchange = function(){
  var fReader= new FileReader();
  fReader.onload=function(e){
   imgIncome=e.target.result;
   Income_certificate.src=imgIncome;
    console.log(imgIncome);
  }
  fReader.readAsDataURL(Income_certificate.files[0]);
}
/*****transfer certificate */
var Transfer_Certificate= document.getElementById("Transfer_Certificate");
Transfer_Certificate.onchange = function(){
  var fReader= new FileReader();
  fReader.onload=function(e){
   imgTransfer=e.target.result;
   Transfer_Certificate.src=imgTransfer;
    console.log(imgTransfer);
  }
  fReader.readAsDataURL(Transfer_Certificate.files[0]);
}
/********Marksheet_certificate******** */
var Marksheet_certificate= document.getElementById("Marksheet_certificate");
Marksheet_certificate.onchange = function(){
  var fReader= new FileReader();
  fReader.onload=function(e){
   imgMarksheet=e.target.result;
   Marksheet_certificate.src=imgMarksheet;
    console.log(imgMarksheet);
  }
  fReader.readAsDataURL(Marksheet_certificate.files[0]);
}
/*****Character_certificate */
var Character_certificate= document.getElementById("Character_certificate");
Character_certificate.onchange = function(){
  var fReader= new FileReader();
  fReader.onload=function(e){
   imgCharacter=e.target.result;
   Character_certificate.src=imgCharacter;
    console.log(imgCharacter);
  }
  fReader.readAsDataURL(Character_certificate.files[0]);
}


/********************list of all caste***************** **********/
var listOfCaste=document.getElementById("listOfCaste");
var Cast_list=document.querySelector(".Cast_list");
listOfCaste.addEventListener("click",()=>{
  Cast_list.style.display="block";
  MainPage.style.display="none";

})

/************TABLE******* */
function setupTable(tableSelector, addRowSelector, editButtonSelector, saveButtonSelector) {
  const table = document.querySelector(tableSelector);
  const addRowButton = document.querySelector(addRowSelector);
  const editTableButton = document.querySelector(editButtonSelector);
  const saveButton = document.querySelector(saveButtonSelector);
  const tbody = table.querySelector(".t_body");

  addRowButton.addEventListener("click", () => {
    const newRow = tbody.insertRow(-1);
    newRow.innerHTML = `<td contenteditable="true"></td><td contenteditable="true"></td>`;
  });

  editTableButton.addEventListener("click", () => {
    const cells = table.querySelectorAll("td");
    cells.forEach((cell) => (cell.contentEditable = !cell.isContentEditable));
  });

  saveButton.addEventListener("click", () => {
    const rows = tbody.querySelectorAll("tr");
    const tableData = Array.from(rows).map((row) =>
      Array.from(row.querySelectorAll("td")).map((cell) => cell.innerHTML)
    );
    localStorage.setItem(tableSelector, JSON.stringify(tableData));
    swal("", "Successfully saved!", "success"); 
  });

  function loadContent() {
    const jsonData = localStorage.getItem(tableSelector);
    if (jsonData) {
      const tableData = JSON.parse(jsonData);
      tbody.innerHTML = ""; // Clear the existing rows
      tableData.forEach((rowData) => {
        const newRow = tbody.insertRow(-1);
        newRow.innerHTML = rowData.map((cellData) => `<td contenteditable="true">${cellData}</td>`).join("");
      });
    }
  }

  loadContent();
}
setupTable(".cast_list_table", ".addRowButton2", ".editTableButton2", ".saveButton2");
setupTable(".cast_list_table2", ".addRowBtn2", ".EditRow2", ".SaveTable2");
setupTable(".cast_list_table3", ".addRowBtn3", ".EditRow3", ".SaveTable3");
setupTable(".cast_list_table4", ".addRowBtn4", ".EditRow4", ".SaveTable4");



function showTable() {
  var userCategory = document.getElementById("userCategory").value;
  var bcTable = document.getElementById("bcTable");
  var bcmTable = document.getElementById("bcmTable");
  var mbcTable = document.getElementById("mbcTable");
  var dncTable = document.getElementById("dncTable");

  if (userCategory === "BC") {
      bcTable.style.display = "block";
      bcmTable.style.display = "none";
      mbcTable.style.display = "none";
      dncTable.style.display = "none";
  } else if (userCategory === "BCM") {
      bcTable.style.display = "none";
      bcmTable.style.display = "block";
      mbcTable.style.display = "none";
      dncTable.style.display = "none";
  }
  else if (userCategory === "MBC") {
    bcTable.style.display = "none";
    mbcTable.style.display = "block";
    bcmTable.style.display = "none";
    dncTable.style.display = "none";
}
else if (userCategory === "DNC") {
  bcTable.style.display = "none";
dncTable.style.display = "block";
mbcTable.style.display = "none";
bcmTable.style.display = "none";
}
else{
  bcTable.style.display = "none";
  dncTable.style.display = "none";
  mbcTable.style.display = "none";
  bcmTable.style.display = "none"; 
}
}



































