class Car{
    CITY:string;
    FUELTYPE:string;
    KMSDriven:string;
    COLOUR:string;
    NUMBEROFOWNERS:string;
    POWERSTEERING:string;
    INSURANCETYPE:string;
    INSURANCEEXPIRY:string;
    MANUFACTURINGYEAR:string;
    DATEOFREGISTRATION:string;
    REGISTRATIONTYPE:string;
    RTOLOCATION:string;
    constructor(CITY:string,FUELTYPE:string,KMSDriven:string,COLOUR:string,NUMBEROFOWNERS:string,POWERSTEERING:string,INSURANCETYPE:string,INSURANCEEXPIRY:string,MANUFACTURINGYEAR:string,DATEOFREGISTRATION:string,REGISTRATIONTYPE:string,RTOLOCATION:string){
this.CITY = CITY;
this.FUELTYPE = FUELTYPE;
this.KMSDriven = KMSDriven;
this.COLOUR = COLOUR;
this.NUMBEROFOWNERS = NUMBEROFOWNERS;
this.POWERSTEERING = POWERSTEERING;
this.INSURANCETYPE = INSURANCETYPE;
this.INSURANCEEXPIRY = INSURANCEEXPIRY;
this.MANUFACTURINGYEAR = MANUFACTURINGYEAR;
this.DATEOFREGISTRATION = DATEOFREGISTRATION;
this.REGISTRATIONTYPE = REGISTRATIONTYPE;
this.RTOLOCATION = RTOLOCATION;
}
display(){
    console.log(this.CITY,this.FUELTYPE,this.KMSDriven,this.COLOUR,this.NUMBEROFOWNERS,this.POWERSTEERING,this.INSURANCETYPE,this.INSURANCEEXPIRY,this.MANUFACTURINGYEAR,this.DATEOFREGISTRATION,this.REGISTRATIONTYPE,this.RTOLOCATION);
}
}
var sandesh =  new Car("Kolkata","Petrol","29,479 KM", "Brown","1","Yes","Expired","NA","2012","25-May-2012","Individual","beltala");
sandesh.display();

class Store{
    Drive:string;
    Type:string;
    Totalsize:string;
    Freesize:string;
    constructor(Drive:string,Type:string,Totalsize:string,Freesize:string)
    {
this.Drive = Drive;
this.Type = Type;
this.Totalsize = Totalsize;
this.Freesize = Freesize;
}
display()
{
console.log(this.Drive,this.Type,this.Totalsize,this.Freesize);
}
}
var paone = new Store("C","localdisk","97.5 GB","59.2 GB");
paone.display();

class Os{
    OSsName:string;
    OSVersion:string;
    constructor(OSName:string,OSVersion:string)
    {
this.OSsName = OSName;
this.OSVersion = OSVersion;
}
display(){
console.log(this.OSsName,this.OSVersion);
}
}
var anush = new Os("windows","2.6");
anush.display();

class Netbill{
    InvoiceNo:number;
    Period:string;
    Servicetype:string;
    Description:string;
    Package:string;
    Rate:string;
    Unit:string;
    Quantity:string;
    Amount:string;
    Tax:string;
    Total:string;
    constructor(InvoiceNo:number,Period:string,Servicetype:string,Description:string,Package:string,Rate:string,Unit:string,Quantity:string,Amount:string,Tax:string,Total:string){
this.InvoiceNo = InvoiceNo;
this.Period = Period;
this.Servicetype = Servicetype;
this.Description = Description;
this.Package = Package;
this.Rate = Rate;
this.Unit = Unit;
this.Quantity = Quantity;
this.Amount = Amount;
this.Tax  = Tax;
this.Total = Total;
}
display(){
console.log(this.InvoiceNo,this.Period,this.Servicetype,this.Description,this.Package,this.Rate,this.Unit,this.Quantity,this.Amount,this.Tax,this.Total);
}
}
var vee = new Netbill( 7411172,"01/11/2015-30/11/2015","Internetaccess","Monthly Subscription charges","ACT Blaze","1,049.00","Per Month","30 Days","1,049.00","140.71","1,189.71");
vee.display();

class Sim{
    airtelnumber:number;
    Accountnumber:number;
    Billperiod:string;
    constructor(airtelnumber:number,Accountnumber:number,Billperiod:string){
this.airtelnumber = airtelnumber;
this.Accountnumber = Accountnumber;
this.Billperiod = Billperiod;
}
display(){
console.log(this.airtelnumber,this.Accountnumber,this.Billperiod);
}
}
var realme = new Sim(9845042214,1025489139,"17-Dec-2012 to 16-jan-2015");
realme.display();

class Job{
    Name:string;
    Designation:string;
    Companyname:string;
    Website:string;
    constructor(Name:string,Designation:string,Companyname:string,Website:string){
this.Name = Name;
this.Designation = Designation;
this.Companyname = Companyname;
this.Website = Website;
}
display()
{
console.log(this.Name,this.Designation,this.Companyname,this.Website);
}
}
var yashika = new Job("Venkatesh db","Director","JAI Venkateswara Technologies Private Limited","http://www.jvtechnologies.co.in/");
yashika.display();

class Bus{
    Travels:string;
    Arriveduration:string;
    Duration:string;
    Seats:string;
    Fare:string;
    constructor(Travels:string,Arriveduration:string,Duration:string,Seats:string,Fare:string){
this.Travels = Travels;
this.Arriveduration = Arriveduration;
this.Duration = Duration;
this.Seats = Seats;
this.Fare = Fare;
}
display(){
console.log(this.Travels,this.Arriveduration,this.Duration,this.Seats,this.Fare);
}
}

var jiyaan = new Bus( "GreenLine Travels And Holidays","11:30 PM -05:30 AM","06:00 Hrs","18 seats","4700 delhi agra");
jiyaan.display();
