<script>

class corporateinfo{
    constructor(companyname,designation,salary,location){
this.Companyname = companyname
this.Designation = designation
this.Salary = salary
this.Location = location
}
display(){
document.write(this.Companyname,this.Designation,this.Salary,this.Location)
}
}
var venkatesh = new corporateinfo("JVT","trainee",5.5,"bangalore")
venkatesh.display()

class institute{
    constructor(name,eduqual,dob,address,number,mobile,email,itexp,skillandexp,repomanager,pan){
this.Name = name
this.EducationalQualification = eduqual
this.DateOfBirth = dob
this.CommunicationAddress = address
this.ResidenceNumber = number
this.Mobile = mobile
this.Email = email
this.TotalITExp = itexp
this.SkillandRelevantExperience = skillandexp
this.ReportingManagers = repomanager
this.PancardNo = pan
}
display(){
document.write(this.Name,this.EducationalQualification,this.DateOfBirth,this.CommunicationAddress,this.ResidenceNumber,this.Mobile,this.Email,this.TotalITExp,this.SkillandRelevantExperience,this.ReportingManagers,this.PancardNo)
}
}
var pawan = new institute("Jai Venkateswara Technologies","B TECH MCA MBA BSC MSC","2/6/1988","233/3 Ground floor new thippasandra",08025216666,9900367097,"venkatesh.db@gmail.com","1 years","C,CPP all Lang & 1 years","venkatesh","asu675901f")
pawan.display()


class broadbandconnection{
    constructor(accno,broadbanduserid,ipaddress){
this.AccountNo = accno
this.BroadbandUserID = broadbanduserid
this.IPAddress = ipaddress
}
display(){
document.write(this.AccountNo,this.BroadbandUserID,this.IPAddress)
}
}
var pawan = new broadbandconnection(1135497,11128550,"10.33.55.33")
pawan.display()

class netusage{
    constructor(totalmb,downloadspeed,uploadspeed){
this.totalmbdownloaded = totalmb
this.mobiledownloadspeed = downloadspeed
this.mobileuploadspeed = uploadspeed
}
display(){
document.write(this.totalmbdownloaded,this.mobiledownloadspeed,this.mobileuploadspeed)
}
}
var pawan = new netusage("21.06gb","30.04mb","32.06mb")
pawan.display()

class tirupati{
    constructor(tickettype,date,day,time,perslottickets,bookingno,pilgrim,orderno,email,amountinfigures,aadhaarcard,bookeddatetime,noofpersons,seva,reportingtime,performancedatetime,privilegestotheseva,bookedtime,Accommodationtype,available,NoofTickets,Rate)
    {
this.Tickettype = tickettype
this.Date = date
this.Day = day
this.Time = time
this.Perslottickets = perslottickets
this.BookingNo = bookingno
this.NameofthePilgrim = pilgrim
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
this.Rate = Rate
}
display(){
document.write(this.Tickettype,this.Date,this.Day,this.Time,this.Perslottickets,this.BookingNo,this.NameofthePilgrim,this.OrderNo,this.Email,this.Amountinfigures,this.AadhaarCard,this.BookedDateTime,this.NoofPersons,this.Seva,this.ReportingTime,this.PerformanceDateTime,this.PrivilegestotheSeva,this.BookedTime,this.AccommodationType,this.Available,this.NoofTickets,this.Rate)
}
}
var pawan = new tirupati("Specialentrydarshan","Dec 1st","Tuesday","3:30 Am",2000,"IS151110080016","venkatesh",010600013554,"venkateshprofessional7@gmail.com","220.00",733498928758,"11062015 11:36:46","Two Small Laddu","11:36:46","Rs 500 Tirumala",350,1,"50 to 200")
pawan.display()

