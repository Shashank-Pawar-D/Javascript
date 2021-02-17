var features = { 
os : "iOS 9, upgradable to iOS 9.2",
chipset : "Apple A9",
CPU : "Dual-core 1.84 GHz Twister",
GPU : "PowerVR GT7600" ,
Model : "iphone",
Manufactuer : "Apple",
Processor : "1 GHZ",
RAM : "512Mb",
Keyboard : "Software",
storage : "16GBor32Gb",
Flash : "LED",
Videocallcamera : "VGA",
Videorecording : "720 F",
Noicecancelling : "2 microphones",
Expandablestorage : "No",
display : function(obj:{firstname:string,lastname:string}){}
}
features.display = function(obj:{firstname:string,lastname:string}){
console.log(features.os,features.chipset,features.CPU,features.GPU,features.Model,features.Manufactuer,features.Processor,features.RAM,features.Keyboard,features.storage,features.Flash,features.Videocallcamera,features.Videorecording,features.Noicecancelling,features.Expandablestorage);
}
features.display({firstname:"mohammad",lastname:"hassan"})

var platform = {
OS : "iOS 9, upgradable to iOS 9.2",
Chipset : "Apple A9",
CPU : "Dual-core 1.84 GHz Twister",
GPU : "PowerVR GT7600",
display : function(obj:{firstname:string,lastname:string}){}
}
platform.display = function(obj:{firstname:string,lastname:string}){

console.log(platform.OS,platform.Chipset,platform.CPU,platform.GPU,obj);
}
platform.display({firstname:"shiv",lastname:"sagar"})

var battery = {
type : "Nonremovable Li-Po 1715 mAh battery" ,
Standby : "Up to 240 h" ,
Talktime : "Up to 14 h" ,
Musicplay : "Up to 50 h",
networktechnology : "GSM / CDMA / HSPA / EVDO / LTE",
display : function(obj:{firstname:string,lastname:string}){}
}
battery.display = function(obj:{firstname:string,lastname:string}){
console.log(battery.type,battery.Standby,battery.Talktime,battery.Musicplay,battery.networktechnology,obj);
}
battery.display({firstname:"raksha",lastname:"rao"})

var body = {
Dimensions : "138.3 x 67.1 x 7.1 mm",
Weight : "143 g" ,
sim : "Nano-SIM",
display : function(obj:{firstname:string,lastname:string}){}
}
body.display = function(obj:{firstname:string,lastname:string}){
console.log(body.Dimensions,body.Weight,body.sim,obj);
}
body.display({firstname:"pratheek",lastname:"gowda"})

var workshopbill = {
billno : "15/wb/611,",
date : "16-12-2015,",
model : "bajaj 09,",
serialno : "ka03 hs 7441",
display : function(obj:{firstname:string,lastname:string}){}
}
workshopbill.display = function(obj:{firstname:string,lastname:string}){
console.log(workshopbill.billno,workshopbill.date,workshopbill.model,workshopbill.serialno,obj);
}
workshopbill.display({firstname:"Warren",lastname:"Buffet"})

var tvspecs = {
Model : "LG55LHX",
LEDlighting : "Backlight w/Local Dimming",
Sizes : "55 inches",
Type : "240 Hz scanning Backlight",
WirelessHDMI : "yes",
USB : "USB 2.0",
videoservice : "youtube",
price : 55000,
display : function(obj:{firstname:string,lastname:string}){}
}
tvspecs.display = function(obj:{firstname:string,lastname:string}){
console.log(tvspecs.Model,tvspecs.LEDlighting,tvspecs.Sizes,tvspecs.Type,tvspecs.WirelessHDMI,tvspecs.USB,tvspecs.videoservice,tvspecs.price,obj);
}
tvspecs.display({firstname:"shankar",lastname:"gowda"})

