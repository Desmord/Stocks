const express = require(`express`);
const { getUser, editUser, logIn } = require(`../Controllers/DataBaseController`);

const router = express.Router();

router.route(`/getUser`).get(getUser)
router.route(`/editUser`).post(editUser)
router.route(`/login`).post(logIn);

module.exports = router;