class resume{
    constructor(from,to,date,subject,mailedby,signedby){
this.from = from
this.to = to
this.date = date
this.subject = subject
this.mailedby = mailedby
this.signedby = signedby
}
display(){
document.write(this.from,this.to,this.date,this.subject,this.mailedby,this.signedby)
}
}
var pawan = new resume("Siva Prasad <kasi.sivap@gmail.com>","D B Venkatesh <venkatesh.db@gmail.com>","Fri, Nov 27, 2015 at 12:05 AM","Request to forward the Resumes","gmail.com","gmail.com")
pawan.display()

class details{
    constructor(name,age,gender,emailaddress,address,city,state,ZiporPincode,country,mobileno,photoid,photoidno){
this.Name = name
this.Age = age
this.Gender = gender
this.Emailaddress = emailaddress
this.Address = address
this.City = city
this.State = state
this.ZiporPincode = ZiporPincode
this.Country = country
this.MobileNo = mobileno
this.PhotoID = photoid
this.PhotoIDNo = photoidno
}
display(){
document.write(this.Name,this.Age,this.Gender,this.Emailaddress,this.Address,this.City,this.State,this.ZiporPincode,this.Country,this.MobileNo,this.PhotoID,this.PhotoIDNo)
}
}
var pawan = new details("venkatesh",25,"male","venkatesh.db@gmail.com","beml main road","bangalore","karnataka",560075,"india",9900887755,"passport","G3G6HHY")
pawan.display()

class creditcard{
    constructor(ccnumber,outstanding,minimum){
this.Creditcardnumber = ccnumber
this.Outstanding = outstanding
this.Minimum = minimum
}
display(){
document.write(this.Creditcardnumber,this.Outstanding,this.Minimum)
}
}
var pawan = new creditcard(61465753283497894,"571.36","254.55")
pawan.display()

class bill{
    constructor(outstandingtotal,unbilled,lastpaymentmadeamt,creditlimit,available,Cashlimittotal){
this.Outstandingtotal = outstandingtotal
this.Unbilled =  unbilled
this.LastpaymentmadeAmount = lastpaymentmadeamt 
this.Creditlimittotal = creditlimit
this.Available = available
this.Cashlimittotal = Cashlimittotal
}
display(){
document.write(this.Outstandingtotal,this.Unbilled,this.LastpaymentmadeAmount,this.Creditlimittotal,this.Available,this.Cashlimittotal)
}
}
var pawan = new bill(4363576,53785,57595,6768,87987,56765)
pawan.display()


class biodata{
    constructor(weight,height,eyecolour,gender,homeaddress,homephone,mobile,state,Country){
this.weight = weight
this.height = height
this.eyecolour =  eyecolour
this.Gender = gender
this.Homeaddress =  homeaddress
this.Homephone = homephone
this.Mobile =  mobile
this.State = state
this.Country = Country
}
display(){
document.write(this.weight,this.height,this.eyecolour,this.Gender,this.Homeaddress,this.Homephone,this.Mobile,this.State,this.Country)
}
}
var pawan = new biodata(55,"5.8","brown","male","#6/96,rajampet,kadapa.",975545445,8553577745,"andhrapradesh","india")
pawan.display()

class Vehicleinformation{
    constructor(vehicletype,carcolour,enginenumber,chassisnumber,companyname){
this.Vehicletype =  vehicletype
this.carcolour = carcolour
this.Enginenumber = enginenumber
this.Chassisnumber = chassisnumber 
this.Company = companyname
}
display(){
document.write(this.Vehicletype,this.carcolour,this.Enginenumber,this.Chassisnumber,this.Company)
}
}    
var pawan = new Vehicleinformation("light motor vehicle","red","kp98gtyihh457797","tc5678898335r45","BMW")
pawan.display()