var Laptopspecification = {
model : "LGp430",
os : "Windows 7 home base, Premium or professional",
Processor : "Second Generation Intel Core i3,i5 or i7 processor",
RAM : "upto 8GB",
Screen :"14.0 inch HD-LCD -backlit",
Resolution : "1366*768",
Weight : "4.28 pound",
Storage : "320GB",
Graphics : "Intel HD Graphics",
Networking : "802.11 b/g/n,bluetooth 3.0",
Batterylife : "6-celBattery",
Cost : "50,000",
display : function(obj:{firstname:string,lastname:string}){}
}
Laptopspecification.display = function(obj:{firstname:string,lastname:string}){
console.log(Laptopspecification.model,Laptopspecification.os,Laptopspecification.Processor,Laptopspecification.RAM,Laptopspecification.Screen,Laptopspecification.Resolution,Laptopspecification.Weight,Laptopspecification.Storage,Laptopspecification.Graphics,Laptopspecification.Networking,Laptopspecification.Batterylife,Laptopspecification.Cost,obj);
}
Laptopspecification.display({firstname:"Raj",lastname:"Kumar"})

var Library = {
BookID : 12345634,
Bookname : "C Programming",
Bookauthor : "Dennis Ritche",
Issuedate : "14/01/2012",
Duedate : "13/02/2012",
IDNo : "2008Ec027",
Name : "Saravanan",
Returnon : "25/02/2012",
Fine : 12,
display : function(obj:{firstname:string,lastname:string}){}
}
Library.display = function(obj:{firstname:string,lastname:string}){
console.log(Library.BookID,Library.Bookname,Library.Bookauthor,Library.Issuedate,Library.Duedate,Library.IDNo,Library.Name,Library.Returnon,Library.Fine,obj);
}
Library.display({firstname:"Naveen",lastname:"jaguar"})

var speedpost = {
Postofficedetails : "New Thipasundra<423203>",
trackingnumber : "EM423395510IN",
CounterNo : 1,
opcode : 12,
Fromaddress : "xxxxxx",
Toaddress : "xxxxxx",
wgt : "20grms",
Amt : "39.00",
datetime : "08/04/2013 16:01",
Taxes : "Rs.4.00",
display : function(obj:{firstname:string,lastname:string}){}
}
speedpost.display = function(obj:{firstname:string,lastname:string}){
console.log(speedpost.Postofficedetails,speedpost.trackingnumber,speedpost.CounterNo,speedpost.opcode,speedpost.Fromaddress,speedpost.Toaddress,speedpost.wgt,speedpost.Amt,speedpost.datetime,speedpost.Taxes,obj);
}
speedpost.display({firstname:"Ajith",lastname:"Gowda"})

var Carinsurance = {
Name : "Madhu",
Address : "1a 1st cross kg nagar, blore", 
Contactdetails : 9900887766,
EmailId : "dholubholu@gmail.com",
Policycertificatenumber : 92027123311002120,
Proposalcovernotenumber : 110711700622,
Periodofinsurance : "from 00:00 Hrs on 14/07/2011 to 13/07/2012 on 23:59",
Occupation : "Software Engineer",
display : function(obj:{firstname:string,lastname:string}){}
}
Carinsurance.display = function(obj:{firstname:string,lastname:string}){
console.log(Carinsurance.Name,Carinsurance.Address,Carinsurance.Contactdetails,Carinsurance.EmailId,Carinsurance.Policycertificatenumber,Carinsurance.Proposalcovernotenumber,Carinsurance.Periodofinsurance,Carinsurance.Occupation,obj);
}
Carinsurance.display({firstname:"Kiccha",lastname:"Sudeep"})

var Electricitybill = {
Selectaccount : "1-121-008-54",
Billingdate : "20/06/2012",
Subdivision : 1,
RRNo : 12100854,
Name : "XXXXX",
Reading : 42260,
Duedate : 21/6/2012,
unitsconsumed : 1310,
Billamount : 6498,
paymentdate : "30/06/2012",
Paidammount : 6498,
display : function(obj:{firstname:string,lastname:string}){}
}

Electricitybill.display = function(obj:{firstname:string,lastname:string}){
console.log(Electricitybill.Selectaccount,Electricitybill.Billingdate,Electricitybill.Subdivision,Electricitybill.RRNo,Electricitybill.Name,Electricitybill.Reading,Electricitybill.Duedate,Electricitybill.unitsconsumed,Electricitybill.Billamount,Electricitybill.paymentdate,Electricitybill.Paidammount,obj);
}
Electricitybill.display({firstname:"Master",lastname:"Manjunath"})

