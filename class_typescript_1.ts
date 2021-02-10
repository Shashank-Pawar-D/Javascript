class corporate_information{
    companyname:string;
    designation:string;
    salary:number;
    location:string;
    constructor(companyname:string,designation:string,salary:number,location:string){
this.companyname = companyname;
this.designation = designation;
this.salary = salary;
this.location = location;
}
display(){
console.log(this.companyname,this.designation,this.salary,this.location);
}
}
var venkatesh = new corporate_information("JVT","trainee",5.5,"bangalore");
venkatesh.display();

class Institute {
    Name:string;
    EducationalQualification:string;
    DateOfBirth:string;
    CommunicationAddress:string;
    ResidenceNumber:number;
    Mobile:number;
    Email:string;
    TotalITExp:string;
    SkillandRelevantExperience:string;
    ReportingManagers:string;
    PancardNo:string;
    constructor(name:string,eduqual:string,dob:string,address:string,number:number,mobile:number,email:string,itexp:string,skillandexp:string,repomanager:string,pan:string){
this.Name = name;
this.EducationalQualification = eduqual;
this.DateOfBirth = dob;
this.CommunicationAddress = address;
this.ResidenceNumber = number;
this.Mobile = mobile;
this.Email = email;
this.TotalITExp = itexp;
this.SkillandRelevantExperience = skillandexp;
this.ReportingManagers = repomanager;
this.PancardNo = pan;
}
display(){
console.log(this.Name,this.EducationalQualification,this.DateOfBirth,this.CommunicationAddress,this.ResidenceNumber,this.Mobile,this.Email,this.TotalITExp,this.SkillandRelevantExperience,this.ReportingManagers,this.PancardNo);
}
}
var pawan = new Institute("Jai Venkateswara Technologies","B TECH MCA MBA BSC MSC","2/6/1988","233/3 Ground floor new thippasandra",08025216666,9900367097,"venkatesh.db@gmail.com","1 years","C,CPP all Lang & 1 years","venkatesh","asu675901f");
pawan.display();


class Broadbandconnection{
AccountNo : number;
BroadbandUserID : number;
IPAddress : string;
    constructor(accno:number,broadbanduserid:number,ipaddress:string){
this.AccountNo = accno;
this.BroadbandUserID = broadbanduserid;
this.IPAddress = ipaddress;
}
display(){
console.log(this.AccountNo,this.BroadbandUserID,this.IPAddress);
}
}
var arun = new Broadbandconnection(1135497,11128550,"10.33.55.33");
arun.display();


class netusag{
totalmbdownloaded : string;
mobiledownloadspeed : string;
mobileuploadspeed : string;
    constructor(totalmb:string,downloadspeed:string,uploadspeed:string){
this.totalmbdownloaded = totalmb;
this.mobiledownloadspeed = downloadspeed;
this.mobileuploadspeed = uploadspeed;
}
display(){
console.log(this.totalmbdownloaded,this.mobiledownloadspeed,this.mobileuploadspeed);
}
}
var achu = new netusag("21.06gb","30.04mb","32.06mb");
achu.display();