class Systemproperties{
    constructor(rating,processor,installedmemory,systemtype,penandtouch,computername,computerdescription,WindowsEdition,WindowsProductID){
this.Rating = rating
this.Processor = processor
this.InstalledMemory= installedmemory
this.SystemType = systemtype
this.PenandTouch = penandtouch
this.ComputerName = computername
this.ComputerDescription = computerdescription
this.WindowsEdition = WindowsEdition
this.WindowsProductID = WindowsProductID
}
display(){
document.write(this.Rating,this.Processor,this.InstalledMemory,this.SystemType,this.PenandTouch,this.ComputerName,this.ComputerDescription,this.WindowsEdition,this.WindowsProductID)
}
}
var pawan = new Systemproperties("4.5","intel","4.00gb","64-bit os","No Pen or Touch Input is available for this Display","BALU-PC","workgroup","Windows 7 Ultimate","00426-OEM-8992662-00497")
pawan.display()

class theatre{
    constructor(theatrename,multiplexscreen,moviename,moviecertification,classs,priceperticket,Numberoftickets,seatnumbers,Totalamount){
this.Theatrename = theatrename 
this.multiplexscreen = multiplexscreen 
this.moviename = moviename
this.moviecertification = moviecertification 
this.classs = classs 
this.priceperticket = priceperticket 
this.Numberoftickets = Numberoftickets
this.seatnumbers = seatnumbers
this.Totalamount = Totalamount
}
display(){
document.write(this.Theatrename,this.multiplexscreen,this.moviename,this.moviecertification,this.classs,this.priceperticket,this.Numberoftickets,this.seatnumbers,this.Totalamount)
}
}
var pawan = new theatre("PSS","screen 3","jvt","U","first","rs. 1050",5,"c1,c2,c3,c4,c5","Rs.750.00")
pawan.display()

class Creatinggoogleaccount{
    constructor(Firstname,Lastname,Chooseusername,CreataPassword,Confirmyourpassword,Birthday,Gender,Mobile,Yourcurrentemailaddress){
this.Firstname = Firstname
this.Lastname = Lastname
this.Chooseusername = Chooseusername
this.CreataPassword = CreataPassword
this.Confirmyourpassword = Confirmyourpassword
this.Birthday = Birthday
this.Gender = Gender
this.Mobile = Mobile
this.Yourcurrentemailaddress = Yourcurrentemailaddress
}
display(){
document.write(this.Firstname,this.Lastname,this.Chooseusername,this.CreataPassword,this.Confirmyourpassword,this.Birthday,this.Gender,this.Mobile,this.Yourcurrentemailaddress)
}
}
var pawan = new Creatinggoogleaccount("venkatesh","d b","jvt","balu","balu","2-6-1986","male",9900367097,"venkatesh.db@gmail.com")
pawan.display()

class bloodtest{
    constructor(Patientname,PatientID,Patientphone,Billno,Age,Dateofbirth,Gender,Fasting,Patientaddress,RoomNo){
this.Patientname = Patientname
this.PatientID = PatientID
this.Patientphone = Patientphone
this.Billno = Billno
this.Age = Age
this.Dateofbirth = Dateofbirth
this.Gender = Gender
this.Fasting = Fasting
this.Patientaddress = Patientaddress
this.RoomNo = RoomNo
}
display()
{
document.write(this.Patientname,this.PatientID,this.Patientphone,this.Billno,this.Age,this.Dateofbirth,this.Gender,this.Fasting,this.Patientaddress,this.RoomNo)
}
}
var pawan = new bloodtest("Sathish",10567890890,044222738,56725, 34,"15/05/1991","Male","Yes","7f,kaveri road, velur.",105)
pawan.display()

