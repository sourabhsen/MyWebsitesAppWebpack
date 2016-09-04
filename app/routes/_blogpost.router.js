
// 
import BlogPost from '../models/blogPosts.model';

export default (app, router) => {

  // ## Recipe API Routes

  // Define routes for the `recipe` API

  router.route('/blogs')
    

     .get((req, res) => {

      // Use mongoose to get all blog items in the database
      BlogPost.find((err, blogpost) => {
        console.log('result'+ blogpost);
        if(err)
          res.send(err);

        else
          res.json(blogpost);
      });
    });
};
