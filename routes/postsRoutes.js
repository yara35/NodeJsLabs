const { Router } = require("express");
const postsController = require("../controllers/postsController");
const requestDetailsLogger = require("../middlewares/requestDetailsLogger");
const router = Router();

router.post("/", requestDetailsLogger, postsController.createPost);
router.get("/", postsController.getAllPost);

router.get("/:id", postsController.getPostById);
router.patch("/:id", postsController.updatePostById);
router.delete("/:id", postsController.deletePostById);

module.exports = router;
