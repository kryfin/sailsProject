/**
 * AccountsController
 *
 * @description :: Server-side logic for managing accounts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 var bcrypt = require('bcrypt-nodejs');



/**
 * PersonController
 *
 * @description :: Server-side logic for managing people
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
 /**
   * Action blueprints:
   *    `/person/create`
   */
   create: function (req, res) {
    
    // Send a JSON response
    /*return res.json({
      
      hello: 'world'
    });*/
    var params=req.param("Account");

    

        if(req.method=="POST"&&req.param("Account",null)!=null)
    {
      // Person.attributes=req.param("Person",null);
       params.accountPassword=bcrypt.hashSync(params.accountPassword);
    Accounts.create(params, function(err, model) {

          // Error handling
        if (err) {
        //  return console.log(err);
            res.send("Error");

        // The User was created successfully!
        }else {
             res.redirect( 'accounts/view/'+model.accountId);
          
        }
         
         
      });
     
    }
    else
    {
      
      res.render( 'accounts/create');
    }
 
       
  },


  /**
   * Action blueprints:
   *    `/person/update`
   */
   update: function (req, res) {
    
         var id=req.param("id",null);

    

        Accounts.findOne({ where: { accountId : id }}).exec(function(err, model) {
       

                   // res.send(model);
          // return;

            if(req.method=="POST"&&req.param("Account",null)!=null)
          {
              
               var p=req.param("Account",null);


        
             model.accountName=p.accountName;
             model.accountPassword=bcrypt.hashSync(p.accountPassword);
             model.personId=p.personId;
             model.roleId=p.roleId;
             
             model.save(function(err){
              
            
            // Error handling
              if (err) {
              //  return console.log(err);
                  res.send("Error");

              // The User was created successfully!
              }else {
                  /*
                 res.send(model);
                       return;
                        */
                  res.redirect( 'accounts/view/'+model.accountId);
                
              }
              
              
            });
          
          }
          else
          {
            
            res.render( 'accounts/update',{'model':model});
          }
          

    });
      
       
  },


  /**
   * Action blueprints:
   *    `/person/delete`
   */
   delete: function (req, res) {
    
      var id=req.param("id",null);
    
      Accounts.findOne({ where: { accountId : id }}).exec(function(err, user) {

      // we now have a model with instance methods attached

      // destroy the record
      user.destroy(function(err) {
          
        res.redirect( 'accounts/index/');
          
        // record has been removed
      });

    });
   
  },


  /**
   * Action blueprints:
   *    `/person/view`
   */
   view: function (req, res) {
    
    // Send a JSON response
    
    
      var id=req.param("id",null);

      // 


Accounts.findOne({ where: { accountId : id }}).exec(function(err, model) {
    // some logic


          res.render( 'accounts/view',{'model':model});   
     
});


     
           // res.send(model);
            //return;
    //         console.log(model);
    // process.exit();
 //        res.render( 'person/view',{'model':model});  
     
      
    /*
    return res.json({
      hello: 'world'
    });
    */
  },


  /**
   * Action blueprints:
   *    `/person/index`
   *    `/person`
   */
   index: function (req, res) {
    
        
         Accounts.find().exec(function(err, accounts) {
      


       res.render( 'accounts/index',{'accounts':accounts});
       return;
           // user.password doesn't exist
         });
    /*
    // Send a JSON response
    return res.json({
      hello: 'world'
    });
    */
  },




  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to PersonController)
   */
  _config: {}











};

