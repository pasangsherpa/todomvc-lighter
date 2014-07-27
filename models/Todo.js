// Todo Model
// ----------

// Our basic **Todo** model has `title`, and `completed` attributes.
module.exports = Model.extend({
  // Default attributes for the todo
  // and ensure that each todo created has `title` and `completed` keys.
  fields: {
    title: '',
    completed: false
  },

  forceSync: true

});
