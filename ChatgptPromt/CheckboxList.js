//reactでチェックボックス付きのリストを作成してコードを出力して。いったん仕様は任せる。
//後から内容を検討できるように、コード化の仕様を一緒に出力すること。仕様は必要に応じて階層構造で出力すること。

import React, { useState } from 'react';

const CheckboxList = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'アイテム1', checked: false },
    { id: 2, text: 'アイテム2', checked: true },
    { id: 3, text: 'アイテム3', checked: false },
  ]);

  const handleCheckboxChange = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxChange(item.id)}
            />
            {item.text}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default CheckboxList;

/*
仕様:

チェックボックス付きのリストを表示するReactコンポーネントを作成します。
初期状態では、3つのアイテムがあります。各アイテムには、一意のID、テキスト、およびチェックされたかどうかを示すフラグがあります。
ユーザーがチェックボックスを変更すると、アイテムのcheckedフラグがトグルされます。
リストは<ul>タグで表現され、各アイテムは<li>タグで表現されます。
チェックボックスとテキストを含むラベルは、各アイテムのために作成されます。
チェックボックスの変更イベントは、handleCheckboxChange関数によって処理されます。この関数はアイテムのIDを受け取り、適切なアイテムのcheckedフラグを更新します。
*/