var Busticket = {
Transportdetails : "Tamilnadu State Transport Corporation Limited",
Busdeponame : "Kanchipuram/01",
Ticketnumber : 86655,
Dateandtime : "06/11/2014 14:58:47",
From : "Chennai",
To : "pondichery",
Qty : 2,
cost : "33.00",
Total : "33.00",
Busno : "TN 01 N 2454",
display : function(obj:{firstname:string,lastname:string}){}
}
Busticket.display = function(obj:{firstname:string,lastname:string}){
console.log(Busticket.Transportdetails,Busticket.Busdeponame,Busticket.Ticketnumber,Busticket.Dateandtime,Busticket.From,Busticket.To,Busticket.Qty,Busticket.cost,Busticket.Total,Busticket.Busno,obj);
}
Busticket.display({firstname:"chandan",lastname:"shetty"})


var Regcertificate = {
Registrationnumber : "TN 22 CY 2917",
Ownername : "Sachin",
SWDo : "Sirinivasan",
Dealer : "Murugan Vehicles& Services Limited",
Classisno : 5793603,
Engineno : "0G3N72505757",
Classofvehicle : "LMV",
makername : "Maruthi SuzUKI India LTD",
Noofcylinder : 3,
WeightKG : 740,
wheelbase : 2360,
Seatingcapacity : 5,
Fuel : "Petrol",
Cubiccylinder : 796,
display : function(obj:{firstname:string,lastname:string}){}
}
Regcertificate.display = function(obj:{firstname:string,lastname:string}){
console.log(Regcertificate.Registrationnumber,Regcertificate.Ownername,Regcertificate.SWDo,Regcertificate.Dealer,Regcertificate.Classisno,Regcertificate.Engineno,Regcertificate.Classofvehicle,Regcertificate.makername,Regcertificate.Noofcylinder,Regcertificate.WeightKG,Regcertificate.wheelbase,Regcertificate.Seatingcapacity,Regcertificate.Fuel,Regcertificate.Cubiccylinder,obj);
}
Regcertificate.display({firstname:"Mani",lastname:"Dunka"})

var Foodbills = {
Restaurantname : "KFC",
Type : "NON-AC",
Billno : 2,
Table : 6,
Waiter : "Vijay",
person : 2,
display : function(obj:{firstname:string,lastname:string}){}
}
Foodbills.display = function(obj:{firstname:string,lastname:string}){
console.log(Foodbills.Restaurantname,Foodbills.Type,Foodbills.Billno,Foodbills.Table,Foodbills.Waiter,Foodbills.person,obj);
}
Foodbills.display({firstname:"Darshan",lastname:"DBOSS"})

var Ticketdetails = {
TransactionID : 100000380284535,
PNRNo : 4115023549,
TrainNo  : 56213 ,
Dateofbooking : "14-Dec-2015",
Class : "sleeper",
Quota : "general",
Journeydate : "04-Jan-2016",
From : "KJM",
To : "TPTY",
Boardingat : "KJM",
Boardingdate : "04-Jan-2016",
Reservationupto : "TPTY",
Scheduleddeparture : "21:00 Hrs",
Distance : "323 KM",
Ticketfare : "Rs. 420.00",
Servicecharge : "Rs. 22.90",
Totalfare : "Rs. 442.90",
display : function(obj:{firstname:string,lastname:string}){}
}
Ticketdetails.display = function(obj:{firstname:string,lastname:string}){
console.log(Ticketdetails.TransactionID,Ticketdetails.PNRNo,Ticketdetails.TrainNo,Ticketdetails.Dateofbooking,Ticketdetails.Class,Ticketdetails.Quota,Ticketdetails.Journeydate,Ticketdetails.From,Ticketdetails.To,Ticketdetails.Boardingat,Ticketdetails.Boardingdate,Ticketdetails.Reservationupto,Ticketdetails.Scheduleddeparture,Ticketdetails.Distance,Ticketdetails.Ticketfare,Ticketdetails.Servicecharge,Ticketdetails.Totalfare,obj);
}
Ticketdetails.display({firstname:"shashank",lastname:"pawar"})

