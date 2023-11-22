export default function Stats({ items }) {
    if (!items.length)
        return (
            <footer className="stats">
                <em>Start adding some items to your list! 🚀</em>
            </footer>
        );

    const totalItems = items.length;
    const packedItems = items.filter((i) => i.packed).length;
    const percentagePacked = Math.round((packedItems / totalItems) * 100);

    return (
        <footer className="stats">
            {percentagePacked === 100 && (
                <em>You are all packed and ready to go! ✈️</em>
            )}
            {percentagePacked === 0 && <em>You need to start packing!</em>}
            {percentagePacked > 0 && percentagePacked < 100 && (
                <em>
                    🎒 You have {totalItems} items on your list, and you already
                    packed {packedItems} ({percentagePacked}%).
                </em>
            )}
        </footer>
    );
}
