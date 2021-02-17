var html = {
    name : "sandesh",
    company : "intimetec",
    designation : "project manager",
    salary : "10 lakhs",
    location : "USA",
    display : function(obj:{firstname:string,lastname:string}){}
}
html.display = function(obj:{firstname:string,lastname:string}){
        console.log(html.name,obj);       
    }
    html.display({firstname:"JVT",lastname:"company"})


    
var corporateinfo = {
Companyname : "JVT",
Designation : "Programmer",
Salary : "2.3 or 230000",
Location : "Bangalore",
display : function(obj:{firstname:string,lastname:string}){}
}
corporateinfo.display = function(obj:{firstname:string,lastname:string}){
    console.log(corporateinfo.Companyname,corporateinfo.Designation,corporateinfo.Location,corporateinfo.Salary,obj);
}
corporateinfo.display({firstname:"shashank",lastname:"pawar"})


var institute = {
Name : "Jai Venkateswara Technologies",
EducationalQualification : "B TECH MCA MBA BSC MSC",
DateOfBirth : "2/6/1988",
CommunicationAddress : "233/3 Ground floor new thippasandra",
ResidenceNumber : 08025216666,
Mobile : 9900367097,
Email : "venkatesh.db@gmail.com",
TotalITExp : "1 years",
SkillandRelevantExperience : "C,CPP all Lang & 1 years",
ReportingManagers : "Venkatesh",
PancardNo : "asu675901f",
 display : function(obj:{firstname:string,lastname:string}){}
}
institute.display = function(obj:{firstname:string,lastname:string}){
console.log(institute.Name,institute.EducationalQualification,institute.DateOfBirth,institute.CommunicationAddress,institute.ResidenceNumber,institute.Mobile,institute.Email,institute.TotalITExp,institute.SkillandRelevantExperience,institute.ReportingManagers,institute.PancardNo,obj);     
}
institute.display({firstname:"sandesh",lastname:"haridas"})


var  broadbandconnection = {
AccountNo : 1135497,
BroadbandUserID : 11128550,
IPAddress : "10.245.97.123",
display : function(obj:{firstname:string,lastname:string}){}
}
broadbandconnection.display = function(obj:{firstname:string,lastname:string}){
console.log(broadbandconnection.AccountNo,broadbandconnection.BroadbandUserID,broadbandconnection.IPAddress,obj);
}
broadbandconnection.display({firstname:"madhu",lastname:"sudhan"})


var netusage = {
 totalmbdownloaded : "21.26 GB",
 mobiledownloadspeed : "30.05 mbps",
 mobileuploadspeed : "32.06 mbps",
 display : function(obj:{firstname:string,lastname:string}){}
}
netusage.display = function(obj:{firstname:string,lastname:string}){
console.log(netusage.totalmbdownloaded,netusage.mobiledownloadspeed,netusage.mobileuploadspeed,obj);
}
netusage.display({firstname:"chanki",lastname:"mishra"})

var tirupati = {
Tickettype : "Specialentrydarshan",
Date : "Dec 1st",
Day : "Tuesday",
Time : "3:30 Am",
Perslottickets : 2000,
BookingNo : "IS151110080016",
NameofthePilgrim : "venkatesh",
OrderNo : 10600013554,
Email : "venkateshprofessional7@gmail.com",
Amountinfigures : "220.00",
AadhaarCard : 733498928758,
BookedDateTime : "11062015 11:36:46",
NoofPersons : 1,
Seva : "Archana",
ReportingTime : "4:00 AM",
PerformanceDateTime : "12012015 AM 4:30:00",
PrivilegestotheSeva : "Two Small Laddu",
BookedTime : "11:36:46",
AccommodationType : "Rs 500 Tirumala",
Available : 350,
NoofTickets : 1,
Rate : "50 to 2000",
display : function(obj:{firstname:string,lastname:string}){}
}
tirupati.display = function(obj:{firstname:string,lastname:string}){
    console.log(tirupati.Tickettype,tirupati.Date,tirupati.Day,tirupati.Time,tirupati.Perslottickets,tirupati.BookingNo,tirupati.NameofthePilgrim,
        tirupati.OrderNo,tirupati.Email,tirupati.Amountinfigures,tirupati.AadhaarCard,tirupati.BookedDateTime,tirupati.NoofPersons,tirupati.Seva,tirupati.ReportingTime,tirupati.PerformanceDateTime,tirupati.PrivilegestotheSeva,tirupati.BookedTime,tirupati.AccommodationType,tirupati.Available,tirupati.NoofTickets,tirupati.Rate,obj);
}
tirupati.display({firstname:"sohan",lastname:"patil"})

