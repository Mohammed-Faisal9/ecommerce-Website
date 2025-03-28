import { IoCloseSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import { useState } from "react";
import { deleteFromCart } from "../actions/deleteFromCart";

export default function DeleteItemButton({ itemId }) {
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    setLoading(true);
    const { success } = await deleteFromCart(itemId);

    if (success) {
      console.log("deleted");
      toast.success("Item removed from cart");
    } else {
      toast.error("Failed to remove item from cart");
    }
    setLoading(false);
  }

  return (
    <button
      className="w-10 h-10 bg-neutral-100 rounded-md flex items-center justify-center"
      onClick={handleDelete}
      disabled={loading}
    >
      <IoCloseSharp className="text-slate-500 font-medium" />
    </button>
  );
}
