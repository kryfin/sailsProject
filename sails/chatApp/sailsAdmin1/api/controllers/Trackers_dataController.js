/**
 * Trackers-dataController
 *
 * @description :: Server-side logic for managing trackers-datas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	





create: function (req, res) {
    
    // Send a JSON response
    /*return res.json({
      
      hello: 'world'
    });*/
    var params=req.param("TrackerD");

        if(req.method=="POST"&&req.param("TrackerD",null)!=null)
    {
      // Person.attributes=req.param("Person",null);
       
    Trackers_data.create(params, function(err, model) {

          // Error handling
        if (err) {
        //  return console.log(err);
            res.send("Error");

        // The User was created successfully!
        }else {
             res.redirect( 'trackers_data/view/'+model.trackerDataId);
          
        }
         
         
      });
     
    }
    else
    {
      
      res.render( 'trackers_data/create');
    }
 
       
  },


  /**
   * Action blueprints:
   *    `/person/update`
   */
   update: function (req, res) {
    
         var id=req.param("id",null);

    

        Trackers_data.findOne({ where: { trackerDataId : id }}).exec(function(err, model) {
       
            // res.send(model);
          // return;

            if(req.method=="POST"&&req.param("TrackerD",null)!=null)
          {
              
               var p=req.param("TrackerD",null);


        

             model.packetHeader=p.packetHeader;
             model.imei=p.imei;

model.stringCounter=p.stringCounter;

model.trackID=p.trackID;

model.lat=p.lat;

model.lon=p.lon;

model.timeDate=p.timeDate;

model.fixNoFixERROR=p.fixNoFixERROR;

model.satUsed=p.satUsed;

model.rSSI=p.rSSI;

model.speed=p.speed;

model.heading=p.heading;

model.mileage=p.mileage;

model.timeTraveled=p.timeTraveled;

model.state=p.state;

model.internalBatteryVolts=p.internalBatteryVolts;

model.mainBatteryVolts=p.mainBatteryVolts;

model.aD1=p.aD1;

model.aD2=p.aD2;

model.aD3=p.aD3;

model.aD4=p.aD4;

model.sIM=p.sIM;

model.extension=p.extension;
model.checksum=p.checksum;
model.trackerId1=p.trackerId1;


          
             
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
                  res.redirect( 'trackers_data/view/'+model.trackerDataId);
                
              }
              
              
            });
          
          }
          else
          {
            
            res.render( 'trackers_data/update',{'model':model});
          }
          

    });
      
       
  },


  /**
   * Action blueprints:
   *    `/person/delete`
   */
   delete: function (req, res) {
    
      var id=req.param("id",null);
    
      Trackers_data.findOne({ where: { trackerDataId : id }}).exec(function(err, user) {

      // we now have a model with instance methods attached


      // destroy the record
      user.destroy(function(err) {
          
        res.redirect( 'trackers_data/index/');
          
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


Trackers_data.findOne({ where: { trackerDataId : id }}).exec(function(err, model) {
    // some logic


          res.render( 'trackers_data/view',{'model':model});   
     
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
    
        
         Trackers_data.find().exec(function(err, trackersData) {
      


       res.render( 'trackers_data/index',{'trackersData':trackersData});
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

