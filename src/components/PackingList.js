import { useState } from "react";
import Item from "./Item";

export default function PackingList({
    items,
    onDeleteItem,
    onUpdatePacked,
    onClearList,
}) {
    const [sortBy, setSortBy] = useState("input");

    let sortedItems = items;

    if (sortBy === "input") {
        sortedItems = items;
    } else if (sortBy === "description") {
        sortedItems = items
            .slice()
            .sort((a, b) => a.description.localeCompare(b.description));
    } else if (sortBy === "packed") {
        sortedItems = items
            .slice()
            .sort((a, b) => Number(b.packed) - Number(a.packed));
    }

    function handleClearList() {
        setSortBy("input");
        onClearList();
    }

    return (
        <>
            <div className="list">
                <ul>
                    {sortedItems.map((i) => (
                        <Item
                            key={i.id}
                            item={i}
                            onDeleteItem={onDeleteItem}
                            onUpdatePacked={onUpdatePacked}
                        />
                    ))}
                </ul>
            </div>
            <div>
                <select
                    name="sortBy"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed</option>
                </select>
                <button onClick={handleClearList}>Clear List</button>
            </div>
        </>
    );
}