class Tirupati{
    Tickettype : string
Date : string
Day : string
Time : string
Perslottickets : number
BookingNo : string
OrderNo : number
Email : string
Amountinfigures : string
AadhaarCard : number
BookedDateTime : string
NoofPersons : string
Seva : string
ReportingTime :string
PerformanceDateTime : string
PrivilegestotheSeva : string
BookedTime : string
AccommodationType : string
Available : string
NoofTickets : string
    constructor(tickettype:string,date:string,day:string,time:string,perslottickets:number,bookingno:string,orderno:number,email:string,amountinfigures:string,aadhaarcard:number,bookeddatetime:string,noofpersons:string,seva:string,reportingtime:string,performancedatetime:string,privilegestotheseva:string,bookedtime:string,Accommodationtype:string,available:string,NoofTickets:string)
    {
this.Tickettype = tickettype
this.Date = date
this.Day = day
this.Time = time
this.Perslottickets = perslottickets
this.BookingNo = bookingno
this.OrderNo = orderno
this.Email = email
this.Amountinfigures = amountinfigures
this.AadhaarCard = aadhaarcard
this.BookedDateTime = bookeddatetime
this.NoofPersons = noofpersons
this.Seva = seva
this.ReportingTime = reportingtime
this.PerformanceDateTime = performancedatetime
this.PrivilegestotheSeva = privilegestotheseva
this.BookedTime= bookedtime
this.AccommodationType = Accommodationtype
this.Available = available
this.NoofTickets = NoofTickets
}
display(){
console.log(this.Tickettype,this.Date,this.Day,this.Time,this.Perslottickets,this.BookingNo,this.OrderNo,this.Email,this.Amountinfigures,this.AadhaarCard,this.BookedDateTime,this.NoofPersons,this.Seva,this.ReportingTime,this.PerformanceDateTime,this.PrivilegestotheSeva,this.BookedTime,this.AccommodationType,this.Available,this.NoofTickets)
}
}

var aish = new Tirupati("Specialentrydarshan","Dec 1st","Tuesday","3:30 Am",2000,"IS151110080016",2000,"venkateshprofessional7@gmail.com","2000",122,"11062015 11:36:46","222","Two Small Laddu","11:36:46","fxfx",'fdff',"Rs 500 Tirumala","350","1","50 to 200")
aish.display()



class resum{
    From:string;
    To:string;
    Date:string;
    Subject:string;
    Mailedby:string;
    Signedby:string;
    constructor(from:string,to:string,date:string,subject:string,mailedby:string,signedby:string){
this.From = from;
this.To = to;
this.Date = date;
this.Subject = subject;
this.Mailedby = mailedby;
this.Signedby = signedby;
}
display(){
console.log(this.From,this.To,this.Date,this.Subject,this.Mailedby,this.Signedby);
}
}
var kriti = new resum("Siva Prasad <kasi.sivap@gmail.com>","D B Venkatesh <venkatesh.db@gmail.com>","Fri, Nov 27, 2015 at 12:05 AM","Request to forward the Resumes","gmail.com","gmail.com");
kriti.display();


class Details{
    Name:string;
    Age :number;
    Gender:string;
    Emailaddress:string;
    Address:string;
    City:string;
    State:string;
    ZiporPincode:number;
    Country:string;
    MobileNo:number;
    PhotoID :string;
    PhotoIDNo:string;
    constructor(name:string,age:number,gender:string,emailaddress:string,address:string,city:string,state:string,ZiporPincode:number,country:string,mobileno:number,photoid:string,photoidno:string){
this.Name = name;
this.Age = age;
this.Gender = gender;
this.Emailaddress = emailaddress;
this.Address = address;
this.City = city;
this.State = state;
this.ZiporPincode = ZiporPincode;
this.Country = country;
this.MobileNo = mobileno;
this.PhotoID = photoid;
this.PhotoIDNo = photoidno;
}
display(){
console.log(this.Name,this.Age,this.Gender,this.Emailaddress,this.Address,this.City,this.State,this.ZiporPincode,this.Country,this.MobileNo,this.PhotoID,this.PhotoIDNo);
}
}
var anu = new Details("venkatesh",25,"male","venkatesh.db@gmail.com","beml main road","bangalore","karnataka",560075,"india",9900887755,"passport","G3G6HHY");
anu.display();

class Creditcard{
    Creditcardnumber:number;
    Outstanding:string;
    Minimum:string;
    constructor(ccnumber:number,outstanding:string,minimum:string){
this.Creditcardnumber = ccnumber;
this.Outstanding = outstanding;
this.Minimum = minimum;
}
display(){
console.log(this.Creditcardnumber,this.Outstanding,this.Minimum);
}
}
var pockemon = new Creditcard(61465753283497894,"571.36","254.55");
pockemon.display();

