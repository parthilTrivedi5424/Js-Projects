console.log("Added features In the Library");
class Library{
    constructor(booklist)
    {
        this.booklist = booklist;
        this.issuedbooks = {
            bookname : ""
        };
    }
    issuebook(bookname,username){
        // let flag = false;
        // this.booklist.forEach(function(element){
        //     if(bookname == element)
        //     {
        //         flag = true;
        //     }
            // if(flag == true)
            // {
                if(this.issuedbooks[bookname] == undefined)
                {
                    this.issuedbooks[bookname] = bookname;
                    console.log(this.issuedbooks[bookname]+" Has Been Issued");
                }
                else
                {
                    console.log(bookname+" Has Already Been Issued");
                }
            // }
        // });
    }
    returnbook(bookname){
        console.log(this.issuedbooks[bookname]+" Has Been Returned");
        delete this.issuedbooks[bookname];
    }
    getbooklist(){
        this.booklist.forEach(function(element){
            console.log(element);  
        });
    }
}
let lobj = new Library(['book1','book2','book3','book4']);
lobj.getbooklist();
lobj.issuebook('book1','user1');
lobj.issuebook('book2','user1');
lobj.issuebook('book3','user1');
lobj.issuebook('book4','user1');
lobj.issuebook('book4','user1');
lobj.issuebook('book4','user1');
lobj.returnbook('book1');