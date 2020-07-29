import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { ITEM_TYPE } from '../List';

const ListItem = ({ id, name, moveItem, index }) => {
    const ref = useRef(null)
    const [, drop] = useDrop({
        accept: ITEM_TYPE,
        hover(item, monitor) {
            if (!ref.current){
                return;
            }

            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            const hoveredRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }//
            moveItem(dragIndex, hoverIndex);
            item.index = hoverIndex
            // if (dragIndex > hoverIndex && hoverClientY < )
        }
    })
    const [{ isDragging }, drag] = useDrag({
        item: { type: ITEM_TYPE, id, index },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });
    const opacity = isDragging ? 0 : 1
    drag(drop(ref))
    return (
        <div ref={ref} style={{ border: '2px dashed black', margin: '5px', background: 'white', width: '100px', padding:'3px', cursor: 'pointer', opacity }}>
            {name}
        </div>
    )

};

export default ListItem;
