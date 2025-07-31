import { useEffect, useState } from "react";
import { Button, EditableText, InputGroup } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";

export default function Inventory() {
  const [inventorys, setInventory] = useState([]);

  const [newid, setid] = useState("");
  const [newname, setName] = useState("");
  const [newcategory, setCategory] = useState("");
  const [newbrand, setBrand] = useState("");
  const [newquantity, setQuantity] = useState("");
  const [newprice, setPrice] = useState("");

  // Fetch inventory on mount
  useEffect(() => {
    fetch("http://localhost:3010/inventory")
      .then((response) => response.json())
      .then((json) => setInventory(json));
  }, []);

  // Add inventory item
  const addInventory = () => {
    const id = newid.trim();
    const name = newname.trim();
    const category = newcategory.trim();
    const brand = newbrand.trim();
    const quantity = newquantity.trim();
    const price = newprice.trim();

    if (id && name && category && brand && quantity && price) {
      fetch("http://localhost:3010/inventory", {
        method: "POST",
        body: JSON.stringify({ id, name, category, brand, quantity, price }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8"
        }
      })
        .then((response) => response.json())
        .then((data) => {
          setInventory([...inventorys, data]);
          setid("");
          setName("");
          setCategory("");
          setBrand("");
          setQuantity("");
          setPrice("");
        });
    }
  };

  // Handle inline text change
  const onchangehandler = (id, key, value) => {
    setInventory((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [key]: value } : item))
    );
  };

  // Update inventory item
  const updateinventory = (id) => {
    const item = inventorys.find((inv) => inv.id === id);
    fetch(`http://localhost:3010/inventory/${id}`, {
      method: "PUT",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((updatedItem) => {
        setInventory((prev) =>
          prev.map((item) => (item.id === id ? updatedItem : item))
        );
      });
  };

  // Delete inventory item
  const deleteInventory = (id) => {
    fetch(`http://localhost:3010/inventory/${id}`, {
      method: "DELETE"
    }).then(() => {
      setInventory((prev) => prev.filter((item) => item.id !== id));
    });
  };

  return (
    <div className="p-4 overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4">Inventory List</h2>
      <table className="min-w-full border text-sm md:text-base">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Brand</th>
            <th className="border p-2">Quantity</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {inventorys.map((inventory) => (
            <tr key={inventory.id} className="hover:bg-gray-100">
              <td className="border p-2">{inventory.id}</td>
              <td className="border p-2">
                <EditableText
                  value={inventory.name}
                  onChange={(value) =>
                    onchangehandler(inventory.id, "name", value)
                  }
                />
              </td>
              <td className="border p-2">
                <EditableText
                  value={inventory.category}
                  onChange={(value) =>
                    onchangehandler(inventory.id, "category", value)
                  }
                />
              </td>
              <td className="border p-2">
                <EditableText
                  value={inventory.brand}
                  onChange={(value) =>
                    onchangehandler(inventory.id, "brand", value)
                  }
                />
              </td>
              <td className="border p-2">
                <EditableText
                  value={inventory.quantity}
                  onChange={(value) =>
                    onchangehandler(inventory.id, "quantity", value)
                  }
                />
              </td>
              <td className="border p-2">
                <EditableText
                  value={inventory.price}
                  onChange={(value) =>
                    onchangehandler(inventory.id, "price", value)
                  }
                />
              </td>
              <td className="border p-2 flex flex-col md:flex-row gap-2">
                <Button
                  intent="primary"
                  text="Update"
                  onClick={() => updateinventory(inventory.id)}
                />
                <Button
                  intent="danger"
                  text="Delete"
                  onClick={() => deleteInventory(inventory.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="border p-2">
              <InputGroup
                value={newid}
                onChange={(e) => setid(e.target.value)}
                placeholder="Enter ID"
              />
            </td>
            <td className="border p-2">
              <InputGroup
                value={newname}
                onChange={(e) => setName(e.target.value)}
                placeholder="Product Name"
              />
            </td>
            <td className="border p-2">
              <InputGroup
                value={newcategory}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Category"
              />
            </td>
            <td className="border p-2">
              <InputGroup
                value={newbrand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="Brand"
              />
            </td>
            <td className="border p-2">
              <InputGroup
                value={newquantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Quantity"
              />
            </td>
            <td className="border p-2">
              <InputGroup
                value={newprice}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
              />
            </td>
            <td className="border p-2">
              <Button
                intent="success"
                text="Add Inventory"
                onClick={addInventory}
              />
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
