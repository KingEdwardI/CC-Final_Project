module.exports = function(mongoose){
  var UserModel = mongoose.model("User", {
    userId: String, 
    username: String,
    password: String
  });
  return UserModel;
};