class Bill{
    Outstandingtotal:number;
    Unbilled :number;
    LastpaymentmadeAmount:number
    Creditlimittotal:number
    Available:number
    Cashlimittotal:number
    constructor(outstandingtotal:number,unbilled:number,lastpaymentmadeamt:number,creditlimit:number,available:number,Cashlimittotal:number){
this.Outstandingtotal = outstandingtotal
this.Unbilled =  unbilled
this.LastpaymentmadeAmount = lastpaymentmadeamt 
this.Creditlimittotal = creditlimit
this.Available = available
this.Cashlimittotal = Cashlimittotal
}
display(){
console.log(this.Outstandingtotal,this.Unbilled,this.LastpaymentmadeAmount,this.Creditlimittotal,this.Available,this.Cashlimittotal)
}
}
var raju = new Bill(4363576,53785,57595,6768,87987,56765)
raju.display()


class Biodata{
    Weight:number;
    Height:string;
    Eyecolour:string;
    Gender:string;
    Homeaddress:string;
    Homephone:number;
    Mobile:number;
    State :string;
    Country:string;
    constructor(weight:number,height:string,eyecolour:string,gender:string,homeaddress:string,homephone:number,mobile:number,state:string,country:string){
this.Weight = weight;
this.Height = height;
this.Eyecolour =  eyecolour;
this.Gender = gender;
this.Homeaddress =  homeaddress;
this.Homephone = homephone;
this.Mobile =  mobile;
this.State = state;
this.Country = country;
}
display(){
console.log(this.Weight,this.Height,this.Eyecolour,this.Gender,this.Homeaddress,this.Homephone,this.Mobile,this.State,this.Country)
}
}
var pap = new Biodata(55,"5.8","brown","male","#6/96,rajampet,kadapa.",975545445,8553577745,"andhrapradesh","india");
pap.display();

class vehicleinformation{
Vehicletype:string; 
Carcolour :string;
Enginenumber :string;
Chassisnumber:string;
Company :string;
    constructor(vehicletype:string,carcolour:string,enginenumber:string,chassisnumber:string,companyname:string){
this.Vehicletype =  vehicletype;
this.Carcolour = carcolour;
this.Enginenumber = enginenumber;
this.Chassisnumber = chassisnumber; 
this.Company = companyname;
}
display(){
console.log(this.Vehicletype,this.Carcolour,this.Enginenumber,this.Chassisnumber,this.Company);
}
}    
var pakku = new vehicleinformation("light motor vehicle","red","kp98gtyihh457797","tc5678898335r45","BMW");
pakku.display();

class systemproperties{
    Rating:string;
    Processor:string;
    InstalledMemory:string;
    SystemType:string;
    PenandTouch:string;
    ComputerName :string;
    ComputerDescription:string;
    WindowsEdition:string;
    WindowsProductID :string;
    constructor(rating:string,processor:string,installedmemory:string,systemtype:string,penandtouch:string,computername:string,computerdescription:string,WindowsEdition:string,WindowsProductID:string){
this.Rating = rating;
this.Processor = processor;
this.InstalledMemory= installedmemory;
this.SystemType = systemtype;
this.PenandTouch = penandtouch;
this.ComputerName = computername;
this.ComputerDescription = computerdescription;
this.WindowsEdition = WindowsEdition;
this.WindowsProductID = WindowsProductID;
}
display(){
console.log(this.Rating,this.Processor,this.InstalledMemory,this.SystemType,this.PenandTouch,this.ComputerName,this.ComputerDescription,this.WindowsEdition,this.WindowsProductID);
}
}
var nihar = new systemproperties("4.5","intel","4.00gb","64-bit os","No Pen or Touch Input is available for this Display","BALU-PC","workgroup","Windows 7 Ultimate","00426-OEM-8992662-00497");
nihar.display();

