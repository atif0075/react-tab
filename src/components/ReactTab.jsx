import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
export const ReactTab = (props) => {
  const [selectedTab, setSelectedTab] = useState(props.selectedTab);
  const changeTab = (index) => {
    setSelectedTab(index);
    if (props.rememberTab) {
      const url = new URL(window.location.href);
      url.searchParams.set("tab", index);
      window.history.replaceState({}, "", url);
    }
  };
  useEffect(() => {
    if (props.rememberTab) {
      const url = new URL(window.location.href);
      const tab = url.searchParams.get("tab");
      if (tab) {
        setSelectedTab(parseInt(tab));
      }
    }
  }, [props.rememberTab]);

  return (
    <Tab.Group onChange={changeTab} selectedIndex={selectedTab}>
      <Tab.List className="tabList">
        {props.tabHead?.map((tab, index) => (
          <Tab
            key={index}
            className={`tabListButton ${
              selectedTab === index
                ? "tabListButtonSelected"
                : "tabListButtonUnSelected"
            }`}
            onClick={() => changeTab(index)}
          >
            {tab}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="tabPanelContainer">
        {props.tabData?.map((tab, index) => (
          <Tab.Panel key={index} className="tabPanel">
            {!props.insertHtml && tab}
            {props.insertHtml && (
              <span dangerouslySetInnerHTML={{ __html: tab }} />
            )}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};
