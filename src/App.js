import { useState } from "react";

export default function App() {
    const [items, setItems] = useState([]);

    function handleAddItem(item) {
        setItems((items) => [...items, item]);
    }

    function handleDeleteItem(id) {
        setItems((items) => items.filter((i) => i.id !== id));
    }

    function handleUpdatePacked(id) {
        setItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item
            )
        );
    }

    return (
        <div className="app">
            <Logo />
            <Form onAddItem={handleAddItem} />
            <PackingList
                items={items}
                onDeleteItem={handleDeleteItem}
                onUpdatePacked={handleUpdatePacked}
            />
            <Stats />
        </div>
    );
}

function Logo() {
    return <h1>🥰 Far Away 🌴</h1>;
}

function Form({ onAddItem }) {
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

function PackingList({ items, onDeleteItem, onUpdatePacked }) {
    return (
        <div className="list">
            <ul>
                {items.map((i) => (
                    <Item
                        key={i.id}
                        item={i}
                        onDeleteItem={onDeleteItem}
                        onUpdatePacked={onUpdatePacked}
                    />
                ))}
            </ul>
        </div>
    );
}

function Item({ item, onDeleteItem, onUpdatePacked }) {
    return (
        <li>
            <input
                type="checkbox"
                checked={item.packed}
                onChange={() => onUpdatePacked(item.id)}
            />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </li>
    );
}

function Stats() {
    return (
        <footer className="stats">
            <em>
                🎒 You have X items on your list, and you already packed X (X%).
            </em>
        </footer>
    );
}
