import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Desigen from "./Desigen";
import Footer from "./Footer";
Modal.setAppElement("#root");

const MenuList = () => {
  const [menus, setMenus] = useState([]);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMenu, setNewMenu] = useState({ name: "", description: "" });

  const navigate = useNavigate();

  const fetchMenus = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/users/getMenu"
      );
      setMenus(response.data.getAllmenu);
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };

  useEffect(() => {
    fetchMenus();
  }, []);

  const handleAddMenu = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/createMenu",
        newMenu
      );
      setMenus([...menus, response.data]);
      toast.success("Successfully created MenuItems");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding menu:", error);
    }
  };

  const handleMenuClick = (menuId) => {
    navigate(`/menu/${menuId}`);
  };

  return (
    <div className="p-4 bg-white min-h-screen flex flex-col items-center">
      <div className="flex flex-wrap justify-center space-x-0 sm:space-x-4 mb-6">
        {menus?.map((menu, index) => (
          <div
            key={index}
            className={`p-4 text-center cursor-pointer border-2 rounded-lg m-2 sm:m-0 ${
              activeMenu === menu.id
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white text-gray-700 border-gray-300"
            }`}
            onClick={() => handleMenuClick(menu._id)}
          >
            <h2 className="font-semibold text-lg">{menu.name}</h2>
          </div>
        ))}
      </div>

      <button
        className="mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={() => setIsModalOpen(true)}
      >
        + Add Menu
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Add Menu Modal"
        className="w-full max-w-md mx-auto bg-white rounded-lg p-6 shadow-lg outline-none"
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
      >
        <h2 className="text-xl font-bold mb-4">Add New Menu</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddMenu();
          }}
          className="space-y-4"
        >
          <div>
            <label className="block font-medium mb-1">Menu Name</label>
            <input
              type="text"
              value={newMenu.name}
              onChange={(e) =>
                setNewMenu({ ...newMenu, name: e.target.value })
              }
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              value={newMenu.description}
              onChange={(e) =>
                setNewMenu({ ...newMenu, description: e.target.value })
              }
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="bg-gray-500 text-white py-2 px-4 rounded"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </Modal>
      <Desigen />
      <Footer />
    </div>
  );
};

export default MenuList;
