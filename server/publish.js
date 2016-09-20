Resolution=new Mongo.Collection("resolutions");

Meteor.publish("allResolution",function(){
    console.log('-------PUBLISH-----')
    return Resolution.find();
});

Meteor.publish("userResolution",function(){
    console.log('-------PUBLISH-----')
    return Resolution.find({user : this.userId});
});