 var db = require('./models')

//  db.comment.create({
//    title: 'Paul Allen',
//    content: 'This is really neat! Thanks for posting.',
//    articleId: 1
//  })
//  .then(function(comment) {
//    console.log(comment.get())
//  })

 var db = require('./models')
 db.article.findOne({
   where: { id: 1 },
   include: [db.comment]
 }).then(function(article) {
   // by using eager loading, the article model should have a comments key
   console.log(article.comments)
 })