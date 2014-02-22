// App.ApplicationAdapter = DS.FixtureAdapter;

App.Post = DS.Model.extend({
  username      : DS.attr(),
  title     : DS.attr(),
  text   : DS.attr(),
  date      : DS.attr(),
});

App.Comment = DS.Model.extend({
  post: DS.belongsTo('post'),
  username: DS.attr(),
  text: DS.attr()
});

// App.Comment.FIXTURES = [{
//   id: 1,
//   username: 'UserX',
//   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, laudantium, ipsam, odio, dolores repellat iure ratione dolorum accusamus ad corporis animi illo eum illum sit iste. Eveniet nobis modi odit.'
// }, {
//   id: 2,
//   username: 'UserX',
//   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, laudantium, ipsam, odio, dolores repellat iure ratione dolorum accusamus ad corporis animi illo eum illum sit iste. Eveniet nobis modi odit.'
// }
// ];

// App.Post.FIXTURES = [{
//   id:1,
//   username: 'inti',
//   title: 'Question1',
//   text: 'I have a question about emberJS1',
//   date: 'today'
// },
// {
//   id:2,
//   username: 'inti',
//   title: 'Question2',
//   text: 'I have a question about emberJS2',
//   date: 'today'
// },
// {
//   id:3,
//   username: 'inti',
//   title: 'Question3',
//   text: 'I have a question about emberJS3',
//   date: 'today'
// }
// ];

// App.ApplicationAdapter = DS.RESTAdapter;

DS.RESTAdapter.reopen({
  host: 'http://192.168.0.94:3000/api'
});
