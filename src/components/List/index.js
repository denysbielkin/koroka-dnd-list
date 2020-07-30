import React, { useContext } from 'react';

import ListItem from '../ListItem';
import { PaneContext } from '../PaneContent';

export const ITEM_TYPE = 'TEXT_BLOCK';

const List = () => {
    const { list, setList } = useContext(PaneContext);

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
            {list.map((item, index) => <ListItem key={item.id} id={item.id} name={item.name} index={index} moveItem={moveItem} /> )}
        </div>
    )
};

export default List;
