class employee{
    company:object;
    constructor(obj:{name1:string, company1:string, designation1:string, salary1:number, location1:string}){
      //  this.company = {name:name1, company:company1, designation:designation1, salary:salary1, location:location1}
      this.company=obj
    }
display(){
    console.log(this.company)
}
}
var venkatesh = new employee({name1:"Venkatesh", company1:"JVT", designation1:"Programmer",salary1: 5.5 ,location1: "Banglore"})
venkatesh.display()

class corporate_Information{
   info:object;
    constructor(obj:{companyname:string,designation:string,salary:number,location:string}){
        this.info = obj;
    }
display(){
console.log(this.info)
}
}
var venk = new corporate_Information({companyname:"JVT",designation:"trainee",salary:5.5,location:"bangalore"})
venk.display()




class Institute {
    learn:object;
    constructor(obj:{name:string,eduqual:string,dob:string,address:string,number:number,mobile:number,email:string,itexp:string,skillandexp:string,repomanager:string,pan:string}){
this.learn = obj;
}
display(){
console.log(this.learn);
}
}
var pawan = new Institute({name:"Jai Venkateswara Technologies",eduqual:"B TECH MCA MBA BSC MSC",dob:"2/6/1988",address:"233/3 Ground floor new thippasandra",number:8025216666,mobile:9900367097,email:"venkatesh.db@gmail.com",itexp:"1 years",skillandexp:"C,CPP all Lang & 1 years",repomanager:"venkatesh",pan:"asu675901f"});
pawan.display();


class Broadbandconnection{
net:object;
    
    constructor(obj:{accno:number,broadbanduserid:number,ipaddress:string}){
this.net = obj;
}
display(){
console.log(this.net);
}
}
var arun = new Broadbandconnection({accno:1135497, broadbanduserid:11128550, ipaddress:"10.33.55.33"})
arun.display();


class netusag{
    usage:object;

    constructor(obj:{totalmb:string,downloadspeed:string,uploadspeed:string}){
this.usage = obj;
    }
display(){
console.log(this.usage);
}
}
var achu = new netusag({totalmb:"21.06gb", downloadspeed:"30.04mb", uploadspeed:"32.06mb"});
achu.display();


class Tirupati{
   temple:object;
    constructor(obj:{tickettype:string,date:string,day:string,time:string,perslottickets:number,bookingno:string,orderno:number,email:string,amountinfigures:string,aadhaarcard:number,bookeddatetime:string,noofpersons:string,seva:string,reportingtime:string,performancedatetime:string,privilegestotheseva:string,bookedtime:string,Accommodationtype:string,available:string,NoofTickets:string})
    {
this.temple = obj;
}
display(){
console.log(this.temple)
}
}

var aish = new Tirupati({tickettype:"Specialentrydarshan",date:"Dec 1st",day:"Tuesday",time:"3:30 Am",perslottickets:2000,bookingno:"IS151110080016",orderno:2000,email:"venkateshprofessional7@gmail.com",amountinfigures:"2000",aadhaarcard:122,bookeddatetime:"11062015 11:36:46",noofpersons:"222",seva:"Two Small Laddu",reportingtime:"11:36:46",performancedatetime:"fxfx",privilegestotheseva:'fdff',bookedtime:"Rs 500 Tirumala",Accommodationtype:"350",available:"1",NoofTickets:"50 to 200"})
aish.display()



class resum{
   bio:object;
    constructor(obj:{from:string,to:string,date:string,subject:string,mailedby:string,signedby:string}){
this.bio = obj;
}
display(){
console.log(this.bio);
}
}
var kriti = new resum({from:"Siva Prasad <kasi.sivap@gmail.com>",to:"D B Venkatesh <venkatesh.db@gmail.com>",date:"Fri, Nov 27, 2015 at 12:05 AM",subject:"Request to forward the Resumes",mailedby:"gmail.com",signedby:"gmail.com"});
kriti.display();