class Bankstatement{
    constructor(Bankname,Date,Time,ATMNo,cardno,branchname,TxnNo,Responsecode,Withdrawl,Fromacc,Modrs,AvailablebalRs,Website){
this.Bankname = Bankname
this.Date =  Date
this.Time = Time
this.ATMNo = ATMNo
this.cardno = cardno
this.branchname = branchname
this.TxnNo = TxnNo
this.Responsecode = Responsecode
this.Withdrawl = Withdrawl
this.Fromacc = Fromacc
this.Modrs = Modrs
this.AvailablebalRs = AvailablebalRs
this.Website = Website
}
display(){
document.write(this.Bankname,this.Date,this.Time,this.ATMNo,this.cardno,this.branchname,this.TxnNo,this.Responsecode,this.Withdrawl,this.Fromacc,this.Modrs,this.AvailablebalRs,this.Website)
}
}
var pawan = new Bankstatement("SBI Bank","29/05/14","19:48","SJNBL48","xxxx xxxxx xxxx 0516","Bangalore Main Branch", 2907,072,"500.00","xxxxxxxxxx05 xx01","0.00","1000.00","www.statebankof india.com")
pawan.display()


class computerupsspecs{
    constructor(model,ipvoltage,frequency,opvoltage,batterytype,batterycapacity,batterybackup,rechargetime,weight){
this.model = model
this.ipvoltage = ipvoltage 
this.frequency = frequency
this.opvoltage = opvoltage
this.batterytype = batterytype 
this.batterycapacity = batterycapacity 
this.batterybackup = batterybackup
this.rechargetime = rechargetime 
this.weight = weight
}
display()
{
document.write(this.model,this.ipvoltage,this.frequency,this.opvoltage,this.batterytype,this.batterycapacity,this.batterybackup,this.rechargetime,this.weight)
}
}
var pawan = new computerupsspecs("exide-digital600", "230v ac","50hz","230v ac","sealed maintenance free","12volt 7Ah","12 to 20 mints","5 to 6 hours","6.1 kg"  )
pawan.display()


class visitingcarddetails{
    constructor(name,mailid,contactno,companyname,designation,address){

this.name = name
this.mailid = mailid 
this.contactno = contactno 
this.companyname = companyname
this.designation = designation 
this.address = address
}
display(){
    document.write(this.name,this.mailid,this.contactno,this.companyname,this.designation,this.address)
}
}
var pawan  = new visitingcarddetails("naresh","naresh.jvt@gmail.com","+919944860792","jvt","programmer","230/3 2nd floor hal3rd stage new thippasandra bangalore-560075."  )
pawan.display()

class ebill{
    constructor(website,username,password,consumernumber,billingstatus,modeofpayment,choosebank,usernam,passwd,Transno,paystatus){
this.website = website
this.username = username
this.password = password
this.consumernumber = consumernumber 
this.billingstatus = billingstatus
this.modeofpayment = modeofpayment 
this.choosebank = choosebank
this.usernam = usernam
this.passwd = passwd
this.Transno = Transno
this.paystatus = paystatus
}
display(){
document.write(this.website,this.username,this.password,this.consumernumber,this.billingstatus,this.modeofpayment,this.choosebank,this.usernam,this.passwd,this.Transno,this.paystatus)
}
}
var pawan = new ebill("www.tnebnet.org","agilan",1234567,5785875,"paidorunpaid","netbanking","sbi","kumar007",123445,"18cv21828578437","successful" )
pawan.display()


class apparel{
    constructor(Brand,Productcode,Color,Size,Material,Occasion,Pattern,Sleeve,Necktype,Fit,Gender,Estimatedarrival,Returnpolicy,Buy){
this.Brand = Brand
this.Productcode = Productcode
this.Color = Color
this.Size = Size
this.Material = Material
this.Occasion = Occasion
this.Pattern = Pattern
this.Sleeve = Sleeve
this.Necktype = Necktype
this.Fit = Fit
this.Gender = Gender
this.Estimatedarrival = Estimatedarrival
this.Returnpolicy = Returnpolicy
this.Buy = Buy
}
display(){
document.write(this.Brand,this.Productcode,this.Color,this.Size,this.Material,this.Occasion,this.Pattern,this.Sleeve,this.Necktype,this.Fit,this.Gender,this.Estimatedarrival,this.Returnpolicy,this.Buy)
}
}
var pawan = new apparel("Scott International", "APPSCOTT-INTERNSWIT610835D77A441","Black","S","Cotton","Casual","Solid","Full Sleeves","Hooded","Slim","Men","9 days","Seller will accept returns within a 15 days from date of delivery of the item",824)
pawan.display()