var Personaldetails = {
Name : "Naga Lalitha Kumari Bezawada",
Dob : "18-02-1989",
Birthtime : "7.30-8PM",
Birthplace : "Samalkota",
Nativity : "Rajahmundry.",
Martialstatus : "UnMarried",
Religion : "Hindu",
Community : "Telugu",
Caste : "Balija",
Subsect : "Krishna Balija",
Mothertongue : "Telugu",
Gothram : "Mathala",
Star : "Pushyami 3,4P",
Height : "5.1",
Complexion : "Medium",
Qualification : "B.Tech",
University : "KIET,Kakinada",
Bloodgroup : "B+ve",
display : function(obj:{firstname:string,lastname:string}){}
}
Personaldetails.display = function(obj:{firstname:string,lastname:string}){
console.log(Personaldetails.Name,Personaldetails.Dob,Personaldetails.Birthtime,Personaldetails.Birthplace,Personaldetails.Nativity,Personaldetails.Martialstatus,Personaldetails.Religion,Personaldetails.Community,Personaldetails.Caste,Personaldetails.Subsect,Personaldetails.Mothertongue,Personaldetails.Gothram,Personaldetails.Star,Personaldetails.Height,Personaldetails.Complexion,Personaldetails.Qualification,Personaldetails.University,Personaldetails.Bloodgroup,obj);
}
Personaldetails.display({firstname:"shashank",lastname:"pawar"})

var bankdetails = {
Accountname : "Mr. VENKATESH DUSETTI BABU",
Address : "NO 233, GROUND FLOOR, 5TH main 1ST FLOOR, NEW THIPPASANDRA BANGALORE-560075",
Date : "24 Dec 2015",
Accountnumber : 167856041,
Accountdescription : "SBCHQ-GEN-PUB-IND-NONRURAL-INR",
Branch : "NEW TIPPASANDRA, BANGALORE",
Drawingpower : "0.00",
Interestrate : "4.0",
MODBal : "0.00",
CIFNo : 86617689795,
IFSCode : "SBIN0015645",
MICRCode : 560002189,
Nominationregistered : "Yes",
HOMELOANAmount : "50,00,000",
Loantenure : "20 Yr or Months",
Loanemi : "49,919",
Totalinterestpayable : "69,80,559",
Totalpayment : "1,19,80,559",
Personalloanamount : "3,50,000",
display : function(obj:{firstname:string,lastname:string}){}
}
bankdetails.display = function(obj:{firstname:string,lastname:string}){
console.log(bankdetails.Accountname,bankdetails.Address,bankdetails.Date,bankdetails.Accountnumber,bankdetails.Accountdescription,bankdetails.Branch,bankdetails.Drawingpower,bankdetails.MODBal,bankdetails.CIFNo,bankdetails.IFSCode,bankdetails.MICRCode,bankdetails.Nominationregistered,bankdetails.HOMELOANAmount,bankdetails.Interestrate,bankdetails.Loantenure,bankdetails.Loanemi,bankdetails.Totalinterestpayable,bankdetails.Totalpayment,bankdetails.Personalloanamount,obj);
}
bankdetails.display({firstname:"varshitha",lastname:"urs"})

var tablet = {
Mfg : "MICRO", 
Comp : "Paracetamol 650 MG",
Form : "Tabvar",
Packsize : 15,
Deliverytime : "4 - 24 HRS",
MRP : "Rs. 33.46 Save upto 15%",
display : function(obj:{firstname:string,lastname:string}){}
}
tablet.display = function(obj:{firstname:string,lastname:string}){
console.log(tablet.Mfg,tablet.Comp,tablet.Form,tablet.Packsize,tablet.Deliverytime,tablet.MRP,obj);
}
tablet.display({firstname:"master",lastname:"manjunath"})


var perfume = {
Brand : "Concept",
Productcode : "AUTCOMBO-OF- CONVIVA67682242A608C",
Weight : "150 gm",
Box : "2 Perfumes",
Quantity : "70 ml each",
Effectiveprice : "Rs 194 after cashback",
display : function(obj:{firstname:string,lastname:string}){}
}
perfume.display = function(obj:{firstname:string,lastname:string}){
console.log(perfume.Brand,perfume.Productcode,perfume.Weight,perfume.Box,perfume.Quantity,perfume.Effectiveprice);
}
perfume.display({firstname:"suman",lastname:"bhandalkar"})

var watch = {
Itemcode : 131843,
Rs : 349,
Type : "Analog Watch",
Case : "Fibre Case with Steel Back",
Dial : "Round Dial",
Strap : "Fibre",
Clasptype : "Buckle",
Occassion : "Casual",
Movement : "PC21 Movement",
Others : "One Year Warranty",
display : function(obj:{firstname:string,lastname:string}){}
}
watch.display = function(obj:{firstname:string,lastname:string}){
console.log(watch.Itemcode,watch.Rs,watch.Type,watch.Case,watch.Dial,watch.Strap,watch.Clasptype,watch.Occassion,watch.Movement,watch.Others,obj);
}
watch.display({firstname:"yeshas",lastname:"pawar"})

