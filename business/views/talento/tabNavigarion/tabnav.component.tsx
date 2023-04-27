import styles from './tab.module.css';

interface TabNavigationProps {
    tabs: string[];
    activeTab: number;
    handleTabChange: (index: number) => void;
  }
  
  const TabNavigation = ({ tabs, activeTab, handleTabChange }: TabNavigationProps) => {
    return (
      <div className={styles.tabnav}>
        { Array.isArray(tabs) ? tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabChange(index)}
            className={index === activeTab ? styles.activeTab : ''}
          >
            {tab}
          </button>
        )): null}
      </div>
    );
  };
  
  export default TabNavigation;