class features{
    constructor(os,chipset,CPU,GPU,Model,Manufactuer,Processor,RAM,Keyboard,storage,Flash,Videocallcamera,Videorecording,Noicecancelling,Expandablestorage){ 
this.os = os
this.chipset = chipset
this.CPU = CPU
this.GPU = GPU 
this.Model = Model
this.Manufactuer = Manufactuer
this.Processor = Processor
this.RAM = RAM
this.Keyboard = Keyboard
this.storage = storage
this.Flash = Flash
this.Videocallcamera = Videocallcamera
this.Videorecording = Videorecording
this.Noicecancelling = Noicecancelling
this.Expandablestorage = Expandablestorage
}
display(){
    document.write(this.os,this.chipset,this.CPU,this.GPU,this.Model,this.Manufactuer,this.Processor,this.RAM,this.Keyboard,this.storage,this.Flash,this.Videocallcamera,this.Videorecording,this.Noicecancelling,this.Expandablestorage)
}
}
var pawan = new features( "iOS 9, upgradable to iOS 9.2","Apple A9","Dual-core 1.84 GHz Twister","PowerVR GT7600","iphone","Apple","1 GHZ","512Mb","Software","16GBor32Gb","LED","VGA","720 F", "2 microphones","No")
pawan.display()

class platform{
    constructor(OS,Chipset,CPU,GPU){
this.OS = OS
this.Chipset = Chipset
this.CPU = CPU
this.GPU = GPU
}
display(){
document.write(this.OS,this.Chipset,this.CPU,this.GPU)
}
}
var pawan = new platform("iOS 9, upgradable to iOS 9.2","Apple A9","Dual-core 1.84 GHz Twister","PowerVR GT7600")
pawan.display()

class battery{
    constructor(type,Standby,Talktime,Musicplay,networktechnology){
this. type = type
this. Standby = Standby
this. Talktime = Talktime
this. Musicplay = Musicplay
this. networktechnology = networktechnology
}
display(){
document.write(this.type,this.Standby,this.Talktime,this.Musicplay,this.networktechnology)
}
}
var pawan = new battery("Nonremovable Li-Po 1715 mAh battery","Up to 240 h","Up to 14 h","Up to 50 h","GSM / CDMA / HSPA / EVDO / LTE")
pawan.display()

class body{
    constructor(Dimensions,Weight,sim){
this.Dimensions = Dimensions
this.Weight = Weight
this.sim = sim
}
display(){
document.write(this.Dimensions,this.Weight,this.sim)
}
}
var pawan = new body("138.3 x 67.1 x 7.1 mm","143 g","nano sim")
pawan.display()

class workshopbill{
    constructor(billno,date,model,serialno){
this.billno = billno
this.date = date
this.model = model
this.serialno = serialno
}
display(){
document.write(this.billno,this.date,this.model,this.serialno)
}
}
var pawan = new workshopbill("15/wb/611,","16-12-2015,","bajaj 09,", "ka03 hs 7441,")
pawan.display()

class tvspecs{
    constructor(Model,LEDlighting,Sizes,Type,WirelessHDMI,USB,videoservice,price){
this.Model = Model
this.LEDlighting = LEDlighting
this.Sizes = Sizes
this.Type = Type
this.WirelessHDMI = WirelessHDMI
this.USB = USB
this.videoservice = videoservice
this.price = price
}
display(){
document.write(this.Model,this.LEDlighting,this.Sizes,this.Type,this.WirelessHDMI,this.USB,this.videoservice,this.price)
}
}
var pawan = new tvspecs("LG55LHX","Backlight w/Local Dimming","55 inches","240 Hz scanning Backlight","yes","USB 2.0","youtube",55000)
pawan.display()

