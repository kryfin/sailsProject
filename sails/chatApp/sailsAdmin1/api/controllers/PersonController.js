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
    var params=req.param("Person");

        if(req.method=="POST"&&req.param("Person",null)!=null)
    {
      // Person.attributes=req.param("Person",null);
       
    Person.create(params, function(err, model) {

          // Error handling
        if (err) {
        //  return console.log(err);
            res.send("Error");

        // The User was created successfully!
        }else {
             res.redirect( 'person/view/'+model.personId);
          
        }
         
         
      });
     
    }
    else
    {
      
      res.render( 'person/create');
    }
 
       
  },


  /**
   * Action blueprints:
   *    `/person/update`
   */
   update: function (req, res) {
    
         var id=req.param("id",null);

    

        Person.findOne({ where: { personId : id }}).exec(function(err, model) {
       
            // res.send(model);
          // return;

            if(req.method=="POST"&&req.param("Person",null)!=null)
          {
              
               var p=req.param("Person",null);


        
        
model.personId=p.personId;
             model.personName=p.personName;
             model.personAddress=p.personAddress;
             model.personCnic=p.personCnic;
             model.personContact=p.personContact;
             
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
                  res.redirect( 'person/view/'+model.personId);
                
              }
              
              
            });
          
          }
          else
          {
            
            res.render( 'person/update',{'model':model});
          }
          

    });
      
       
  },


  /**
   * Action blueprints:
   *    `/person/delete`
   */
   delete: function (req, res) {
    
      var id=req.param("id",null);
    
      Person.findOne({ where: { personId : id }}).exec(function(err, user) {

      // we now have a model with instance methods attached

      // destroy the record
      user.destroy(function(err) {
          
        res.redirect( 'person/index/');
          
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


Person.findOne({ where: { personId : id }}).exec(function(err, model) {
    // some logic


          res.render( 'person/view',{'model':model});   
     
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
    
        
         Person.find().exec(function(err, persons) {
      


       res.render( 'person/index',{'persons':persons});
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

