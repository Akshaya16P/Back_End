function userDetials(id,callback){
    console.log("Getting the user details",id);
    usersId({userId:"18"});
}
function usersId(userId,callback){
    console.log("Getting the user id",userId);
    userSub({subId:"en-1"});
}
function userSub(subId){
    console.log("Getting the subject id",subId);
}
userDetials("18",function(userId){
    usersId(userId,function(subId){
        userSub(subId)
    })
});