class Laptopspecification{
    constructor(model,os,Processor,RAM,Screen,Resolution,Weight,Storage,Graphics,Networking,Batterylife,Cost){
this.model = model
this.os =  os
this.Processor = Processor
this.RAM = RAM
this.Screen = Screen
this.Resolution = Resolution
this.Weight = Weight
this.Storage = Storage
this.Graphics = Graphics
this.Networking = Networking
this.Batterylife = Batterylife
this.Cost = Cost
}
display(){
    document.write(this.model,this.os,this.Processor,this.RAM,this.Screen,this.Resolution,this.Weight,this.Storage,this.Graphics,this.Networking,this.Batterylife,this.Cost)
}
}
var pawan = new Laptopspecification("LGp430","Windows 7 home base, Premium or professional","Second Generation Intel Core i3,i5 or i7 processor","upto 8GB","14.0 inch HD-LCD -backlit","1366*768","4.28 pound","320GB","Intel HD Graphics","802.11 b/g/n,bluetooth 3.0","6-celBattery",50000)
pawan.display()

class Library{
    constructor(BookID,Bookname,Bookauthor,Issuedate,Duedate,IDNo,Name,Returnon,Fine){
this.BookID = BookID
this.Bookname = Bookname
this.Bookauthor = Bookauthor
this.Issuedate = Issuedate
this.Duedate = Duedate
this.IDNo =IDNo
this.Name = Name
this.Returnon = Returnon
this.Fine = Fine
}
display(){
    document.write(this.BookID,this.Bookname,this.Bookauthor,this.Issuedate,this.Duedate,this.IDNo,this.Name,this.Returnon,this.Fine)
}
}
var pawan = new Library(12345634,"C Programming","Dennis Ritche","14/01/2012","13/02/2012","2008Ec027","Saravanan","25/02/2012",12)
pawan.display()

class speedpost{
    constructor(Postofficedetails,trackingnumber,CounterNo,opcode,Fromaddress,Toaddress,wgt,Amt,datetime,Taxes){
this.Postofficedetails = Postofficedetails
this.trackingnumber = trackingnumber
this.CounterNo = CounterNo
this.opcode = opcode
this.Fromaddress = Fromaddress
this.Toaddress= Toaddress
this.wgt = wgt
this.Amt = Amt
this.datetime = datetime
this.Taxes = Taxes
}
display(){
    document.write(this.Postofficedetails,this.trackingnumber,this.CounterNo,this.opcode,this.Fromaddress,this.Toaddress,this.wgt,this.Amt,this.datetime,this.Taxes)
}
}
var pawan = new speedpost( "New Thipasundra<423203>","EM423395510IN",1,012,"xxxxx","xxxxx","20gms","39.00","08/04/2013 16:01","Rs.4.00")
pawan.display()
/*
class bankdetails{
    constructor(Accountname,Address,Date,Accountnumber,Accountdescription,Branch,Drawingpower,Interestrate,MODBal,CIFNo,IFSCode,MICRCode,Nominationregistered,HOMELOANAmount,Interestrate,Loantenure,Loanemi,Totalinterestpayable,Totalpayment,Personalloanamount){
this.Accountname = Accountname
this.Address = Address
this.Date = Date
this.Accountnumber = Accountnumber
this.Accountdescription = Accountdescription
this.Branch = Branch
this.Drawingpower = Drawingpower
this.Interestrate = Interestrate
this.MODBal = MODBal
this.CIFNo = CIFNo
this.IFSCode = IFSCode
this.MICRCode = MICRCode
this.Nominationregistered = Nominationregistered
this.HOMELOANAmount = HOMELOANAmount
this.Interestrate = Interestrate
this.Loantenure = Loantenure
this.Loanemi = Loanemi
this.Totalinterestpayable = Totalinterestpayable
this.Totalpayment = Totalpayment
this.Personalloanamount = Personalloanamount
}
display()
{
    document.write(this.Accountname,this.Address,this.Date,this.Accountnumber,this.Accountdescription,this.Branch,this.Drawingpower,this.Interestrate,this.MODBal,this.CIFNo,this.IFSCode,this.MICRCode,this.Nominationregistered,this.HOMELOANAmount,this.Interestrate,this.Loantenure,this.Loanemi,this.Totalinterestpayable,this.Totalpayment,this.Personalloanamount)
}
}
var pawan = new bankdetails("Mr. VENKATESH DUSETTI BABU","NO 233, GROUND FLOOR, 5TH main 1ST FLOOR, NEW THIPPASANDRA BANGALORE-560075", "24 Dec 2015",00000000167856041,"SBCHQ-GEN-PUB-IND-NONRURAL-INR","NEW TIPPASANDRA, BANGALORE","0.00","4.0","0.00",86617689795,"SBIN0015645",560002189,"Yes","50,00,000","10.5","20 Yr or Months","49,919","69,80,559","1,19,80,559","3,50,000")
pawan.display()
*/

