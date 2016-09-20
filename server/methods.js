Meteor.methods({
    addResolution(resolution){
        //check(resolution,Object);
        if(!Meteor.userId()){
            throw new Meteor.Error("not-authorized")
        }
        Resolution.insert({
            text : resolution,
            complete : false,
            created : new Date(),
            user : Meteor.userId()
        })
    },
    toggleResolution(resolution){
       // check(resolution,Object);
       /* if(!Meteor.userId()!==resolution._id){
            throw new Meteor.Error("not-authorized")
        }*/
        Resolution.update(resolution._id,{
            $set:{complete: !resolution.complete}
        })
    },
    deleteResolution(resolution){
       // check(resolution,Object);
       /* if(!Meteor.userId()!==resolution._id){
            throw new Meteor.Error("not-authorized")
        }*/
        Resolution.remove(resolution._id)
    }
})

