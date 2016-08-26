module.exports = function(mongoose) {
  var ListItemModel = mongoose.model("ListItem", {
    index: Number,
    userId: String,
    title: String,
    items: []
  });
  return ListItemModel;
};
