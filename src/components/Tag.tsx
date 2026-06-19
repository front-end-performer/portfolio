interface TagListProps {
  items: string[];
  /** Accessible label describing the group of tags. */
  label: string;
}

export function TagList({ items, label }: TagListProps) {
  return (
    <ul className="taglist" aria-label={label}>
      {items.map((item) => (
        <li key={item} className="tag">
          {item}
        </li>
      ))}
    </ul>
  );
}
