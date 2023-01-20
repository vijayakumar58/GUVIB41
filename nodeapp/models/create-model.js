var db=require('../../server/mysql-server');

module.exports={
    create:function(input,cb){
     var mySql= 'INSERT INTO crud SET ?';
     db.query(mySql, input, function(err, data){
        if(err){
            throw err;
        }
        return cb(data);
     } )
    }
    
}