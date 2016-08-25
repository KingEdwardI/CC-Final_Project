module.exports = function(mongoose) {
  var ListItemModel = mongoose.model("ListItem", {
    userId: String,
    title: String,
    items: []
  });
  return ListItemModel;
};
