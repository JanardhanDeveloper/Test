var db;
var dbCreated = false;
 
var scroll = new iScroll('wrapper',{
 vScrollbar : false,
 hScrollbar : false,
 hScroll : false
});
document.addEventListener("deviceready", onDeviceReady, false);



     function onDeviceReady()
     {
         alert("How Are You janardhan?");
         var db = window.openDatabase("Janardhan DB", "1.0", "Here Is Database", 200000); //will create database Dummy_DB or open it
         db.transaction(populateDB, errorCB, successCB);
     }

     function insertNewLine(tx)
     {

        alert("Data New Lineooooooooooo");
        alert(document.getElementById("demo").value);


         tx.executeSql("INSERT INTO Prab (Email, Password ,DropDown) VALUES (?,?,?)", [ document.getElementById("email").value , document.getElementById("password").value , document.getElementById("demo").value]);



         alert( document.getElementById("email").value +" Email inserted");
         alert( document.getElementById("password").value +" password inserted");
         alert( document.getElementById("demo").value +" demo inserted");

        alert("Data Inserted");
     }



     function populateDB(tx)
     {
         alert("data onDeviceReady123");
         tx.executeSql('CREATE TABLE IF NOT EXISTS Prab (id INTEGER PRIMARY KEY AUTOINCREMENT, Email TEXT NOT NULL, Password TEXT NOT NULL ,DropDown TEXT NOT NULL  )');
         var db = window.openDatabase("Janardhan DB", "1.0", "Here Is Database", 200000); //will create database Dummy_DB or open it
         db.transaction(insertNewLine);
         alert("Database Created");
     }

     function errorCB(err)
     {
        alert("Error processing SQL: "+err.code);
     }

     function successCB()
     {
         alert("success1111111!");
         var db = window.openDatabase("Janardhan DB", "1.0", "Here Is Database", 200000); //will create database Dummy_DB or open it
         db.transaction(queryDB,errorCB);
         alert("Called! queryDB ");

     }


 //select all from SoccerPlayer
    function queryDB(tx)
    {
        alert("select from database!");
        tx.executeSql('SELECT * FROM Prab Limit 1',[],querySuccess1,errorCB);

    }

    function querySuccess(tx,results)
    {
       alert("Query success:");


       /*
       $('#MyFriendsList').empty();
        $.each(result.rows,function(index){
            var row = result.rows.item(index);
            $('#MyFriendsList').append('<li><a href="#"><h3 class="ui-li-heading">'+row['Email']+'</h3><p class="ui-li-desc">Club '+row['Password']+'</p></a></li>');
        });

         alert("showing row data:"+row);
         $('#MyFriendsList').listview();
        */

        /*
                   var len = results.rows.length;
                   alert("hi");
                   for(var i=0; i<len; i++)
                   {
                     //console.log("Row = " + i + " email = " + results.rows.item(i).email + " password =  " + result.rows.item(i).password);
                     alert(" email = " + results.rows.item(i).Email + " password =  " + result.rows.item(i).Password));
                   }
                  */

         //document.getElementById("email").value=results.rows.item(1).email;
         //document.getElementById("password").value=results.rows.item(1).password;
         //document.getElementById("date").value=results.rows.item(1).date;
         //alert("showing row data:"+results.rows.item(1).email);



    }

    function querySuccess1(tx,results)
    {
           alert("Query success:");
           var len = results.rows.length;
           alert(" email = " + results.rows.item(0).Email);
           alert(" password = " + results.rows.item(0).Password);
           //alert(" date = " + results.rows.item(0).Date);

           document.getElementById("email").value=results.rows.item(0).Email;
           document.getElementById("password").value=results.rows.item(0).Password;
           //document.getElementById("date").value=results.rows.item(0).Date;
           document.getElementById("demo").value=results.rows.item(0).DropDown;

    }