class Theatre{
    Theatrename:string;
    Multiplexscreen:string;
    Moviename:string;
    Moviecertification:string;
    Classs :string;
    Priceperticket:string;
    Numberoftickets:string;
    Seatnumbers :string;
Totalamount :string;
    constructor(theatrename:string,multiplexscreen:string,moviename:string,moviecertification:string,classs:string,priceperticket:string,Numberoftickets:string,seatnumbers:string,Totalamount:string){
this.Theatrename = theatrename; 
this.Multiplexscreen = multiplexscreen; 
this.Moviename = moviename;
this.Moviecertification = moviecertification; 
this.Classs = classs ;
this.Priceperticket = priceperticket; 
this.Numberoftickets = Numberoftickets;
this.Seatnumbers = seatnumbers;
this.Totalamount = Totalamount;
}
display(){
console.log(this.Theatrename,this.Multiplexscreen,this.Moviename,this.Moviecertification,this.Classs,this.Priceperticket,this.Numberoftickets,this.Seatnumbers,this.Totalamount);
}
}
var om = new Theatre("PSS","screen 3","jvt","U","first","rs. 1050","5","c1,c2,c3,c4,c5","Rs.750.00");
om.display();

class creatinggoogleaccount{
    Firstname:string;
    Lastname :string;
    Chooseusername:string;
    CreataPassword:string;
    Confirmyourpassword:string;
    Birthday:string;
    Gender:string;
    Mobile:number;
    Yourcurrentemailaddress:string;
    constructor(Firstname:string,Lastname:string,Chooseusername:string,CreataPassword:string,Confirmyourpassword:string,Birthday:string,Gender:string,Mobile:number,Yourcurrentemailaddress:string){
this.Firstname = Firstname;
this.Lastname = Lastname;
this.Chooseusername = Chooseusername;
this.CreataPassword = CreataPassword;
this.Confirmyourpassword = Confirmyourpassword;
this.Birthday = Birthday;
this.Gender = Gender;
this.Mobile = Mobile;
this.Yourcurrentemailaddress = Yourcurrentemailaddress;
}
display(){
console.log(this.Firstname,this.Lastname,this.Chooseusername,this.CreataPassword,this.Confirmyourpassword,this.Birthday,this.Gender,this.Mobile,this.Yourcurrentemailaddress)
}
}
var pichai = new creatinggoogleaccount("venkatesh","d b","jvt","balu","balu","2-6-1986","male",9900367097,"venkatesh.db@gmail.com");
pichai.display();

class Bloodtest{
    Patientname : string;
    PatientID : number;
    Patientphone : number;
    Billno : number;
    Age : number;
    Dateofbirth : string;
    Gender : string;
    Fasting : string;
    Patientaddress : string;
    RoomNo : number;
    constructor(Patientname:string,PatientID:number,Patientphone:number,Billno:number,Age:number,Dateofbirth:string,Gender:string,Fasting:string,Patientaddress:string,RoomNo:number){
this.Patientname = Patientname;
this.PatientID = PatientID;
this.Patientphone = Patientphone;
this.Billno = Billno;
this.Age = Age;
this.Dateofbirth = Dateofbirth;
this.Gender = Gender;
this.Fasting = Fasting;
this.Patientaddress = Patientaddress;
this.RoomNo = RoomNo;
}
display(){
console.log(this.Patientname,this.PatientID,this.Patientphone,this.Billno,this.Age,this.Dateofbirth,this.Gender,this.Fasting,this.Patientaddress,this.RoomNo);
}
}
var praveen = new Bloodtest("Sathish",10567890890,44222738,56725, 34,"15/05/1991","Male","Yes","7f,kaveri road, velur.",105);
praveen.display();

