/**
 * TrackersController
 *
 * @description :: Server-side logic for managing trackers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
create: function (req, res) {
    
    // Send a JSON response
    /*return res.json({
      
      hello: 'world'
    });*/
    var params=req.param("Tracker");

        if(req.method=="POST"&&req.param("Tracker",null)!=null)
    {
      // Person.attributes=req.param("Person",null);
       
    Trackers.create(params, function(err, model) {

          // Error handling
        if (err) {
        //  return console.log(err);
            res.send("Error");

        // The User was created successfully!
        }else {
             res.redirect( 'trackers/view/'+model.trackerId);
          
        }
         
         
      });
     
    }
    else
    {
      
      res.render( 'trackers/create');
    }
 
       
  },


  /**
   * Action blueprints:
   *    `/person/update`
   */
   update: function (req, res) {
    
         var id=req.param("id",null);

    

        Trackers.findOne({ where: { trackerId : id }}).exec(function(err, model) {
       
            // res.send(model);
          // return;

            if(req.method=="POST"&&req.param("Tracker",null)!=null)
          {
              
               var p=req.param("Tracker",null);


        

             model.trackerImei=p.trackerImei;
             model.accountId=p.accountId;
          
             
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
                  res.redirect( 'trackers/view/'+model.trackerId);
                
              }
              
              
            });
          
          }
          else
          {
            
            res.render( 'trackers/update',{'model':model});
          }
          

    });
      
       
  },


  /**
   * Action blueprints:
   *    `/person/delete`
   */
   delete: function (req, res) {
    
      var id=req.param("id",null);
    
      Trackers.findOne({ where: { trackerId : id }}).exec(function(err, user) {

      // we now have a model with instance methods attached


      // destroy the record
      user.destroy(function(err) {
          
        res.redirect( 'trackers/index/');
          
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


Trackers.findOne({ where: { trackerId : id }}).exec(function(err, model) {
    // some logic


          res.render( 'trackers/view',{'model':model});   
     
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
    
        
         Trackers.find().exec(function(err, trackers) {
      


       res.render( 'trackers/index',{'trackers':trackers});
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