class tablet{
    constructor(Mfg,Comp,Form,Packsize,Deliverytime,MRP){
this.Mfg = Mfg
this.Comp = Comp
this.Form = Form
this.Packsize = Packsize
this.Deliverytime = Deliverytime
this.MRP = MRP
}
display()
{
    document.write(this.Mfg,this.Comp,this.Form,this.Packsize,this.Deliverytime,this.MRP)
}
}
var pawan = new tablet("MICRO","Paracetamol 650 MG","Tablet",15,"4 - 24 HRS","Rs. 33.46 Save upto 15%" )
pawan.display()


class Perfume{
    constructor(Brand,Productcode,Weight,Box,Quantity,Effectiveprice){
this.Brand = Brand
this.Productcode = Productcode
this.Weight = Weight
this.Box = Box
this.Quantity = Quantity
this.Effectiveprice = Effectiveprice
}
display()
{
    document.write(this.Brand,this.Productcode,this.Weight,this.Box,this.Quantity,this.Effectiveprice)
}
}
var pawan = new Perfume("Concept","AUTCOMBO-OF- CONVIVA67682242A608C","150 gm","2 Perfumes","70 ml each","Rs 194 after cashback")
pawan.display()

class Watch{
    constructor(Itemcode,Rs,Type,Case,Dial,Strap,Clasptype,Occasion,Movement,Others){
this.Itemcode = Itemcode
this.Rs = Rs
this.Type = Type
this.Case = Case
this.Dial = Dial
this.Strap = Strap
this.Clasptype = Clasptype
this.Occassion = Occasion
this.Movement = Movement
this.Others = Others
}
display()
{
    document.write(this.Itemcode,this.Rs,this.Type,this.Case,this.Dial,this.Strap,this.Clasptype,this.Occassion,this.Movement,this.Others)
}
}
var pawan = new Watch(131843,349,"Analog Watch","Fibre Case with Steel Back","Round Dial","Fibre","Buckle","Casual","PC21 Movement","One Year Warranty")
pawan.display()

