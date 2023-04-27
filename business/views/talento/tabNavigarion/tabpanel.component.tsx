interface TabPanelProps {
    activeTab: number;
    index: number;
  }
  
  const TabPanel = ({ activeTab, index, children }: React.PropsWithChildren<TabPanelProps>) => {
    if (activeTab !== index) {
      return null;
    }
  
    return <div>{children}</div>;
  };
  
  export default TabPanel;