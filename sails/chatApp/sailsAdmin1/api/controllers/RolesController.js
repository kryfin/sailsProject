/**
 * RolesController
 *
 * @description :: Server-side logic for managing roles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
  create: function (req, res) {
    
    // Send a JSON response
    /*return res.json({
      
      hello: 'world'
    });*/
    var params=req.param("Role");

        if(req.method=="POST"&&req.param("Role",null)!=null)
    {
      // Person.attributes=req.param("Person",null);
       
    Roles.create(params, function(err, model) {

          // Error handling
        if (err) {
        //  return console.log(err);
            res.send("Error");

        // The User was created successfully!
        }else {
             res.redirect( 'roles/view/'+model.roleId);
          
        }
         
         
      });
     
    }
    else
    {
      
      res.render( 'roles/create');
    }
 
       
  },


  /**
   * Action blueprints:
   *    `/person/update`
   */
   update: function (req, res) {
    
         var id=req.param("id",null);

    

        Roles.findOne({ where: { roleId : id }}).exec(function(err, model) {
       
            // res.send(model);
          // return;

            if(req.method=="POST"&&req.param("Role",null)!=null)
          {
              
               var p=req.param("Role",null);


        
        
model.roleId=p.roleId;
             model.roleName=p.roleName;
             
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
                  res.redirect( 'roles/view/'+model.roleId);
                
              }
              
              
            });
          
          }
          else
          {
            
            res.render( 'roles/update',{'model':model});
          }
          

    });
      
       
  },


  /**
   * Action blueprints:
   *    `/person/delete`
   */
   delete: function (req, res) {
    
      var id=req.param("id",null);
    
      Roles.findOne({ where: { roleId : id }}).exec(function(err, user) {

      // we now have a model with instance methods attached

      // destroy the record
      user.destroy(function(err) {
          
        res.redirect( 'roles/index/');
          
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


Roles.findOne({ where: { roleId : id }}).exec(function(err, model) {
    // some logic


          res.render( 'roles/view',{'model':model});   
     
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
    
        
         Roles.find().exec(function(err, roles) {
      


       res.render( 'roles/index',{'roles':roles});
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

