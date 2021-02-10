class library{
    BookID:number;
    Bookname:string;
    Bookauthor:string;
    Issuedate:string;
    Duedate:string;
    IDNo:string;
    Name:string;
    Returnon:string;
    Fine:number;
    constructor(BookID:number,Bookname:string,Bookauthor:string,Issuedate:string,Duedate:string,IDNo:string,Name:string,Returnon:string,Fine:number){
this.BookID = BookID;
this.Bookname = Bookname;
this.Bookauthor = Bookauthor;
this.Issuedate = Issuedate;
this.Duedate = Duedate;
this.IDNo =IDNo;
this.Name = Name;
this.Returnon = Returnon;
this.Fine = Fine;
}
display(){
    console.log(this.BookID,this.Bookname,this.Bookauthor,this.Issuedate,this.Duedate,this.IDNo,this.Name,this.Returnon,this.Fine);
}
}
var rock = new library(12345634,"C Programming","Dennis Ritche","14/01/2012","13/02/2012","2008Ec027","Saravanan","25/02/2012",12)
rock.display()

class Speedpost{
    Postofficedetails:string;
    trackingnumber:string;
    CounterNo:number;
    opcode:number;
    Fromaddress:string;
    Toaddress:string;
    wgt:string;
    Amt:string;
    datetime:string;
    Taxes:string;
    constructor(Postofficedetails:string,trackingnumber:string,CounterNo:number,opcode:number,Fromaddress:string,Toaddress:string,wgt:string,Amt:string,datetime:string,Taxes:string){
this.Postofficedetails = Postofficedetails;
this.trackingnumber = trackingnumber;
this.CounterNo = CounterNo;
this.opcode = opcode;
this.Fromaddress = Fromaddress;
this.Toaddress= Toaddress;
this.wgt = wgt;
this.Amt = Amt;
this.datetime = datetime;
this.Taxes = Taxes;
}
display(){
    console.log(this.Postofficedetails,this.trackingnumber,this.CounterNo,this.opcode,this.Fromaddress,this.Toaddress,this.wgt,this.Amt,this.datetime,this.Taxes);
}
}
var guru = new Speedpost( "New Thipasundra<423203>","EM423395510IN",1,12,"xxxxx","xxxxx","20gms","39.00","08/04/2013 16:01","Rs.4.00")
guru.display()


class bank_details{
    Accountname:string;
    Address:string;
    Date:string;
    Accountnumber:number;
    Accountdescription:string;
    Branch:string;
    Drawingpower:string;
    Interestrate:string;
    MODBal:string;
    CIFNo:number;
    IFSCode:string;
    MICRCode:number;
    Nominationregistered:string;
    HOMELOANAmount:string;
    Interest:string;
    Loantenure:string;
    Loanemi:string;
    Totalinterestpayable:string;
    Totalpayment:string;
    Personalloanamount:string;
    constructor(Accountname:string,Address:string,Date:string,Accountnumber:number,Accountdescription:string,Branch:string,Drawingpower:string,Interest:string,MODBal:string,CIFNo:number,IFSCode:string,MICRCode:number,Nominationregistered:string,HOMELOANAmount:string,Interestrate:string,Loantenure:string,Loanemi:string,Totalinterestpayable:string,Totalpayment:string,Personalloanamount:string){
this.Accountname = Accountname;
this.Address = Address;
this.Date = Date;
this.Accountnumber = Accountnumber;
this.Accountdescription = Accountdescription;
this.Branch = Branch;
this.Drawingpower = Drawingpower;
this.Interestrate = Interestrate;
this.MODBal = MODBal;
this.CIFNo = CIFNo;
this.IFSCode = IFSCode;
this.MICRCode = MICRCode;
this.Nominationregistered = Nominationregistered;
this.HOMELOANAmount = HOMELOANAmount;
this.Interest = Interest;
this.Loantenure = Loantenure;
this.Loanemi = Loanemi;
this.Totalinterestpayable = Totalinterestpayable;
this.Totalpayment = Totalpayment;
this.Personalloanamount = Personalloanamount;
}
display()
{
    console.log(this.Accountname,this.Address,this.Date,this.Accountnumber,this.Accountdescription,this.Branch,this.Drawingpower,this.Interestrate,this.MODBal,this.CIFNo,this.IFSCode,this.MICRCode,this.Nominationregistered,this.HOMELOANAmount,this.Interestrate,this.Loantenure,this.Loanemi,this.Totalinterestpayable,this.Totalpayment,this.Personalloanamount);
}
}
var sandy = new bank_details("Mr. VENKATESH DUSETTI BABU","NO 233, GROUND FLOOR, 5TH main 1ST FLOOR, NEW THIPPASANDRA BANGALORE-560075", "24 Dec 2015",167856041,"SBCHQ-GEN-PUB-IND-NONRURAL-INR","NEW TIPPASANDRA, BANGALORE","0.00","4.0","0.00",86617689795,"SBIN0015645",560002189,"Yes","50,00,000","10.5","20 Yr or Months","49,919","69,80,559","1,19,80,559","3,50,000");
sandy.display()


class Tablet{
    Mfg:string;
    Comp:string;
    Form:string;
    Packsize:number;
    Deliverytime:string;
    MRP:string;
    constructor(Mfg:string,Comp:string,Form:string,Packsize:number,Deliverytime:string,MRP:string){
this.Mfg = Mfg;
this.Comp = Comp;
this.Form = Form;
this.Packsize = Packsize;
this.Deliverytime = Deliverytime;
this.MRP = MRP;
}
display()
{
    console.log(this.Mfg,this.Comp,this.Form,this.Packsize,this.Deliverytime,this.MRP)
}
}
var raghu = new Tablet("MICRO","Paracetamol 650 MG","Tablet",15,"4 - 24 HRS","Rs. 33.46 Save upto 15%" )
raghu.display()


class perfume{
    Brand:string;
    Productcode:string;
    Weight:string;
    Box:string;
    Quantity:string;
    Effectiveprice:string;
    constructor(Brand:string,Productcode:string,Weight:string,Box:string,Quantity:string,Effectiveprice:string){
this.Brand = Brand;
this.Productcode = Productcode;
this.Weight = Weight;
this.Box = Box;
this.Quantity = Quantity;
this.Effectiveprice = Effectiveprice;
}
display()
{
    console.log(this.Brand,this.Productcode,this.Weight,this.Box,this.Quantity,this.Effectiveprice);
}
}
var sai = new perfume("Concept","AUTCOMBO-OF- CONVIVA67682242A608C","150 gm","2 Perfumes","70 ml each","Rs 194 after cashback")
sai.display()

class watch{
    Itemcode:number;
    Rs:number;
    Type:string;
  //  Cas
    Dial:string;
    Strap:string;
    Clasptype:string;
    Occassion:string;
    Movement:string;
    Others:string;
    constructor(Itemcode:number,Rs:number,Type:string,Dial:string,Strap:string,Clasptype:string,Occasion:string,Movement:string,Others:string){
this.Itemcode = Itemcode;
this.Rs = Rs;
this.Type = Type;
//this.Cas = Case
this.Dial = Dial;
this.Strap = Strap;
this.Clasptype = Clasptype;
this.Occassion = Occasion;
this.Movement = Movement;
this.Others = Others;
}
display(){
    console.log(this.Itemcode,this.Rs,this.Type,this.Dial,this.Strap,this.Clasptype,this.Occassion,this.Movement,this.Others);
}
}
var rakesh = new watch(131843,349,"Analog Watch","Round Dial","Fibre","Buckle","Casual","PC21 Movement","One Year Warranty");
rakesh.display();