class Details{
    detail:object;
    constructor(obj:{name:string,age:number,gender:string,emailaddress:string,address:string,city:string,state:string,ZiporPincode:number,country:string,mobileno:number,photoid:string,photoidno:string}){
this.detail = obj;
}
display(){
console.log(this.detail);
}
}
var anu = new Details({name:"venkatesh",age:25,gender:"male",emailaddress:"venkatesh.db@gmail.com",address:"beml main road",city:"bangalore",state:"karnataka",ZiporPincode:560075,country:"india",mobileno:9900887755,photoid:"passport",photoidno:"G3G6HHY"});
anu.display();

class Creditcard{
    card:object;
    constructor(obj:{ccnumber:number,outstanding:string,minimum:string}){
this.card = obj;
}
display(){
console.log(this.card);
}
}
var pockemon = new Creditcard({ccnumber:61465753283497894,outstanding:"571.36",minimum:"254.55"});
pockemon.display();

class Bill{
   estimate:object;
    constructor(obj:{outstandingtotal:number,unbilled:number,lastpaymentmadeamt:number,creditlimit:number,available:number,Cashlimittotal:number}){
this.estimate = obj;
}
display(){
console.log(this.estimate);
}
}
var raju = new Bill({outstandingtotal:4363576,unbilled:53785,lastpaymentmadeamt:57595,creditlimit:6768,available:87987,Cashlimittotal:56765})
raju.display()


class Biodata{
    data:object;
    constructor(obj:{weight:number,height:string,eyecolour:string,gender:string,homeaddress:string,homephone:number,mobile:number,state:string,country:string}){
this.data = obj;
}
display(){
console.log(this.data);
}
}
var pap = new Biodata({weight:55,height:"5.8",eyecolour:"brown",gender:"male",homeaddress:"#6/96,rajampet,kadapa.",homephone:975545445,mobile:8553577745,state:"andhrapradesh",country:"india"});
pap.display();

class vehicleinformation{
vehicle:object;
    constructor(obj:{vehicletype:string,carcolour:string,enginenumber:string,chassisnumber:string,companyname:string}){
this.vehicle = obj;
    }
display(){
console.log(this.vehicle);
}
}    
var pakku = new vehicleinformation({vehicletype:"light motor vehicle",carcolour:"red",enginenumber:"kp98gtyihh457797",chassisnumber:"tc5678898335r45",companyname:"BMW"});
pakku.display();

class systemproperties{
    property:object;
    constructor(obj:{rating:string,processor:string,installedmemory:string,systemtype:string,penandtouch:string,computername:string,computerdescription:string,WindowsEdition:string,WindowsProductID:string}){
        this.property = obj;
    }
display(){
console.log(this.property);
}
}
var nihar = new systemproperties({rating:"4.5",processor:"intel",installedmemory:"4.00gb",systemtype:"64-bit os",penandtouch:"No Pen or Touch Input is available for this Display",computername:"BALU-PC",computerdescription:"workgroup",WindowsEdition:"Windows 7 Ultimate",WindowsProductID:"00426-OEM-8992662-00497"});
nihar.display();

class Theatre{
    
film:object;
    constructor(obj:{theatrename:string,multiplexscreen:string,moviename:string,moviecertification:string,classs:string,priceperticket:string,Numberoftickets:string,seatnumbers:string,Totalamount:string}){
this.film = obj;
}
display(){
console.log(this.film);
}
}
var om = new Theatre({theatrename:"PSS",multiplexscreen:"screen 3",moviename:"jvt",moviecertification:"U",classs:"first",priceperticket:"rs. 1050",Numberoftickets:"5",seatnumbers:"c1,c2,c3,c4,c5",Totalamount:"Rs.750.00"});
om.display();

/*
class creatinggoogleaccount{
google:object;    
    constructor(obj:{Firstname:string,Lastname:string,Chooseusername:string,CreataPassword:string,Confirmyourpassword:string,Birthday:string,Gender:string,Mobile:number,Yourcurrentemailaddress:string}){
this.google = obj;
}
display(){
console.log(this.google);
}
}
var pichai = new creatinggoogleaccount({Firstname:"venkatesh",Lastname:"d b",Chooseusername:"jvt",Creatapassword:"balu",Confirmyourpassword:"balu",Birthday:"2-6-1986",Gender:"male",Mobile:9900367097,Yourcurrentemailaddress:"venkatesh.db@gmail.com"});
pichai.display();
*/

