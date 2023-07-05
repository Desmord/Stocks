const express = require(`express`);
const { getUser, editUser } = require(`../Controllers/DataBaseController`);

const router = express.Router();

router.route(`/getUser`).get(getUser)
router.route(`/editUser`).post(editUser)

module.exports = router;