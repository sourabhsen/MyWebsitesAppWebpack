


// HTTP Verb  Route                   Description

// GET        /api/recipe             Get all of the recipes
// GET        /api/recipe/:recipe_id  Get a single recipe by recipe id
// POST       /api/recipe             Create a single recipe
// DELETE     /api/recipe/:recipe_id  Delete a single recipe
// PUT        /api/recipe/:recipe_id  Update a recipe with new info

// Load the `recipe` model
import BlogPost from '../models/blogPosts.model';

export default (app, router) => {

  // ## Recipe API Routes

  // Define routes for the `recipe` API

  router.route('/blogs')
    // Accessed at GET http://localhost:8080/api/recipe

    .get((req, res,next) => {
     console.log(BlogPost);
     BlogPost.find({}).sort({created_at: 'desc'}).exec(function(err,result) {
          if(err){
              next(err);
          }else if(result.length === 0){
              console.log('there is no record');
              res.send('there is no record')
          }else{
             res.json(result);
          }
     })
   })

};
