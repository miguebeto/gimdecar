import { useState } from 'react';
import TabNavigation from './tabnav.component';
import TabPanel from './tabpanel.component';
import styles from './tab.module.css'

const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

const TabComponent = (props: any) => {
    const list_grades = props.translate("talents.section1.grades.items", {}, { returnObjects: true }) as any;
    const tab_items = props.translate("talents.section1.grades.list", [], { returnObjects: true });
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (index: number) => {
        setActiveTab(index);
    };
    // console.log("items => ", tab_items)

    const contentTabs = Array.isArray(list_grades) ? list_grades?.map((it: any, index: number) => (
        <TabPanel activeTab={activeTab} index={index} key={index}>
            <div className={styles.contentTab}>
                <div className={styles.books}>
                    <img src='/images/talento/books.png' alt='Books' title='Books'/>
                </div>
                <div>
                    <h4>{it.title}</h4>
                    <p>{it.description}</p>
                </div>
            </div>
        </TabPanel>
    )) : null;

    return (
        <div>
            <TabNavigation tabs={tab_items} activeTab={activeTab} handleTabChange={handleTabChange} />
            {contentTabs}
        </div>
    );
};

export default TabComponent;