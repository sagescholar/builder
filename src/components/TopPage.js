import React from 'react';
import CheckboxList from './view/CheckboxList';

const items = [
  { id: 'item1', label: 'Ixaba' },
  { id: 'item2', label: 'Ixaba' },
  { id: 'item3', label: 'Ixaba' },
  // 追加の項目をここに定義できます
];

function TopPage() {
  return (
    <div className="content">
      <h1>Welcome to Your Portal Site</h1>
      <CheckboxList items={items}/>
      <p>This is the TOP page.</p>
    </div>
  );
}

export default TopPage;
