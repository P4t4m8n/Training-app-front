import React, { Fragment } from "react";

interface Props<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  listStyle?: string;
}
export default function ItemList<T>({
  items,
  renderItem,
  listStyle,
}: Props<T>) {
  return (
    <ul className={listStyle}>
      {items.map((item, index) => (
        <Fragment key={index}>{renderItem(item)}</Fragment>
      ))}
    </ul>
  );
}
