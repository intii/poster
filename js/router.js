App.Router.map(function() {
  this.resource('posts', function() {
    this.route('post', {path:'/:post_id'});
  });
});