class Bloodtest{
   test:object;
    constructor(obj:{Patientname:string,PatientID:number,Patientphone:number,Billno:number,Age:number,Dateofbirth:string,Gender:string,Fasting:string,Patientaddress:string,RoomNo:number}){
this.test = obj;
    }
display(){
console.log(this.test);
}
}
var praveen = new Bloodtest({Patientname:"Sathish",PatientID:10567890890,Patientphone:44222738,Billno:56725,Age: 34,Dateofbirth:"15/05/1991",Gender:"Male",Fasting:"Yes",Patientaddress:"7f,kaveri road, velur.",RoomNo:105});
praveen.display();

class bankstatement{
   bank:object;
    constructor(obj:{Bankname:string,Date:string,Time:string,ATMNo:string,cardno:string,branchname:string,TxnNo:number,Responsecode:number,Withdrawl:string,Fromacc:string,Modrs:string,AvailablebalRs:string,Website:string}){
this.bank = obj;
}
display(){
console.log(this.bank);
}
}
var pasha = new bankstatement({Bankname:"SBI Bank",Date:"29/05/14",Time:"19:48",ATMNo:"SJNBL48",cardno:"xxxx xxxxx xxxx 0516",branchname:"Bangalore Main Branch", TxnNo:2907,Responsecode:72,Withdrawl:"500.00",Fromacc:"xxxxxxxxxx05 xx01",Modrs:"0.00",AvailablebalRs:"1000.00",Website:"www.statebankof india.com"})
pasha.display()


class Computerupsspecs{
specs:object;
    constructor(obj:{model:string,ipvoltage:string,frequency:string,opvoltage:string,batterytype:string,batterycapacity:string,batterybackup:string,rechargetime:string,weight:string}){
this.specs = obj;
}
display()
{
console.log(this.specs);
}
}
var sumukh = new Computerupsspecs({model:"exide-digital600",ipvoltage: "230v ac",frequency:"50hz",opvoltage:"230v ac",batterytype:"sealed maintenance free",batterycapacity:"12volt 7Ah",batterybackup:"12 to 20 mints",rechargetime:"5 to 6 hours",weight:"6.1 kg" });
sumukh.display();


class Visitingcarddetails{
    card:object;
    constructor(obj:{name:string,mailid:string,contactno:string,companyname:string,designation:string,address:string}){
this.card = obj;
}
display(){
    console.log(this.card);
}
}
var piyush  = new Visitingcarddetails({name:"naresh",mailid:"naresh.jvt@gmail.com",contactno:"+919944860792",companyname:"jvt",designation:"programmer",address:"230/3 2nd floor hal3rd stage new thippasandra bangalore-560075." } );
piyush.display();

class Ebill{
    bill:object;
    constructor(obj:{website:string,username:string,password:number,consumernumber:number,billingstatus:string,modeofpayment:string,choosebank:string,usernam:string,passwd:number,Transno:string,paystatus:string}){
this.bill = obj;
}
display(){
console.log(this.bill);
}
}
var sumedha = new Ebill({website:"www.tnebnet.org",username:"agilan",password:1234567,consumernumber:5785875,billingstatus:"paidorunpaid",modeofpayment:"netbanking",choosebank:"sbi",usernam:"kumar007",passwd:123445,Transno:"18cv21828578437",paystatus:"successful" });
sumedha.display();


class Apparel{
    
wear:object;
    constructor(obj:{Brand:string,Productcode:string,Color:string,Size:string,Material:string,Occasion:string,Pattern:string,Sleeve:string,Necktype:string,Fit:string,Gender:string,Estimatedarrival:string,Returnpolicy:string,Buy:number}){
this.wear = obj;
    }
display(){
console.log(this.wear);
}
}
var achyutha = new Apparel({Brand:"Scott International",Productcode: "APPSCOTT-INTERNSWIT610835D77A441",Color:"Black",Size:"S",Material:"Cotton",Occasion:"Casual",Pattern:"Solid",Sleeve:"Full Sleeves",Necktype:"Hooded",Fit:"Slim",Gender:"Men",Estimatedarrival:"9 days",Returnpolicy:"Seller will accept returns within a 15 days from date of delivery of the item",Buy:824});
achyutha.display();

