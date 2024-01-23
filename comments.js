// Create web server application using express
// This file contains API routes for comments

// Import express
const express = require("express");

// Create router object
const router = express.Router();

// Import comment model
const Comment = require("../models/comment");

// Import authentication middleware
const auth = require("../middleware/auth");

// Import authorization middleware
const { isCommentOwner } = require("../middleware/authorization");

// Import error handler
const { catchErrors } = require("../handlers/errorHandlers");

// Import comment controller
const commentController = require("../controllers/commentController");

// API route for creating comment
router.post(
  "/",
  auth,
  catchErrors(commentController.createComment)
);

// API route for updating comment
router.put(
  "/:commentId",
  auth,
  isCommentOwner,
  catchErrors(commentController.updateComment)
);

// API route for deleting comment
router.delete(
  "/:commentId",
  auth,
  isCommentOwner,
  catchErrors(commentController.deleteComment)
);

// Export router
module.exports = router;