class bankstatement{
    Bankname : string;
    Date : string;
    Time : string;
    ATMNo : string;
    cardno: string;
    branchname: string;
    TxnNo : number;
    Responsecode : number;
    Withdrawl : string;
    Fromacc : string;
    Modrs : string;
    AvailablebalRs : string;
    Website : string;
    constructor(Bankname:string,Date:string,Time:string,ATMNo:string,cardno:string,branchname:string,TxnNo:number,Responsecode:number,Withdrawl:string,Fromacc:string,Modrs:string,AvailablebalRs:string,Website:string){
this.Bankname = Bankname;
this.Date =  Date;
this.Time = Time;
this.ATMNo = ATMNo;
this.cardno = cardno;
this.branchname = branchname;
this.TxnNo = TxnNo;
this.Responsecode = Responsecode;
this.Withdrawl = Withdrawl;
this.Fromacc = Fromacc;
this.Modrs = Modrs;
this.AvailablebalRs = AvailablebalRs;
this.Website = Website;
}
display(){
console.log(this.Bankname,this.Date,this.Time,this.ATMNo,this.cardno,this.branchname,this.TxnNo,this.Responsecode,this.Withdrawl,this.Fromacc,this.Modrs,this.AvailablebalRs,this.Website)
}
}
var pasha = new bankstatement("SBI Bank","29/05/14","19:48","SJNBL48","xxxx xxxxx xxxx 0516","Bangalore Main Branch", 2907,72,"500.00","xxxxxxxxxx05 xx01","0.00","1000.00","www.statebankof india.com")
pasha.display()


class Computerupsspecs{
model:string;
ipvoltage:string;
frequency :string;
opvoltage :string;
batterytype  :string;
batterycapacity:string;
batterybackup:string;
rechargetime :string;
weight:string;
    constructor(model:string,ipvoltage:string,frequency:string,opvoltage:string,batterytype:string,batterycapacity:string,batterybackup:string,rechargetime:string,weight:string){
this.model = model;
this.ipvoltage = ipvoltage; 
this.frequency = frequency;
this.opvoltage = opvoltage;
this.batterytype = batterytype; 
this.batterycapacity = batterycapacity; 
this.batterybackup = batterybackup;
this.rechargetime = rechargetime ;
this.weight = weight;
}
display()
{
console.log(this.model,this.ipvoltage,this.frequency,this.opvoltage,this.batterytype,this.batterycapacity,this.batterybackup,this.rechargetime,this.weight);
}
}
var sumukh = new Computerupsspecs("exide-digital600", "230v ac","50hz","230v ac","sealed maintenance free","12volt 7Ah","12 to 20 mints","5 to 6 hours","6.1 kg" );
sumukh.display();


class Visitingcarddetails{
    name:string;
    mailid:string;
    contactno:string;
    companyname:string;
    designation:string;
    address:string;
    constructor(name:string,mailid:string,contactno:string,companyname:string,designation:string,address:string){

this.name = name;
this.mailid = mailid; 
this.contactno = contactno ;
this.companyname = companyname;
this.designation = designation ;
this.address = address;
}
display(){
    console.log(this.name,this.mailid,this.contactno,this.companyname,this.designation,this.address);
}
}
var piyush  = new Visitingcarddetails("naresh","naresh.jvt@gmail.com","+919944860792","jvt","programmer","230/3 2nd floor hal3rd stage new thippasandra bangalore-560075."  );
piyush.display();

class Ebill{
    website:string;
    username:string;
    password:number;
    consumernumber:number;
    billingstatus:string;
    modeofpayment:string;
    choosebank:string;
    usernam:string;
    passwd:number;
    Transno:string;
    paystatus:string;
    constructor(website:string,username:string,password:number,consumernumber:number,billingstatus:string,modeofpayment:string,choosebank:string,usernam:string,passwd:number,Transno:string,paystatus:string){
this.website = website;
this.username = username;
this.password = password;
this.consumernumber = consumernumber; 
this.billingstatus = billingstatus;
this.modeofpayment = modeofpayment ;
this.choosebank = choosebank;
this.usernam = usernam;
this.passwd = passwd;
this.Transno = Transno;
this.paystatus = paystatus;
}
display(){
console.log(this.website,this.username,this.password,this.consumernumber,this.billingstatus,this.modeofpayment,this.choosebank,this.usernam,this.passwd,this.Transno,this.paystatus);
}
}
var sumedha = new Ebill("www.tnebnet.org","agilan",1234567,5785875,"paidorunpaid","netbanking","sbi","kumar007",123445,"18cv21828578437","successful" );
sumedha.display();


