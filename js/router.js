App.Router.map(function() {
  this.resource('posts', function() {
    this.resource('post', {path:'/:post_id'},function() {
      this.resource('comments');
      this.route('add');
    });
    this.route('add');
  });
});