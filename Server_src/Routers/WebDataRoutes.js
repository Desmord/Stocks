const express = require(`express`);
const {
    getCompanyStockValues,
    getWig20Values,
} = require(`../Controllers/WebDataController`);

const router = express.Router();

router.route(`/getCompanyStockValue/:companyShortcut`).get(getCompanyStockValues)
// predefined: wig20, wig30, wig40, wig80. Default returns wig
router.route(`/getWigValue/:wigName`).get(getWig20Values);

module.exports = router;