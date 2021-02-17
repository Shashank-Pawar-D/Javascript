
class corporate_information{
    info:any[] = [];
    constructor(companyname:string,designation:string,salary:number,location:string){
    this.info.push(companyname);
    this.info.push(designation);
    this.info.push(salary);
    this.info.push(location);
 }
 display(){
    for(var i:number = 0; i < this.info.length; i++){
        console.log(this.info[i]);
    }
 }
 var venkatesh = new corporate_information("JVT","trainee",5.5,"bangalore");
 venkatesh.display();



















class Institute {
    info:any[] = [];
    constructor(name:string,eduqual:string,dob:string,address:string,number:number,mobile:number,email:string,itexp:string,skillandexp:string,repomanager:string,pan:string){
this.info.push(name);
this.info.push(eduqual);
this.info.push(dob);
this.info.push(address);
this.info.push(number);
this.info.push(mobile);
this.info.push(email);
this.info.push(itexp);
this.info.push(skillandexp);
this.info.push(repomanager);
this.info.push(pan);
}
display(){
    for(var i:number = 0; i < this.info.length; i++){
        console.log(this.info[i]);
    }
 }

var pawan = new Institute("Jai Venkateswara Technologies","B TECH MCA MBA BSC MSC","2/6/1988","233/3 Ground floor new thippasandra",08025216666,9900367097,"venkatesh.db@gmail.com","1 years","C,CPP all Lang & 1 years","venkatesh","asu675901f");
pawan.display();


class Broadbandconnection{
    info:any[] = [];
    constructor(accno:number,broadbanduserid:number,ipaddress:string){
this.info.push(accno);
this.info.push(broadbanduserid);
this.info.push(ipaddress);
}
display(){
    for(var i:number = 0; i < this.info.length; i++){
        console.log(this.info[i]);
    }
 }
var arun = new Broadbandconnection(1135497,11128550,"10.33.55.33");
arun.display();


class netusag{
info:any[] = [];
    constructor(totalmb:string,downloadspeed:string,uploadspeed:string){
this.info.push(totalmb);
this.info.push(downloadspeed);
this.info.push(uploadspeed);
}
display(){
    for(var i:number = 0; i < this.info.length; i++){
        console.log(this.info[i]);
    }
 }
var achu = new netusag("21.06gb","30.04mb","32.06mb");
achu.display();


class Tirupati{
    info:any[] =[];
    constructor(tickettype:string,date:string,day:string,time:string,perslottickets:number,bookingno:string,orderno:number,email:string,amountinfigures:string,aadhaarcard:number,bookeddatetime:string,noofpersons:string,seva:string,reportingtime:string,performancedatetime:string,privilegestotheseva:string,bookedtime:string,Accommodationtype:string,available:string,NoofTickets:string)
    {
this.info.push(tickettype);
this.info.push(date);
this.info.push(day);
this.info.push(time);
this.info.push(perslottickets);
this.info.push(bookingno);
this.info.push(orderno);
this.info.push(email);
this.info.push(amountinfigures);
this.info.push(aadhaarcard);
this.info.push(bookeddatetime);
this.info.push(noofpersons);
this.info.push(seva);
this.info.push(reportingtime);
this.info.push(performancedatetime);
this.info.push(privilegestotheseva);
this.info.push(bookedtime);
this.info.push(Accommodationtype);
this.info.push(available);
this.info.push(NoofTickets);
}
display(){
    for(var i:number = 0; i < this.info.length; i++){
        console.log(this.info[i]);
    }
 }
var aish = new Tirupati("Specialentrydarshan","Dec 1st","Tuesday","3:30 Am",2000,"IS151110080016",2000,"venkateshprofessional7@gmail.com","2000",122,"11062015 11:36:46","222","Two Small Laddu","11:36:46","fxfx",'fdff',"Rs 500 Tirumala","350","1","50 to 200")
aish.display()



class resum{
    info:any[] = [];
    constructor(from:string,to:string,date:string,subject:string,mailedby:string,signedby:string){
this.info.push(from);
this.info.push(to);
this.info.push(date);
this.info.push(subject);
this.info.push(mailedby);
this.info.push(signedby);
}
display(){
    for(var i:number = 0; i < this.info.length; i++){
        console.log(this.info[i]);
    }
 }
var kriti = new resum("Siva Prasad <kasi.sivap@gmail.com>","D B Venkatesh <venkatesh.db@gmail.com>","Fri, Nov 27, 2015 at 12:05 AM","Request to forward the Resumes","gmail.com","gmail.com");
kriti.display();


class Details{
    info:any[] = [];
    constructor(name:string,age:number,gender:string,emailaddress:string,address:string,city:string,state:string,ZiporPincode:number,country:string,mobileno:number,photoid:string,photoidno:string){
this.info.push(name);
this.info.push(age);
this.info.push(gender);
this.info.push(emailaddress);
this.info.push(address);
this.info.push(city);
this.info.push(state);
this.info.push(ZiporPincode);
this.info.push(country);
this.info.push(mobileno);
this.info.push(photoid);
this.info.push(photoidno);
}
display(){
    for(var i:number = 0; i < this.info.length; i++){
        console.log(this.info[i]);
    }
 }
var anu = new Details("venkatesh",25,"male","venkatesh.db@gmail.com","beml main road","bangalore","karnataka",560075,"india",9900887755,"passport","G3G6HHY");
anu.display();

class Creditcard{
    info:any[] =[];
    constructor(ccnumber:number,outstanding:string,minimum:string){
this.info.push(ccnumber);
this.info.push(outstanding);
this.info.push(minimum);
}
display(){
    for(var i:number = 0; i < this.info.length; i++){
        console.log(this.info[i]);
    }
 }
}
var pockemon = new Creditcard(61465753283497894,"571.36","254.55");
pockemon.display();

class Bill{
    info:any[] = [];
    constructor(outstandingtotal:number,unbilled:number,lastpaymentmadeamt:number,creditlimit:number,available:number,Cashlimittotal:number){
this.info.push(outstandingtotal);
this.info.push(unbilled);
this.info.push(lastpaymentmadeamt); 
this.info.push(creditlimit);
this.info.push(available);
this.info.push(Cashlimittotal);
}
display(){
    for(var i:number = 0; i < this.info.length; i++){
        console.log(this.info[i]);
    }
 }
}
var raju = new Bill(4363576,53785,57595,6768,87987,56765)
raju.display()


class Biodata{
   info:any[] = [];
    constructor(weight:number,height:string,eyecolour:string,gender:string,homeaddress:string,homephone:number,mobile:number,state:string,country:string){
this.info.push(weight);
this.info.push(height);
this.info.push(eyecolour);
this.info.push(gender);
this.info.push(homeaddress);
this.info.push(homephone);
this.info.push(mobile);
this.info.push(state);
this.info.push(country);
}
display(){
    for(var i:number = 0; i < this.info.length; i++){
        console.log(this.info[i]);
    }
 }
}
var pap = new Biodata(55,"5.8","brown","male","#6/96,rajampet,kadapa.",975545445,8553577745,"andhrapradesh","india");
pap.display();

class vehicleinformation{
info:any[] = [];
    constructor(vehicletype:string,carcolour:string,enginenumber:string,chassisnumber:string,companyname:string){
this.info.push(vehicletype);
this.info.push(carcolour);
this.info.push(enginenumber);
this.info.push(chassisnumber); 
this.info.push(companyname);
}
display(){
    for(var i:number = 0; i < this.info.length; i++){
        console.log(this.info[i]);
    }
 }
}    
var pakku = new vehicleinformation("light motor vehicle","red","kp98gtyihh457797","tc5678898335r45","BMW");
pakku.display();

class systemproperties{
    info:any[] = [];
    constructor(rating:string,processor:string,installedmemory:string,systemtype:string,penandtouch:string,computername:string,computerdescription:string,WindowsEdition:string,WindowsProductID:string){
this.info.push(rating);
this.info.push(processor);
this.info.push(installedmemory);
this.info.push(systemtype);
this.info.push(penandtouch);
this.info.push(computername);
this.info.push(computerdescription);
this.info.push(WindowsEdition);
this.info.push(WindowsProductID);
}
display(){
    for(var i:number = 0; i < this.info.length; i++){
        console.log(this.info[i]);
    }
 }
}
var nihar = new systemproperties("4.5","intel","4.00gb","64-bit os","No Pen or Touch Input is available for this Display","BALU-PC","workgroup","Windows 7 Ultimate","00426-OEM-8992662-00497");
nihar.display();

class Theatre{
    info:any[] = [];
    constructor(theatrename:string,multiplexscreen:string,moviename:string,moviecertification:string,classs:string,priceperticket:string,Numberoftickets:string,seatnumbers:string,Totalamount:string){
this.info.push(theatrename); 
this.info.push(multiplexscreen); 
this.info.push(moviename);
this.info.push(moviecertification); 
this.info.push(classs) ;
this.info.push(priceperticket); 
this.info.push(Numberoftickets);
this.info.push(seatnumbers);
this.info.push(Totalamount);
}
display(){
    for(var i:number = 0; i < this.info.length; i++){
        console.log(this.info[i]);
    }
 }
 }
}
var om = new Theatre("PSS","screen 3","jvt","U","first","rs. 1050","5","c1,c2,c3,c4,c5","Rs.750.00");
om.display();

class creatinggoogleaccount{
   info:any[] = [];
    constructor(Firstname:string,Lastname:string,Chooseusername:string,CreataPassword:string,Confirmyourpassword:string,Birthday:string,Gender:string,Mobile:number,Yourcurrentemailaddress:string){
this.info.push(Firstname);
this.info.push(Lastname);
this.info.push(Chooseusername);
this.info.push(CreataPassword);
this.info.push(Confirmyourpassword);
this.info.push(Birthday);
this.info.push(Gender);
this.info.push(Mobile);
this.info.push(Yourcurrentemailaddress);
}
display(){
    for(var i:number = 0; i < this.info.length; i++){
        console.log(this.info[i]);
    }
 }
}
var pichai = new creatinggoogleaccount("venkatesh","d b","jvt","balu","balu","2-6-1986","male",9900367097,"venkatesh.db@gmail.com");
pichai.display();

class Bloodtest{
    info:any[] = [];
    constructor(Patientname:string,PatientID:number,Patientphone:number,Billno:number,Age:number,Dateofbirth:string,Gender:string,Fasting:string,Patientaddress:string,RoomNo:number){
this.info.push(Patientname);
this.info.push(PatientID);
this.info.push(Patientphone);
this.info.push(Billno);
this.info.push(Age);
this.info.push(Dateofbirth);
this.info.push(Gender);
this.info.push(Fasting);
this.info.push(Patientaddress);
this.info.push(RoomNo);
}
display(){
    for(var i:number = 0; i < this.info.length; i++){
        console.log(this.info[i]);
    }
 }
}
var praveen = new Bloodtest("Sathish",10567890890,44222738,56725, 34,"15/05/1991","Male","Yes","7f,kaveri road, velur.",105);
praveen.display();

class bankstatement{
   info:any[]=[];
    constructor(Bankname:string,Date:string,Time:string,ATMNo:string,cardno:string,branchname:string,TxnNo:number,Responsecode:number,Withdrawl:string,Fromacc:string,Modrs:string,AvailablebalRs:string,Website:string){
this.Binfo.push(Bankname);
this.info.push(Date);
this.info.push(Time);
this.info.push(ATMNo);
this.info.push(cardno);
this.info.push(branchname);
this.info.push(TxnNo);
this.info.push(Responsecode);
this.info.push(Withdrawl);
this.info.push(Fromacc);
this.info.push(Modrs);
this.info.push(AvailablebalRs);
this.info.push(Website);
}
display(){
    for(var i:number = 0; i < this.info.length; i++){
        console.log(this.info[i]);
    }
 }
}
var pasha = new bankstatement("SBI Bank","29/05/14","19:48","SJNBL48","xxxx xxxxx xxxx 0516","Bangalore Main Branch", 2907,72,"500.00","xxxxxxxxxx05 xx01","0.00","1000.00","www.statebankof india.com")
pasha.display()


class Computerupsspecs{