var resume= {
from : "Siva Prasad <kasi.sivap@gmail.com>",
to : "D B Venkatesh <venkatesh.db@gmail.com>",
date : "Fri, Nov 27, 2015 at 12:05 AM",
subject : "Request to forward the Resumes",
mailedby : "gmail.com",
signedby : "gmail.com",
display : function(obj:{firstname:string,lastname:string}){}
}
resume.display = function(obj:{firstname:string,lastname:string}){
console.log(resume.from,resume.to,resume.date,resume.subject,resume.mailedby,resume.signedby,obj);
}
resume.display({firstname:"sumukha",lastname:"kedhlaya"})

var identity = {

Name : "JVT",
Age : 5,
Gender : "Male",
Emailaddress : "info@jvtechnologies.co.in",
PhotoIDCard : "Voter Id or Ration card ..",
IDCardNo : "ASUPB590F",
display : function(obj:{firstname:string,lastname:string}){}
}
identity.display = function(obj:{firstname:string,lastname:string}){
console.log(identity.Name,identity.Age,identity.Gender,identity.Emailaddress,identity.PhotoIDCard,identity.IDCardNo,obj);
}
identity.display({firstname:"kriti",lastname:"kharabandha"})

var details = {
Name : "Mr. venkatesh",
Age : 25,
Gender : "Male",
Emailaddress : "venkatesh.db@gmail.com",
Address : "BEML Main Road",
City : "Bangalore",
State : "Karnataka",
ZiporPincode : 560075,
Country : "India",
MobileNo : 9900367097,
PhotoID : "Passport",
PhotoIDNo : "G3839975",
display : function(obj:{firstname:string,lastname:string}){}
}
details.display = function(obj:{firstname:string,lastname:string}){
console.log(details.Name,details.Age,details.Gender,details.Emailaddress,details.Address,details.City,details.State,details.ZiporPincode,details.Country,details.MobileNo,details.PhotoID,details.PhotoIDNo,obj);
}
details.display({firstname:"achyutha",lastname:"bhatlahalli"})

var creditcard = {
Creditcardnumber : 6146496758938152,
Outstanding : "571.36",
Minimum : "272.36",
display : function(obj:{firstname:string,lastname:string}){}
}
creditcard.display = function(obj:{firstname:string,lastname:string}){
console.log(creditcard.Creditcardnumber,creditcard.Outstanding,creditcard.Minimum,obj);
}
creditcard.display({firstname:"yashika",lastname:"chetan"})

var bill = {
Outstandingtotal : "Rs. 571.36", 
Unbilled :  "Rs. 0",
LastpaymentmadeAmount : "Rs. 0", 
Creditlimittotal : "Rs. 18,000" ,
Available : "Rs. 17,428.64",
Cashlimittotal : "Rs. 3,600",
display : function(obj:{firstname:string,lastname:string}){}
}
bill.display = function(obj:{firstname:string,lastname:string}){
console.log(bill.Outstandingtotal,bill.Unbilled,bill.LastpaymentmadeAmount,bill.Creditlimittotal,bill.Available,bill.Cashlimittotal,obj);
}
bill.display({firstname:"sumedha",lastname:"athreya"})

var driverdetails = {
Lastname : "kumar",
Firstname : "Pavan", 
Middlename : "Bijjavaram", 
Driverslicensenumber : "ka50201500006939" ,
Driverslicensestate : "karnataka" ,
Driverslicensecountry : "india" ,
Civiliantype : "around india" ,
Employeetype : "software engineer",
Dateofbirth : "12-07-1992" ,
Cityofbirth : "rajampet",
display : function(obj:{firstname:string,lastname:string}){}
}
driverdetails.display = function(obj:{firstname:string,lastname:string}){
console.log(driverdetails.Lastname,driverdetails.Firstname,driverdetails.Middlename,driverdetails.Driverslicensenumber,driverdetails.Driverslicensestate,driverdetails.Driverslicensecountry,driverdetails.Civiliantype,driverdetails.Employeetype,driverdetails.Dateofbirth,driverdetails.Cityofbirth,obj);
}
driverdetails.display({firstname:"jiyaan",lastname:"savanth"})

var biodata = {
weight : 55, 
height : "5.8", 
eyecolour : "brown", 
Gender : "male" ,
Homeaddress : "#6/96,rajampet,kadapa." ,
Homephone : 975545445 ,
Mobile : 8553577745 ,
State : "andhrapradesh",
Country : "india",
display : function(obj:{firstname:string,lastname:string}){}
}
biodata.display = function(obj:{firstname:string,lastname:string}){
console.log(biodata.weight,biodata.height,biodata.eyecolour,biodata.Gender,biodata.Homeaddress,biodata.Homephone,biodata.Mobile,biodata.State,biodata.Country,obj);
}
biodata.display({firstname:"darshan",lastname:"bhojgade"})


