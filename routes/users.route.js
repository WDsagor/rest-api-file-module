const express = require('express');
const usersController= require('../controllers/users.controller');
const router = express.Router()


router.get("/", (req, res)=>{
    res.send("ok server theke paoyan jaitese")

})

// GET /user/random A random user
// Get a random user from the .json file
/**
 * @api (get) user
 * @apiDiscription if hit this api route get single random user.
 * @apiPermision user.
 * @apiHeader {string} Authorization User access token.
 * 
 * @apiErron (401 Unauthorized) 
 * @apiErron (403 Forbiden) only admin access data  
 * 
 */
router.get("/random", usersController.getRandomUser)



// GET /user/all A list of random users
// Get all the users from the .json file
// BONUS: Limit the number of users using query parameter(s)
/**
 * @api (get) user
 * @apiDiscription if hit this api route get all user.
 * @apiPermision verify user.
 * @apiHeader {string} Authorization User access token.
 * 
 * @apiErron (401 Unauthorized) 
 * @apiErron (403 Forbiden) only admin access data  
 * 
 */
router.get("/all", usersController.getAllUser)






// POST /user/save Save a random user
// Save a user in the .json file
// BONUS: validate the body and check if all the required properties are present in the body.
// BONUS: Limit the number of users using query parameter(s)
/**
 * @api (post) save single user
 * @apiDiscription this route save single user
 * @apiPermision verify user.
 * @apiHeader {string} Authorization User access token.
 * 
 * @apiErron (401 Unauthorized) 
 * @apiErron (403 Forbiden) only admin access data  
 * 
 */
router.post("/save", usersController.saveSingleUser)






// PATCH /user/update Update a random user
// Update a user's information in the .json file using its id
// BONUS: validate the user id
// BONUS: Limit the number of users using query parameter(s)
/**
 * @api (patch) update user
 * @apiDiscription update only old user data
 * @apiPermision verify user.
 * @apiHeader {string} Authorization User access token.
 * 
 * @apiErron (401 Unauthorized) 
 * @apiErron (403 Forbiden) only admin access data  
 * 
 */
router.patch("/update", usersController.upDateSingleUser)





// PATCH /user/bulk-update update multiple users
// Update multiple users' information in the .json file
// Take an array of user ids and assign it to the body.
// BONUS: validate the body.
/**
 * @api (patch) update user
 * @apiDiscription update only old user data
 * @apiPermision verify user.
 * @apiHeader {string} Authorization User access token.
 * 
 * @apiErron (401 Unauthorized) 
 * @apiErron (403 Forbiden) only admin access data  
 * 
 */
router.patch("/bulk-update", usersController.upDateMultiUser)






// DELETE /user/ delete
// Delete a user from the .json file using its id
// BONUS: validate the user id
/**
 * @api (delete) delete user
 * @apiDiscription delete only old user data
 * @apiPermision only admin permision.
 * @apiHeader {string} Authorization User access token.
 * 
 * @apiErron (401 Unauthorized) 
 * @apiErron (403 Forbiden) only admin access data  
 * 
 */
router.delete("/delete", usersController.deleteUser )





module.exports = router;