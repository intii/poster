App.IndexRoute = Ember.Route.extend({
  redirect: function(){
    this.transitionTo('posts');
  }
});

App.PostsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('post');
  }
});

// App.PostRoute = Ember.Route.extend({
//   redirect: function(param) {
//     this.transitionTo('posts/'+param.id+'/comments');
//   }
// });

// App.PostAddRoute = Ember.Route.extend({
//   model: function(){
//      return Em.Object.create({});
//   }
// });

App.PostsAddRoute = Ember.Route.extend({
  model: function(){
     return Em.Object.create({});
  }
});

App.CommentsRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('comments');
  }
});