var Vehicleinformation = {
Vehicvarype :  "light motor vehicle", 
carcolour : "red" ,
Enginenumber : "kp98gtyihh457797", 
Chassisnumber : "tc5678898335r45" ,
Company : "BMW",
display : function(obj:{firstname:string,lastname:string}){}
}
Vehicleinformation.display = function(obj:{firstname:string,lastname:string}){
console.log(Vehicleinformation.Vehicvarype,Vehicleinformation.carcolour,Vehicleinformation.Enginenumber,Vehicleinformation.Chassisnumber,Vehicleinformation.Company,obj);
}
Vehicleinformation.display({firstname:"pawan",lastname:"m"})


var Systemproperties = {
Rating : "4.5",
Processor : "Intel® Core™ i5-2450 CPU",
InstalledMemory : "4.00GB",
SystemType : "64-bit Operating System",
PenandTouch : "No Pen or Touch Input is available for this Display",
ComputerName : "BALU-PC",
ComputerDescription : "workgroup",
WindowsEdition : "Windows 7 Ultimate",
WindowsProductID : "00426-OEM-8992662-00497",
display : function(obj:{firstname:string,lastname:string}){}
}
Systemproperties.display = function(obj:{firstname:string,lastname:string}){
console.log(Systemproperties.Rating,Systemproperties.Processor,Systemproperties.InstalledMemory,Systemproperties.SystemType,Systemproperties.PenandTouch,Systemproperties.ComputerName,Systemproperties.ComputerDescription,Systemproperties.WindowsEdition,Systemproperties.WindowsProductID,obj);
}
Systemproperties.display({firstname:"venkatesh",lastname:"babu"})

var theatre = {
Theatrename : "PSS", 
multiplexscreen : "screen 3", 
moviename : "JVT [ C,CPP]" ,
moviecertification : "U" ,
class : "first" ,
priceperticket : "Rs.1050.00", 
Numberoftickets : 5 ,
seatnumbers : "c1,c2,c3,c4,c5", 
Totalamount : "Rs.750.00",
display : function(obj:{firstname:string,lastname:string}){}
}
theatre.display = function(obj:{firstname:string,lastname:string}){
console.log(theatre.Theatrename,theatre.multiplexscreen,theatre.moviename,theatre.moviecertification,theatre.class,theatre.priceperticket,theatre.Numberoftickets,theatre.seatnumbers,theatre.Totalamount,obj);
}
theatre.display({firstname:"ojasvi",lastname:"sharma"})

var googleaccount = {
Firstname : "venkatesh",
Lastname : "d b",
Chooseusername : "jvt",
CreataPassword : "balu",
Confirmyourpassword : "balu",
Birthday : "2-6-1986",
Gender : "male", 
Mobile : 9900367097,
Yourcurrentemailaddress : "venkatesh.db@gmail.com",
display : function(obj:{firstname:string,lastname:string}){}
}
googleaccount.display = function(obj:{firstname:string,lastname:string}){
console.log(googleaccount.Firstname,googleaccount.Lastname,googleaccount.Chooseusername,googleaccount.CreataPassword,googleaccount.Confirmyourpassword,googleaccount.Birthday,googleaccount.Gender,googleaccount.Mobile,googleaccount.Yourcurrentemailaddress,obj);
}
googleaccount.display({firstname:"Guru",lastname:"Raghavendra"})

var bloodtest = {
Patientname : "Sathish",
PatientID : 10567890890,
Patientphone : 44222738,
Billno : 56725,
Age : 34,
Dateofbirth : "15/05/1991",
Gender : "Male",
Fasting : "Yes",
Patientaddress : "7f,kaveri road, velur.",
RoomNo : 105,
display : function(obj:{firstname:string,lastname:string}){}
}
bloodtest.display = function(obj:{firstname:string,lastname:string}){
console.log(bloodtest.Patientname,bloodtest.PatientID,bloodtest.Patientphone,bloodtest.Billno,bloodtest.Age,bloodtest.Dateofbirth,bloodtest.Gender,bloodtest.Fasting,bloodtest.Patientaddress,bloodtest.RoomNo,obj);
}
bloodtest.display({firstname:"poorvaj",lastname:"bhojgade"})