class Features{
    para:object;
    constructor(obj:{os:string,chipset:string,CPU:string,GPU:string,Model:string,Manufactuer:string,Processor:string,RAM:string,Keyboard:string,storage:string,Flash:string,Videocallcamera:string,Videorecording:string,Noicecancelling:string,Expandablestorage:string}){ 
    this.para = obj;
    }
display(){
    console.log(this.para);
}
}
var ajith = new Features({os: "iOS 9, upgradable to iOS 9.2",chipset:"Apple A9",CPU:"Dual-core 1.84 GHz Twister",GPU:"PowerVR GT7600",Model:"iphone",Manufactuer:"Apple",Processor:"1 GHZ",RAM:"512Mb",Keyboard:"Software",storage:"16GBor32Gb",Flash:"LED",Videocallcamera:"VGA",Videorecording:"720 F",Noicecancelling: "2 microphones",Expandablestorage:"No"});
ajith.display();

class Platform{
   plat:object;
    constructor(obj:{OS:string,Chipset:string,CPU:string,GPU:string}){
this.plat = obj;
}
display(){
console.log(this.plat);
}
}
var adhi = new Platform({OS:"iOS 9, upgradable to iOS 9.2",Chipset:"Apple A9",CPU:"Dual-core 1.84 GHz Twister",GPU:"PowerVR GT7600"});
adhi.display();

class Battery{
    bat:object;
    constructor(obj:{type:string,Standby:string,Talktime:string,Musicplay:string,networktechnology:string}){
this.bat = obj;
}
display(){
console.log(this.bat);
}
}
var pavan = new Battery({type:"Nonremovable Li-Po 1715 mAh battery",Standby:"Up to 240 h",Talktime:"Up to 14 h",Musicplay:"Up to 50 h",networktechnology:"GSM / CDMA / HSPA / EVDO / LTE"});
pavan.display();

class Body{
    bod:object;
    constructor(obj:{Dimensions:string,Weight:string,sim:string}){
this.bod = obj;
}
display(){
console.log(this.bod);
}
}
var deepak = new Body({Dimensions:"138.3 x 67.1 x 7.1 mm",Weight:"143 g", sim:"nano sim"});
deepak.display();

class Workshopbill{
    shop:object;
        constructor(obj:{billno:string,date:string,model:string,serialno:string}){
this.shop = obj;
}
display(){
console.log(this.shop);
}
}
var pratap = new Workshopbill({billno:"15/wb/611,",date:"16-12-2015,",model:"bajaj 09,",serialno: "ka03 hs 7441,"});
pratap.display();

class Tvspecs{
    tv:object;
    constructor(obj:{Model:string,LEDlighting:string,Sizes:string,Type:string,WirelessHDMI:string,USB:string,videoservice:string,price:number}){
this.tv = obj;
}
display(){
console.log(this.tv);
}
}
var adi = new Tvspecs({Model:"LG55LHX",LEDlighting:"Backlight w/Local Dimming",Sizes:"55 inches",Type:"240 Hz scanning Backlight",WirelessHDMI:"yes",USB:"USB 2.0",videoservice:"youtube",price:55000});
adi.display();

class laptopspecification{
    laptop:object;
    constructor(obj:{model:string,os:string,Processor:string,RAM:string,Screen:string,Resolution:string,Weight:string,Storage:string,Graphics:string,Networking:string,Batterylife:string,Cost:number}){
this.laptop = obj;
}
display(){
    console.log(this.laptop);
}
}
var adil = new laptopspecification({model:"LGp430",os:"Windows 7 home base, Premium or professional",Processor:"Second Generation Intel Core i3,i5 or i7 processor",RAM:"upto 8GB",Screen:"14.0 inch HD-LCD -backlit",Resolution:"1366*768",Weight:"4.28 pound",Storage:"320GB",Graphics:"Intel HD Graphics",Networking:"802.11 b/g/n,bluetooth 3.0",Batterylife:"6-celBattery",Cost:50000})
adil.display()
