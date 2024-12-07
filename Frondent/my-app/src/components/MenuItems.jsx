import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

Modal.setAppElement("#root");

const MenuItems = () => {
  const { menuId } = useParams(); 
  const [menuItems, setMenuItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/users/menus/${menuId}/items`
        );
        setMenuItems(response.data.getAllmenuItesm); 
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    fetchMenuItems();
  }, [menuId]);

  

  const handleAddItem = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5000/api/users/menus/${menuId}/items`,
        newItem
      );
      setMenuItems([...menuItems, response.data]); 
      toast.success("Item added successfully!");
      setIsModalOpen(false); 
      setNewItem({ name: "", description: "", price: "" }); 
    } catch (error) {
      console.error("Error adding menu item:", error);
      toast.error("Error adding item.");
    }
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        + Add Item
      </button>
      <h1 className="text-2xl font-bold mb-6">Menu Items</h1>
      <div>
        {menuItems.length > 0 ? (
          menuItems.map((item) => (
            <div
              key={item._id}
              className="border-b py-4 flex justify-between items-center"
            >
              <div>
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p>{item.description}</p>
              </div>
              <div>
                <span className="text-xl font-bold">₹ {item.price}</span>
              </div>
            </div>
          ))
        ) : (
          <p>No menu items available.</p>
        )}
      </div>

    
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Add Item Modal"
        className="w-full max-w-md mx-auto bg-white rounded-lg p-6 shadow-lg outline-none"
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
      >
        <h2 className="text-xl font-bold mb-4">Add New Item</h2>
        <form onSubmit={handleAddItem} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Item Name</label>
            <input
              type="text"
              value={newItem.name}
              onChange={(e) =>
                setNewItem({ ...newItem, name: e.target.value })
              }
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              value={newItem.description}
              onChange={(e) =>
                setNewItem({ ...newItem, description: e.target.value })
              }
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Price</label>
            <input
              type="number"
              value={newItem.price}
              onChange={(e) =>
                setNewItem({ ...newItem, price: e.target.value })
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
    </div>
  );
};

export default MenuItems;