var car = {
CITY : "Kolkata",
FUELTYPE : "Petrol",
KMSDriven : "29,479 KM",
COLOUR : "Brown",
NUMBEROFOWNERS : 1,
POWERSTEERING : "Yes",
INSURANCETYPE : "Expired",
INSURANCEEXPIRY : "NA",
MANUFACTURINGYEAR : 2012,
DATEOFREGISTRATION : "25-May-2012",
REGISTRATIONTYPE : "Individual",
RTOLOCATION : "beltala",
display : function(obj:{firstname:string,lastname:string}){}
}
car.display = function(obj:{firstname:string,lastname:string}){
console.log(car.CITY,car.FUELTYPE,car.KMSDriven,car.COLOUR,car.NUMBEROFOWNERS,car.POWERSTEERING,car.INSURANCETYPE,car.INSURANCEEXPIRY,car.MANUFACTURINGYEAR,car.DATEOFREGISTRATION,car.REGISTRATIONTYPE,car.RTOLOCATION,obj);
}
car.display({firstname:"akshatha",lastname:"patil"})

var storage = {
Drive : "C",
Type : "localdisk",
Totalsize : "97.5 GB",
Freesize : "59.2 GB",
display : function(obj:{firstname:string,lastname:string}){}
}
storage.display = function(obj:{firstname:string,lastname:string}){
console.log(storage.Drive,storage.Type,storage.Totalsize,storage.Freesize,obj);
}
storage.display({firstname:"bindu",lastname:"kori"})


var os = {
OSName : "Windows or Linux",
OSVersion : "2.6",
display : function(obj:{firstname:string,lastname:string}){}
}
os.display = function(obj:{firstname:string,lastname:string}){
console.log(os.OSName,os.OSVersion,obj);
}
os.display({firstname:"sohan",lastname:"patil"})

var netbill = {
InvoiceNo : 7411172,
Period : "01/11/2015-30/11/2015",
Servicetype : "Internetaccess",
Description : "Monthly Subscription charges",
Package : "ACT Blaze",
Rate : "1,049.00",
Unit : "Per Month",
Quantity : "30 Days",
Amount : "1,049.00",
Tax  : "140.71",
Total : "1,189.71",
display : function(obj:{firstname:string,lastname:string}){}
}
netbill.display = function(obj:{firstname:string,lastname:string}){
console.log(netbill.InvoiceNo,netbill.Period,netbill.Servicetype,netbill.Description,netbill.Package,netbill.Rate,netbill.Unit,netbill.Quantity,netbill.Amount,netbill.Tax,netbill.Total,obj);
}
netbill.display({firstname:"abhishek",lastname:"chayapatel"})

var sim = {
airtelnumber : 9845042214,
Accountnumber : 1025489139,
Billnumber : 969648942,
Billperiod : "17-Dec-2012 to 16-jan-2015",
display : function(obj:{firstname:string,lastname:string}){}
}
sim.display = function(obj:{firstname:string,lastname:string}){
console.log(sim.airtelnumber,sim.Accountnumber,sim.Billnumber,sim.Billperiod,obj);
}
sim.display({firstname:"shas",lastname:"sup"})


var job = {
Name : "Venkatesh db",
Designation : "Director",
Companyname : "JAI Venkateswara Technologies Private Limited",
Website : "http://www.jvtechnologies.co.in/",
display : function(obj:{firstname:string,lastname:string}){}
}
job.display = function(obj:{firstname:string,lastname:string}){
console.log(job.Name,job.Designation,job.Companyname,job.Website);
}
job.display({firstname:"chetan",lastname:"chavan"})

var bus = {
Travels : "GreenLine Travels And Holidays",
Arriveduration : "11:30 PM -05:30 AM",
Duration : "06:00 Hrs",
Seats : "18 seats",
Fare : "4700 delhi agra",
display : function(obj:{firstname:string,lastname:string}){}
}
bus.display = function(obj:{firstname:string,lastname:string}){
console.log(bus.Travels,bus.Arriveduration,bus.Duration,bus.Seats,bus.Fare,obj);
}
bus.display({firstname:"dinesh",lastname:"pawar"})
