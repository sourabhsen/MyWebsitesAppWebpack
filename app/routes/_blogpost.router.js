
// 
import blogpost from '../models/blogPosts.model';

export default (app, router) => {

  // ## Recipe API Routes

  // Define routes for the `recipe` API

  router.route('/blogs').get((req, res) => {
    // Use mongoose to get all blog items in the database
    blogpost.find({}).sort({date_label: 'descending'}).exec((err, blogpost) => {
       if(err)
        res.send(err);
      else
        res.json(blogpost);
   });
  });

  router.route('/blogs/:blogId').get((req,res) => {
    // Use mongoose to get particular blog items in the database
      blogpost.findById(req.params.blogId, function(err, blog) {
              if (err)
                 res.send(err);
              else
                 res.json(blog);
      })
  })

  router.route('/blogs/:blog/upvote').put((req,res) => {

    blogpost.findById(req.params.blog, function(err, blog) {
      if (err)
          res.send(err);

      blog.upvotes += 1;  // update the bears info
      // save the bear
      blog.save(function(err) {
          if (err)
              res.send(err);
          // Use mongoose to get all blog items in the database
          blogpost.find((err, blogpost) => {
            if(err)
              res.send(err);
            else
              res.json(blogpost);
          });
      });
    });
  })

     router.route('/blogs/:blog/downvote') .put((req,res) => {
      blogpost.findById(req.params.blog, function(err, blog) {
        if (err)
            res.send(err);

        blog.downvotes -= 1;  // update the bears info
        // save the bear
        blog.save(function(err) {
            if (err)
                res.send(err);

            // Use mongoose to get all blog items in the database
            blogpost.find((err, blogpost) => {
              if(err)
                res.send(err);

              else
                res.json(blogpost);
            });
        });

      });

  })
};
