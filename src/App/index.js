import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Tabs from 'antd/es/tabs';
import { v4 as uuid4 } from 'uuid';

import List from '../List';

const { TabPane } = Tabs;

const App = () => {
    const generator = (title) => new Array(10).fill(null).map((value, index)=>({
        id: uuid4(title + (index+1)),
        name: title + (index+1)
    }))

    const pages = generator('Page #')
    const items = generator('Item #')
    console.log({pages, items})
    const generatePages = () => {
        return pages.map( (page, index) => {
                return (
                    <TabPane key={page.id} tab={page.name}><List items={items}/></TabPane>
                )
        })
    };

   return (
       <DndProvider backend={HTML5Backend}>
           <Tabs defaultActiveKey={pages[0].id}>
                {generatePages()}
           </Tabs>
       </DndProvider>
   )

};

export default App;
