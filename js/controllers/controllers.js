App.PostsAddController = Ember.ObjectController.extend({
  actions: {
    save: function(){
      var username = this.get('username'),
          title = this.get('title'),
          text = this.get('text'),
          newPost = this.store.createRecord('post', this.get('model'));
      newPost.set('username',username);
      newPost.set('title',title);
      newPost.set('text',text);
      newPost.save();
      // then transition to the current user
      this.transitionToRoute('post', newPost);
    }
  }
});