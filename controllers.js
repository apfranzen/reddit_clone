(function() {
  console.log('controllers.js working');

  const app = angular.module('redditApp');

  app.controller('PostController', function($rootScope) {
    console.log('test');

    $rootScope.posts = [
    {
      id: 0,
      likes: 5,
      title: 'Samoeng/Mae Sa Loop',
      author: 'John Doe',
      image_url: 'http://67.media.tumblr.com/54a32740883d2dc06e8ad1992e311e4c/tumblr_mwf74nByCr1szzcazo1_500.jpg',
      content: 'This route can be tackled in half a day. The route extends north from Chiang Mai and follows Rtes 107, 1096 and 1269. Passing through beautiful scenery and ample curves, it provides a taste of what a longer ride up north will be like.',
      comments: [
        {
          author: 'John Doe',
          comment: 'This ride is really great.'
        },
        {
          author: 'Buffalo Bill',
          comment: 'Don\'t try this at home'
        }
      ]
    },
    {
      id: 1,
      likes: 2,
      title: 'Chiang Rai Loop',
      author: 'Sam Boss',
      image_url: 'http://68.media.tumblr.com/a6f4a43e330254e866199d95990521d7/tumblr_n9swoafJ3R1rec87no1_1280.jpg',
      content: 'The 470km Chiang Rai Loop, which passes through scenic Fang and Tha Ton along Rtes 107, 1089 and 118, is another popular ride that can be broken up with an overnight stay in Chiang Rai.',
      comments: []
    },
    {
      id: 2,
      likes: 1,
      title: 'Mae Hong Son Loop',
      author: 'Joe Dirt',
      image_url: 'https://lonelyplanetwp.imgix.net/2014/10/Motorcycle-rider-taking-in-the-view-of-the-Mae-Hon-Son-loop-Thailand.-Image-by-Jack-Southan-Lonely-Planet.jpg?fit=min&q=40&sharp=10&vib=20&w=1470',
      content: 'The classic northern route is the Mae Hong Son loop, an approximately 600km ride that begins in Chiang Mai and transverses Rte 1095’s 1864 curves with possible stays in Pai, Mae Hong Son and Mae Sariang, before looping back to Chiang Mai via Rte 108. For more details about this route, see Lonely Planet\'s article about Thailand\'s Mae Hong Son by motorbike.',
      comments: []
    },
    ]

    this.selectVal = '-likes'
    this.search = ''
    // this.like = 0;
    this.voteUp = function(post) {
      post.likes++;
    }

    this.voteDown = function(post){
      post.likes--;
    }

    // this.addPost = function(){
    //
    // }
    this.myVar = false;

    this.addPost = function(post) {
      post.votes = 0;
      post.id = $rootScope.posts.length;
      $rootScope.posts.push(post)
    }
  })

  app.controller('CommentController', function($rootScope) {
    this.addComment = function(newComment, post) {

      // $rootScope.posts[index].comments.push(newComment)
      // console.log($rootScope.posts[index].comments);
      post.comments.push(newComment);
      console.log(post);

    }

  });

})()
