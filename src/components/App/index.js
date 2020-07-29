import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Tabs from 'antd/es/tabs';

import { listGenerator } from '../../helper/functions';
import PaneContent from '../PaneContent';

export const PAGE_TITLE = 'Page #';
export const ITEM_TITLE = 'Item #';

const { TabPane } = Tabs;

const App = () => {


    const pages = listGenerator(PAGE_TITLE, 10);
    const items = listGenerator(ITEM_TITLE, 10);

    console.log({pages, items})

    const generatePages = () => {
        return pages.map( (page, index) => {
                return (
                    <TabPane key={page.id} tab={page.name}>
                        <PaneContent items={items}/>
                    </TabPane>
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