var Bankstatement = {
Bankname : "SBI Bank",
Date :  "29/05/14",
Time : "19:48",
ATMNo : "SJNBL48",
cardno : "xxxx xxxxx xxxx 0516",
branchname : "Bangalore Main Branch",
TxnNo : 2907,
Responsecode : 72,
Withdrawl : "500.00",
Fromacc : "xxxxxxxxxx05 xx01",
Modrs : "0.00",
AvailablebalRs : "1000.00",
Website : "www.statebankof india.com",
display : function(obj:{firstname:string,lastname:string}){}
}
Bankstatement.display = function(obj:{firstname:string,lastname:string}){
console.log(Bankstatement.Bankname,Bankstatement.Date,Bankstatement.Time,Bankstatement.ATMNo,Bankstatement.cardno,Bankstatement.branchname,Bankstatement.TxnNo,Bankstatement.Responsecode,Bankstatement.Withdrawl,Bankstatement.Fromacc,Bankstatement.Modrs,Bankstatement.AvailablebalRs,Bankstatement.Website,obj);
}
Bankstatement.display({firstname:"sai",lastname:"mandir"})


var computerupsspecs = {
model : "exide-digital600",
ipvoltage : "230v ac" ,
frequency : "50hz" ,
opvoltage : "230v ac",
batterytype : "sealed maintenance free", 
batterycapacity : "12volt 7Ah" ,
batterybackup : "12 to 20 mints", 
rechargetime : "5 to 6 hours" ,
weight : "6.1 kg",
display : function(obj:{firstname:string,lastname:string}){} 
}
computerupsspecs.display = function(obj:{firstname:string,lastname:string}){
console.log(computerupsspecs.model,computerupsspecs.ipvoltage,computerupsspecs.frequency,computerupsspecs.opvoltage,computerupsspecs.batterytype,computerupsspecs.batterycapacity,computerupsspecs.batterybackup,computerupsspecs.rechargetime,computerupsspecs.weight,obj);
}
computerupsspecs.display({firstname:"samanvitha",lastname:"bhojgade"})


var visitingcarddetails = {
name : "naresh", 
mailid : "naresh.jvt@gmail.com" ,
contactno : "+919944860792" ,
companyname : "jvt" ,
designation : "programmer", 
address : "230/3 2nd floor hal3rd stage new thippasandra bangalore-560075.",
display : function(obj:{firstname:string,lastname:string}){}
}
visitingcarddetails.display = function(obj:{firstname:string,lastname:string}){
console.log(visitingcarddetails.name,visitingcarddetails.mailid,visitingcarddetails.contactno,visitingcarddetails.companyname,visitingcarddetails.designation,visitingcarddetails.address,obj);
}
visitingcarddetails.display({firstname:"anusha",lastname:"shetty"})


var ebill = {
website : "www.tnebnet.org",
username : "agilan",
password : 1234567,
consumernumber : 23456123, 
billingstatus : "paidorunpaid", 
modeofpayment : "netbanking" ,
choosebank : "sbi" ,
usernam : "kumar007", 
passwd : 1234567 ,
Transno : "18cv21828578437",
paystatus : "successful",
display : function(obj:{firstname:string,lastname:string}){}
}
ebill.display = function(obj:{firstname:string,lastname:string}){
console.log(ebill.website,ebill.username,ebill.password,ebill.consumernumber,ebill.billingstatus,ebill.modeofpayment,ebill.choosebank,ebill.usernam,ebill.passwd,ebill.Transno,ebill.paystatus,obj);
}
ebill.display({firstname:"veena",lastname:"mudhol"})

var apparel = {
Brand : "Scott International",
Productcode : "APPSCOTT-INTERNSWIT610835D77A441",
Color : "Black",
Size : "S",
Material : "Cotton",
Occasion : "Casual",
Pattern : "Solid",
Sleeve : "Full Sleeves",
Necktype : "Hooded",
Fit : "Slim",
Gender : "Men",
Estimatedarrival : "9 days",
Returnpolicy : "Seller will accept returns within a 15 days from date of delivery of the item",
Buy : 824,
display : function(obj:{firstname:string,lastname:string}){}
}
apparel.display = function(obj:{firstname:string,lastname:string}){
console.log(apparel.Brand,apparel.Productcode,apparel.Color,apparel.Size,apparel.Material,apparel.Occasion,apparel.Pattern,apparel.Sleeve,apparel.Necktype,apparel.Fit,apparel.Gender,apparel.Estimatedarrival,apparel.Returnpolicy,apparel.Buy,obj);
}
apparel.display({firstname:"peace",lastname:"mind"})
