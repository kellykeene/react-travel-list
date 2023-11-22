import { useState } from "react";

export default function Form({ onAddItem }) {
    const [item, setItem] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();

        if (!item) return;

        const newItem = {
            id: Math.floor(Math.random() * 2000),
            description: item,
            quantity: quantity,
            packed: false,
        };

        console.log(newItem);

        onAddItem(newItem);

        setItem("");
        setQuantity(1);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your trip? 🪥</h3>
            <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
            >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
                    <option key={i} value={i}>
                        {i}
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="Item summary..."
                value={item}
                onChange={(e) => setItem(e.target.value)}
            />
            <button>Add</button>
        </form>
    );
}
