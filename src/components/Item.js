export default function Item({ item, onDeleteItem, onUpdatePacked }) {
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