class car{
    constructor(CITY,FUELTYPE,KMSDriven,COLOUR,NUMBEROFOWNERS,POWERSTEERING,INSURANCETYPE,INSURANCEEXPIRY,MANUFACTURINGYEAR,DATEOFREGISTRATION,REGISTRATIONTYPE,RTOLOCATION){
this.CITY = CITY
this.FUELTYPE = FUELTYPE
this.KMSDriven = KMSDriven
this.COLOUR = COLOUR
this.NUMBEROFOWNERS = NUMBEROFOWNERS
this.POWERSTEERING = POWERSTEERING
this.INSURANCETYPE = INSURANCETYPE
this.INSURANCEEXPIRY = INSURANCEEXPIRY
this.MANUFACTURINGYEAR = MANUFACTURINGYEAR
this.DATEOFREGISTRATION = DATEOFREGISTRATION
this.REGISTRATIONTYPE = REGISTRATIONTYPE
this.RTOLOCATION = RTOLOCATION
}
display(){
    document.write(this.CITY,this.FUELTYPE,this.KMSDriven,this.COLOUR,this.NUMBEROFOWNERS,this.POWERSTEERING,this.INSURANCETYPE,this.INSURANCEEXPIRY,this.MANUFACTURINGYEAR,this.DATEOFREGISTRATION,this.REGISTRATIONTYPE,this.RTOLOCATION)
}
}
var pawan =  new car("Kolkata","Petrol","29,479 KM", "Brown",1,"Yes","Expired","NA",2012,"25-May-2012","Individual","beltala")
pawan.display()

class storage{
    constructor(Drive,Type,Totalsize,Freesize)
    {
this.Drive = Drive
this.Type = Type
this.Totalsize = Totalsize
this.Freesize = Freesize
}
display()
{
document.write(this.Drive,this.Type,this.Totalsize,this.Freesize)
}
}
var pawan = new storage("C","localdisk","97.5 GB","59.2 GB")
pawan.display()

class os{
    constructor(OSName,OSVersion)
    {
this.OSName = OSName
this.OSVersion = OSVersion
}
display()
{
document.write(this.OSName,this.OSVersion)
}
}
var pawan = new os("windows","2.6")
pawan.display()

class netbill{
    constructor(InvoiceNo,Period,Servicetype,Description,Package,Rate,Unit,Quantity,Amount,Tax,Total){
this.InvoiceNo = InvoiceNo
this.Period = Period
this.Servicetype = Servicetype
this.Description = Description
this.Package = Package
this.Rate = Rate
this.Unit = Unit
this.Quantity = Quantity
this.Amount = Amount
this.Tax  = Tax
this.Total = Total
}
display(){
document.write(this.InvoiceNo,this.Period,this.Servicetype,this.Description,this.Package,this.Rate,this.Unit,this.Quantity,this.Amount,this.Tax,this.Total)
}
}
var pawan = new netbill( 7411172,"01/11/2015-30/11/2015","Internetaccess","Monthly Subscription charges","ACT Blaze","1,049.00","Per Month","30 Days","1,049.00","140.71","1,189.71")
pawan.display()

class sim{
    constructor(airtelnumber,Accountnumber,Billnumber,Billperiod){
this.airtelnumber = airtelnumber
this.Accountnumber = Accountnumber
this.Billnumber = Billnumber
this.Billperiod = Billperiod
}
display(){
document.write(this.airtelnumber,this.Accountnumber,this.Billnumber,this.Billperiod)
}
}
var pawan = new sim(9845042214,1025489139,"17-Dec-2012 to 16-jan-2015")
pawan.display()

class job{
    constructor(Name,Designation,Companyname,Website){
this.Name = Name
this.Designation = Designation
this.Companyname = Companyname
this.Website = Website
}
display()
{
document.write(this.Name,this.Designation,this.Companyname,this.Website)
}
}
var pawan = new job("Venkatesh db","Director","JAI Venkateswara Technologies Private Limited","http://www.jvtechnologies.co.in/")
pawan.display()

class bus{
    constructor(Travels,Arriveduration,Duration,Seats,Fare){
this.Travels = Travels
this.Arriveduration = Arriveduration
this.Duration = Duration
this.Seats = Seats
this.Fare = Fare
}
display(){
document.write(this.Travels,this.Arriveduration,this.Duration,this.Seats,this.Fare)
}
}

var pawan = new bus( "GreenLine Travels And Holidays","11:30 PM -05:30 AM","06:00 Hrs","18 seats","4700 delhi agra")
pawan.display()

</script>