    info:any[] =[];

    constructor(model:string,ipvoltage:string,frequency:string,opvoltage:string,batterytype:string,batterycapacity:string,batterybackup:string,rechargetime:string,weight:string){
this.info.push(model);
this.info.push(ipvoltage); 
this.info.push(frequency);
this.info.push(opvoltage);
this.info.push(batterytype); 
this.info.push(batterycapacity); 
this.info.push(batterybackup);
this.info.push(rechargetime );
this.info.push(weight);
}
display(){
    for(var i:number = 0; i < this.info.length; i++){
        console.log(this.info[i]);
    }
}
var sumukh = new Computerupsspecs("exide-digital600", "230v ac","50hz","230v ac","sealed maintenance free","12volt 7Ah","12 to 20 mints","5 to 6 hours","6.1 kg" );
sumukh.display();


class Visitingcarddetails{
  info:any[] =[];
    
    constructor(name:string,mailid:string,contactno:string,companyname:string,designation:string,address:string){

this.info.push(name);
this.info.push(mailid); 
this.info.push(contactno) ;
this.info.push(companyname;
this.info.push(designation ;
this.info.push(address);
}
display(){
    for(var i:number = 0; i < this.info.length; i++){
        console.log(this.info[i]);
    }
}
var piyush  = new Visitingcarddetails("naresh","naresh.jvt@gmail.com","+919944860792","jvt","programmer","230/3 2nd floor hal3rd stage new thippasandra bangalore-560075."  );
piyush.display();

class Ebill{
  info:any[] =[];
    
    constructor(website:string,username:string,password:number,consumernumber:number,billingstatus:string,modeofpayment:string,choosebank:string,usernam:string,passwd:number,Transno:string,paystatus:string){
this.info.push(website);
this.info.push(username);
this.info.push(password);
this.info.push(consumernumber); 
this.info.push(billingstatus);
this.info.push(modeofpayment );
this.info.push(choosebank);
this.info.push(usernam);
this.info.push(passwd);
this.info.push(Transno);
this.info.push(paystatus);
}
display(){
    for(var i:number = 0; i < this.info.length; i++){
        console.log(this.info[i]);
    }
}
var sumedha = new Ebill("www.tnebnet.org","agilan",1234567,5785875,"paidorunpaid","netbanking","sbi","kumar007",123445,"18cv21828578437","successful" );
sumedha.display();


class Apparel{
   
    info:any[] =[];

    constructor(Brand:string,Productcode:string,Color:string,Size:string,Material:string,Occasion:string,Pattern:string,Sleeve:string,Necktype:string,Fit:string,Gender:string,Estimatedarrival:string,Returnpolicy:string,Buy:number){
this.info.push(Brand);
this.info.push(Productcode);
this.info.push(Color);
this.info.push(Size);
this.info.push(Material);
this.info.push(Occasion);
this.info.push(Pattern);
this.info.push(Sleeve);
this.info.push(Necktype);
this.info.push(Fit);
this.info.push(Gender);
this.info.push(Estimatedarrival);
this.info.push(Returnpolicy);
this.info.push(Buy);
}
display(){
    for(var i:number = 0; i < this.info.length; i++){
        console.log(this.info[i]);
    }
}
var achyutha = new Apparel("Scott International", "APPSCOTT-INTERNSWIT610835D77A441","Black","S","Cotton","Casual","Solid","Full Sleeves","Hooded","Slim","Men","9 days","Seller will accept returns within a 15 days from date of delivery of the item",824);
achyutha.display();

class Features{
  info:any[] =[];
   
    constructor(os:string,chipset:string,CPU:string,GPU:string,Model:string,Manufactuer:string,Processor:string,RAM:string,Keyboard:string,storage:string,Flash:string,Videocallcamera:string,Videorecording:string,Noicecancelling:string,Expandablestorage:string){ 
this.info.push(os);
this.info.push(chipset);
this.info.push(CPU);
this.info.push(GPU) ;
this.info.push(Model);
this.info.push(Manufactuer);
this.info.push(Processor);
this.info.push(RAM);
this.info.push(Keyboard);
this.info.push(storage);
this.info.push(Flash);
this.info.push(Videocallcamera);
this.info.push(Videorecording);
this.info.push(Noicecancelling);
this.info.push(Expandablestorage);
}
display(){
    for(var i:number = 0; i < this.info.length; i++){
        console.log(this.info[i]);
    }
}
}
var ajith = new Features( "iOS 9, upgradable to iOS 9.2","Apple A9","Dual-core 1.84 GHz Twister","PowerVR GT7600","iphone","Apple","1 GHZ","512Mb","Software","16GBor32Gb","LED","VGA","720 F", "2 microphones","No");
ajith.display();

class Platform{
  info:any[] =[];
   
    constructor(OS:string,Chipset:string,CPU:string,GPU:string){
this.info.push(OS);
this.info.push(Chipset);
this.info.push(CPU);
this.info.push(GPU);
}
display(){
    for(var i:number = 0; i < this.info.length; i++){
        console.log(this.info[i]);
    }
}
var adhi = new Platform("iOS 9, upgradable to iOS 9.2","Apple A9","Dual-core 1.84 GHz Twister","PowerVR GT7600");
adhi.display();

class Battery{
  info:any[] =[];
   
    constructor(type:string,Standby:string,Talktime:string,Musicplay:string,networktechnology:string){
this.info.push(type);
this.info.push(Standby);
this.info.push(Talktime);
this.info.push(Musicplay);
this.info.push(networktechnology);
}

display(){
    for(var i:number = 0; i < this.info.length; i++){
        console.log(this.info[i]);
    }
}
}
var pavan = new Battery("Nonremovable Li-Po 1715 mAh battery","Up to 240 h","Up to 14 h","Up to 50 h","GSM / CDMA / HSPA / EVDO / LTE");
pavan.display();

class Body{
  info:any[] =[];
   
    constructor(Dimensions:string,Weight:string,sim:string){
this.info.push(Dimensions);
this.info.push(Weight);
this.info.push(sim);
}
display(){
    for(var i:number = 0; i < this.info.length; i++){
        console.log(this.info[i]);
    }
}
var deepak = new Body("138.3 x 67.1 x 7.1 mm","143 g","nano sim");
deepak.display();

class Workshopbill{
  info:any[] =[];
   
        constructor(billno:string,date:string,model:string,serialno:string){
this.info.push(billno);
this.info.push(date);
this.info.push(model);
this.info.push(serialno);
}
display(){
    for(var i:number = 0; i < this.info.length; i++){
        console.log(this.info[i]);
    }
}
var pratap = new Workshopbill("15/wb/611,","16-12-2015,","bajaj 09,", "ka03 hs 7441,");
pratap.display();

class Tvspecs{
  info:any[] =[];
    constructor(Model:string,LEDlighting:string,Sizes:string,Type:string,WirelessHDMI:string,USB:string,videoservice:string,price:number){
this.info.push(Model);
this.info.push(LEDlighting);
this.info.push(Sizes);
this.info.push(Type);
this.info.push(WirelessHDMI);
this.info.push(USB);
this.info.push(videoservice);
this.info.push(price);
}
display(){
    for(var i:number = 0; i < this.info.length; i++){
        console.log(this.info[i]);
    }
 }
}
var adi = new Tvspecs("LG55LHX","Backlight w/Local Dimming","55 inches","240 Hz scanning Backlight","yes","USB 2.0","youtube",55000);
adi.display();

class laptopspecification{
  info:any[]=[];  
    constructor(model:string,os:string,Processor:string,RAM:string,Screen:string,Resolution:string,Weight:string,Storage:string,Graphics:string,Networking:string,Batterylife:string,Cost:number){
this.info.push(model);
this.info.push(os);
this.info.push(Processor);
this.info.push(RAM);
this.info.push(Screen);
this.info.push(Resolution);
this.info.push(Weight);
this.info.push(Storage);
this.info.push(Graphics);
this.info.push(Networking);
this.info.push(Batterylife);
this.info.push(Cost);
}
display(){
    for(var i:number = 0; i < this.info.length; i++){
        console.log(this.info[i]);
    }
 }
}
var adil = new laptopspecification("LGp430","Windows 7 home base, Premium or professional","Second Generation Intel Core i3,i5 or i7 processor","upto 8GB","14.0 inch HD-LCD -backlit","1366*768","4.28 pound","320GB","Intel HD Graphics","802.11 b/g/n,bluetooth 3.0","6-celBattery",50000)
adil.display()
