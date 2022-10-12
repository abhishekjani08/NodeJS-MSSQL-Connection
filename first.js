const sql = require ('mssql/msnodesqlv8');
var config={
   // user:'CHOTAJANIII',
   // server:'localhost:5000',
   database:'master',
   // server:'CHOTAJANIII (SQL Server 15.0.2000.5 - CHOTAJANIII\Asus',
   server:'localhost\\CHOTAJANIII',
   driver:'msnodesqlv8',
   options:{
      trustedConnection:true
   }
};

sql.connect(config,function(err){
   if(err){
      console.log(err);

   }
   var request= new sql.Request();
   request.query('select * from dbo.spt_fallback_db', function(err,recordset){
      if(err){
         console.log(err);
   
      }
      else{
         console.log(recordset)
      }
   });
});
