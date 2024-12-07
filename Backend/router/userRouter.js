const express = require("express");
const router = express.Router();
const userCtrl = require('../Controller/UserCtrl')
router

.post('/createMenu', userCtrl.createMenu)
.get('/getMenu', userCtrl.getMenu)
.post('/menus/:menuId/items', userCtrl.MenuItemCreate)
.get('/menus/:menuId/items', userCtrl.getItemsMenu)



module.exports = router