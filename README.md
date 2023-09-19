# React Tab Ui

A simple tab ui component for react. It is built on top of Headless UI and it is completely customizable. By default it comes with no styles, so you can customize it to your needs.

## Installation

```bash
npm install react-tab-ui
```

## Import

```jsx
import { ReactTab } from "react-tab-ui";
```

## Usage

The component takes two props, `tabHead` and `tabData`. `tabHead` is an array of strings and `tabData` is an array of react components. The length of both arrays should be the same.

```jsx
<ReactTab
  tabHead={["Tab 1", "Tab 2", "Tab 3"]}
  tabData={["Tab 1 Content", "Tab 2 Content", "Tab 3 Content"]}
/>
```

## Props

| Prop Name   | Type    | Description                                                                          |
| ----------- | ------- | ------------------------------------------------------------------------------------ |
| tabHead     | array   | An array of strings. The length of the array should be the same as tabData.          |
| tabData     | array   | An array of react components. The length of the array should be the same as tabHead. |
| rememberTab | boolean | If true, the tab will remember the last active tab. Default is false.                |
| selectedTab | number  | The index of the tab that should be selected. Default is 0.                          |
| insertHTML  | boolean | If true, the tabData will be rendered as HTML. Default is false.                     |

## More Examples

### Render Components

```jsx
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";

<ReactTab
  tabHead={["Tab 1", "Tab 2", "Tab 3"]}
  tabData={[<Tab1 />, <Tab2 />, <Tab3 />]}
/>;
```

### Remember Last Active Tab

```jsx
<ReactTab
  tabHead={["Tab 1", "Tab 2", "Tab 3"]}
  tabData={["Tab 1 Content", "Tab 2 Content", "Tab 3 Content"]}
  rememberTab={true}
/>

// The tab will remember the last active tab
```

### Set Default Active Tab

```jsx
<ReactTab
  tabHead={["Tab 1", "Tab 2", "Tab 3"]}
  tabData={["Tab 1 Content", "Tab 2 Content", "Tab 3 Content"]}
  selectedTab={2}
/>

// The third tab will be selected by default
```

### Render HTML

```jsx
<ReactTab
  tabHead={["Tab 1", "Tab 2", "Tab 3"]}
  tabData={[
    "<h1>Tab 1 Content</h1>",
    "<h1>Tab 2 Content</h1>",
    "<h1>Tab 3 Content</h1>",
  ]}
  insertHTML={true}
/>

// The tabData will be rendered as HTML
```

## Styling

This is the default styling of the component. You can customize it to your needs.

```css
:root {
  --dark-bg-zinc-900: #18181b; /* Dark mode background color */
  --dark-border-zinc-700: #31313a; /* Dark mode border color */
  --dark-text-zinc-200: #ccc; /* Dark mode text color */
}

/* .tabList */
.tabList {
  padding: 0.75rem;
  display: flex;
  gap: 0.25rem;
  background-color: #f3f4f6;
  border-radius: 8px;
  overflow-x: auto;
}

/* .tabListButton */
.tabListButton {
  font-weight: normal;
  white-space: nowrap;
  outline: none;
  transition: all 300ms ease-in-out;
  cursor: pointer;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 0.3125rem;
  line-height: 1.25rem;
}

/* .tabListButtonSelected */
.tabListButtonSelected {
  background-color: #aee4fd;
  color: #0b74dd;
}

/* .tabListButtonUnSelected */
.tabListButtonUnSelected {
  color: black;
}

/* .tabPanelContainer */
.tabPanelContainer {
  margin-top: 0.5rem;
  height: auto;
  width: 100%;
  overflow: auto;
}

/* .tabPanel */
.tabPanel {
  padding: 0.75rem;
  background: #f3f4f6;
  border-radius: 8px;
}
```
