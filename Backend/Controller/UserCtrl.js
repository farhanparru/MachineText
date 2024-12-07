const menu = require("../Model/Menu");
const MenuItem = require('../Model/MenuItem')

module.exports = {
  createMenu: async (req, res) => {
    try {
      const { name, description } = req.body;

      const createmenu = await menu.create({
        name: name,
        description: description,
      });

      res.status(201).json({
        message: "Successfully created menu",
        createmenu,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error creating menu", error: error.message });
    }
  },
  

  getMenu: async (req, res) => {
    try {
      const getAllmenu = await menu.find();
      res
        .status(200)
        .json({ message: "Successfully get All menus", getAllmenu });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error creating menu", error: error.message });
    }
  },

  MenuItemCreate:async(req,res) =>{
    try {
      const {name,description,price} = req.body
      const menuId = req.params.menuId
      const newItem = await MenuItem.create({name, description, price,menuId})
      res
        .status(200)
        .json({ message: "Successfully MenuItems created", newItem });
    } catch (error) {
      res
      .status(500)
      .json({ message: "Error creating menu", error: error.message });
    }
  },

  getItemsMenu:async(req,res) =>{
    try {
      const getAllmenuItesm =  await MenuItem.find({menuId: req.params.menuId})
      res
      .status(200)
      .json({ message: "Successfully get All Itesmmenus", getAllmenuItesm });
    } catch (error) {
      res
      .status(500)
      .json({ message: "Error creating menu", error: error.message });
    }
  }
};
