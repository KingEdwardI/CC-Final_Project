module.exports = function(mongoose) {
  var ListItemModel = mongoose.model("ListItem", {
    username: String,
    index: Number,
    userId: String,
    title: String,
    items: []
  });
  return ListItemModel;
};
