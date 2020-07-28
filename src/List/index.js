import React, { useState, useCallback } from 'react';

import ListItem from '../ListItem';

export const ITEM_TYPE = 'Block';

const List = ({ items }) => {
    //const savedList = localStorage.getItem.....
    const savedList = null
    const [list, setList] = useState(savedList || items);

    const moveItem = (dragIndex, hoverIndex) => {
        const item = list[dragIndex];
        setList(prevState => {
            const newList = prevState.filter((nItem, nIndex) => nIndex !== dragIndex);
            newList.splice(hoverIndex, 0, item);
            return [...newList]
        })
    };
    return (
        <div>
            {list.map((item, index) => <>
                <ListItem key={item.id} id={item.id} name={item.name} index={index} moveItem={moveItem} />
            </>)}
        </div>
    )
};

export default List;
