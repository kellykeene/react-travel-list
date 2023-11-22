import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
    const [items, setItems] = useState([]);

    function handleAddItem(item) {
        setItems((items) => [...items, item]);
    }

    function handleDeleteItem(id) {
        if (id === "all") {
            setItems([]);
        } else {
            setItems((items) => items.filter((i) => i.id !== id));
        }
    }

    function handleUpdatePacked(id) {
        setItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item
            )
        );
    }

    function handleClearList() {
        const confirmed = window.confirm(
            "You are about to delete all of your items! Are you sure you want to do this?"
        );

        if (confirmed) {
            setItems([]);
        }
    }

    return (
        <div className="app">
            <Logo />
            <Form onAddItem={handleAddItem} />
            <PackingList
                items={items}
                onDeleteItem={handleDeleteItem}
                onUpdatePacked={handleUpdatePacked}
                onClearList={handleClearList}
            />
            <Stats items={items} />
        </div>
    );
}