class Apparel{
    Brand:string;
    Productcode:string;
    Color:string;
    Size:string;
    Material:string;
    Occasion:string;
    Pattern:string;
    Sleeve:string;
    Necktype:string;
    Fit:string;
    Gender:string;
    Estimatedarrival:string;
    Returnpolicy:string;
    Buy:number;

    constructor(Brand:string,Productcode:string,Color:string,Size:string,Material:string,Occasion:string,Pattern:string,Sleeve:string,Necktype:string,Fit:string,Gender:string,Estimatedarrival:string,Returnpolicy:string,Buy:number){
this.Brand = Brand;
this.Productcode = Productcode;
this.Color = Color;
this.Size = Size;
this.Material = Material;
this.Occasion = Occasion;
this.Pattern = Pattern;
this.Sleeve = Sleeve;
this.Necktype = Necktype;
this.Fit = Fit;
this.Gender = Gender;
this.Estimatedarrival = Estimatedarrival;
this.Returnpolicy = Returnpolicy;
this.Buy = Buy;
}
display(){
console.log(this.Brand,this.Productcode,this.Color,this.Size,this.Material,this.Occasion,this.Pattern,this.Sleeve,this.Necktype,this.Fit,this.Gender,this.Estimatedarrival,this.Returnpolicy,this.Buy);
}
}
var achyutha = new Apparel("Scott International", "APPSCOTT-INTERNSWIT610835D77A441","Black","S","Cotton","Casual","Solid","Full Sleeves","Hooded","Slim","Men","9 days","Seller will accept returns within a 15 days from date of delivery of the item",824);
achyutha.display();

class Features{
    os:string;
    chipset:string;
    CPU:string;
    GPU:string;
    Model:string;
    Manufactuer:string;
    Processor:string;
    RAM:string;
    Keyboard:string;
    storage:string;
    Flash:string;
    Videocallcamera:string;
    Videorecording:string;
    Noicecancelling:string;
    Expandablestorage:string;
    constructor(os:string,chipset:string,CPU:string,GPU:string,Model:string,Manufactuer:string,Processor:string,RAM:string,Keyboard:string,storage:string,Flash:string,Videocallcamera:string,Videorecording:string,Noicecancelling:string,Expandablestorage:string){ 
this.os = os;
this.chipset = chipset;
this.CPU = CPU;
this.GPU = GPU ;
this.Model = Model;
this.Manufactuer = Manufactuer;
this.Processor = Processor;
this.RAM = RAM;
this.Keyboard = Keyboard;
this.storage = storage;
this.Flash = Flash;
this.Videocallcamera = Videocallcamera;
this.Videorecording = Videorecording;
this.Noicecancelling = Noicecancelling;
this.Expandablestorage = Expandablestorage;
}
display(){
    console.log(this.os,this.chipset,this.CPU,this.GPU,this.Model,this.Manufactuer,this.Processor,this.RAM,this.Keyboard,this.storage,this.Flash,this.Videocallcamera,this.Videorecording,this.Noicecancelling,this.Expandablestorage);
}
}
var ajith = new Features( "iOS 9, upgradable to iOS 9.2","Apple A9","Dual-core 1.84 GHz Twister","PowerVR GT7600","iphone","Apple","1 GHZ","512Mb","Software","16GBor32Gb","LED","VGA","720 F", "2 microphones","No");
ajith.display();

class Platform{
    OS:string;
    Chipset:string;
    CPU:string;
    GPU:string;
    constructor(OS:string,Chipset:string,CPU:string,GPU:string){
this.OS = OS;
this.Chipset = Chipset;
this.CPU = CPU;
this.GPU = GPU;
}
display(){
console.log(this.OS,this.Chipset,this.CPU,this.GPU);
}
}
var adhi = new Platform("iOS 9, upgradable to iOS 9.2","Apple A9","Dual-core 1.84 GHz Twister","PowerVR GT7600");
adhi.display();

