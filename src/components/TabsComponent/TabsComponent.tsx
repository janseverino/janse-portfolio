import {
  Children,
  cloneElement,
  isValidElement,
  ReactNode,
  SyntheticEvent,
  useState,
} from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import TabItem from "./TabItem";

const MUITabsProps = {
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#635ee7",
  },
};

interface TabsProps {
  children?: ReactNode;
  value: number;
  onChange: (event: SyntheticEvent, newValue: number) => void;
}

const TabsComponent = styled((props: TabsProps) => (
  <Tabs
    {...props}
    orientation='vertical'
    variant='scrollable'
    TabIndicatorProps={{ children: <span className='MuiTabs-indicatorSpan' /> }}
  />
))(MUITabsProps);

type CustomizedTabsProps = {
  children?: ReactNode;
  columns: string[];
};

export default function CustomizedTabs({
  children,
  columns,
}: CustomizedTabsProps) {
  const [value, setValue] = useState<number>(0);
  const tabsContentChildren = Children.toArray(children);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const childrenProps = {
    value: value,
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <TabsComponent
          value={value}
          onChange={handleChange}
          aria-label='styled tabs example'>
          {columns.map((item) => (
            <TabItem key={item} label={item}></TabItem>
          ))}
        </TabsComponent>
        {Children.map<ReactNode, ReactNode>(
          tabsContentChildren,
          (child, index) => {
            if (isValidElement(child)) {
              return cloneElement(child, childrenProps);
            }
          },
        )}
      </Box>
    </>
  );
}
