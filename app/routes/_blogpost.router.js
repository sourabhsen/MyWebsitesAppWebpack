
// 
import blogpost from '../models/blogPosts.model';

export default (app, router) => {

  // ## Recipe API Routes

  // Define routes for the `recipe` API

  router.route('/blogs')
    

     .get((req, res) => {

      // Use mongoose to get all blog items in the database
      blogpost.find((err, blogpost) => {
        if(err)
          res.send(err);

        else
          res.json(blogpost);
      });
    });

    router.route('/blogs/:blog/upvote')

    .put((req,res) => {
      
        blogpost.upvote((err,result) =>{
              if (err) throw err;
              else{
                 console.log(result);
                  // call the built-in save method to save to the database
                 /* blogpost.save(function(err) {
                    if (err) throw err;
                    else{
                         blogpost.find((err, blogpost) => {
                            if(err)
                              res.send(err);

                            else
                              res.json(blogpost);
                          });
                      }
                  }); */
              }
        }) 
      
    })

     router.route('/blogs/:blog/downvote')

    .put((req,res) => {

        blogpost.downvote(function(err,result){
             if(err){
                res.send(err);
             }else{
                 console.log(result);
                /*  blogpost.find((err, response) => {
                  console.log('result'+ response);
                  if(err)
                    res.send(err);
                  else
                    res.json(response);
                }); */
             }
        })
    })
};