class Battery{
    type:string;
    Standby:string;
    Talktime:string;
    Musicplay:string;
    networktechnology:string;
    constructor(type:string,Standby:string,Talktime:string,Musicplay:string,networktechnology:string){
this.type = type;
this.Standby = Standby;
this.Talktime = Talktime;
this.Musicplay = Musicplay;
this.networktechnology = networktechnology;
}
display(){
console.log(this.type,this.Standby,this.Talktime,this.Musicplay,this.networktechnology);
}
}
var pavan = new Battery("Nonremovable Li-Po 1715 mAh battery","Up to 240 h","Up to 14 h","Up to 50 h","GSM / CDMA / HSPA / EVDO / LTE");
pavan.display();

class Body{
    Dimensions:string;
    Weight:string;
    sim:string;
    constructor(Dimensions:string,Weight:string,sim:string){
this.Dimensions = Dimensions;
this.Weight = Weight;
this.sim = sim;
}
display(){
console.log(this.Dimensions,this.Weight,this.sim);
}
}
var deepak = new Body("138.3 x 67.1 x 7.1 mm","143 g","nano sim");
deepak.display();

class Workshopbill{
    billno:string;
    date:string;
    model:string;
    serialno:string;
        constructor(billno:string,date:string,model:string,serialno:string){
this.billno = billno;
this.date = date;
this.model = model;
this.serialno = serialno;
}
display(){
console.log(this.billno,this.date,this.model,this.serialno);
}
}
var pratap = new Workshopbill("15/wb/611,","16-12-2015,","bajaj 09,", "ka03 hs 7441,");
pratap.display();

class Tvspecs{
    Model:string;
    LEDlighting:string;
    Sizes:string;
    Type:string;
    WirelessHDMI:string;
    USB:string;
    videoservice:string;
    price:number;
    constructor(Model:string,LEDlighting:string,Sizes:string,Type:string,WirelessHDMI:string,USB:string,videoservice:string,price:number){
this.Model = Model;
this.LEDlighting = LEDlighting;
this.Sizes = Sizes;
this.Type = Type;
this.WirelessHDMI = WirelessHDMI;
this.USB = USB;
this.videoservice = videoservice;
this.price = price;
}
display(){
console.log(this.Model,this.LEDlighting,this.Sizes,this.Type,this.WirelessHDMI,this.USB,this.videoservice,this.price);
}
}
var adi = new Tvspecs("LG55LHX","Backlight w/Local Dimming","55 inches","240 Hz scanning Backlight","yes","USB 2.0","youtube",55000);
adi.display();

class laptopspecification{
    model:string;
    os:string;
    Processor:string;
    RAM:string;
    Screen:string;
    Resolution:string;
    Weight:string;
    Storage:string;
    Graphics:string;
    Networking:string;
    Batterylife:string;
    Cost:number;
    constructor(model:string,os:string,Processor:string,RAM:string,Screen:string,Resolution:string,Weight:string,Storage:string,Graphics:string,Networking:string,Batterylife:string,Cost:number){
this.model = model;
this.os =  os;
this.Processor = Processor;
this.RAM = RAM;
this.Screen = Screen;
this.Resolution = Resolution;
this.Weight = Weight;
this.Storage = Storage;
this.Graphics = Graphics;
this.Networking = Networking;
this.Batterylife = Batterylife;
this.Cost = Cost;
}
display(){
    console.log(this.model,this.os,this.Processor,this.RAM,this.Screen,this.Resolution,this.Weight,this.Storage,this.Graphics,this.Networking,this.Batterylife,this.Cost);
}
}
var adil = new laptopspecification("LGp430","Windows 7 home base, Premium or professional","Second Generation Intel Core i3,i5 or i7 processor","upto 8GB","14.0 inch HD-LCD -backlit","1366*768","4.28 pound","320GB","Intel HD Graphics","802.11 b/g/n,bluetooth 3.0","6-celBattery",50000)
adil.display()
