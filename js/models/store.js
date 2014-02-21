App.ApplicationAdapter = DS.FixtureAdapter;

App.Post = DS.Model.extend({
  from      : DS.attr(),
  title     : DS.attr(),
  postContent   : DS.attr(),
  date      : DS.attr(),
  answers   : DS.attr()
});

App.Post.FIXTURES = [{
  id:1,
  from: 'inti',
  title: 'Question1',
  postContent: 'I have a question about emberJS1',
  date: 'today',
  answers: [
    {
      from: 'UserX',
      answerText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, laudantium, ipsam, odio, dolores repellat iure ratione dolorum accusamus ad corporis animi illo eum illum sit iste. Eveniet nobis modi odit.'
    }
  ]
},
{
  id:2,
  from: 'inti',
  title: 'Question2',
  postContent: 'I have a question about emberJS2',
  date: 'today',
  answers: [
    {
      from: 'UserX',
      answerText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, dignissimos, quos, vitae, nulla facere voluptatum quisquam officia esse neque praesentium voluptate quo nostrum dolorem quibusdam blanditiis nam labore accusantium enim!'
    },
     {
      from: 'UserX',
      answerText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, dolorum, nostrum, at, magnam minus quisquam dicta excepturi quae sint officia aperiam illo accusamus laborum! Cum, fuga architecto nihil voluptas excepturi.'
    }
  ]
},
{
  id:3,
  from: 'inti',
  title: 'Question3',
  postContent: 'I have a question about emberJS3',
  date: 'today',
  answers: [
    {
      from: 'UserX',
      answerText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, dolorum, nostrum, at, magnam minus quisquam dicta excepturi quae sint officia aperiam illo accusamus laborum! Cum, fuga architecto nihil voluptas excepturi.'
    },
     {
      from: 'UserX',
      answerText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, dolorum, nostrum, at, magnam minus quisquam dicta excepturi quae sint officia aperiam illo accusamus laborum! Cum, fuga architecto nihil voluptas excepturi.'
    },
     {
      from: 'UserX',
      answerText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, dolorum, nostrum, at, magnam minus quisquam dicta excepturi quae sint officia aperiam illo accusamus laborum! Cum, fuga architecto nihil voluptas excepturi.'
    }
  ]
}
];
