export default function Stats({ items }) {
  if (!items.length)
    return (
      <em>
        <p className="stats">Start adding some items 🚀</p>
      </em>
    );

  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPackedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Ready to go ✈"
          : `You have ${numItems} items on ur list, u already packed ${numPackedItems}(${percentage}%)`}
      </em>
    </footer>
  );
}
