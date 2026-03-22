'use client';

import {
  Tab as RACTab,
  TabList as RACTabList,
  type TabListProps as RACTabListProps,
  TabPanel as RACTabPanel,
  type TabPanelProps as RACTabPanelProps,
  type TabProps as RACTabProps,
  Tabs as RACTabs,
  type TabsProps as RACTabsProps,
} from 'react-aria-components';

import { tabList, tabPanel, tabRecipe, tabsContainer } from './tabs.recipe';

export function StyledTabs({ className, ...props }: RACTabsProps) {
  return <RACTabs {...props} className={tabsContainer + (className ? ` ${className}` : '')} />;
}

export function StyledTabList<T extends object>({ className, ...props }: RACTabListProps<T>) {
  return <RACTabList {...props} className={tabList + (className ? ` ${className}` : '')} />;
}

export function StyledTab({ className, ...props }: RACTabProps) {
  return <RACTab {...props} className={tabRecipe() + (className ? ` ${className}` : '')} />;
}

export function StyledTabPanel({ className, ...props }: RACTabPanelProps) {
  return <RACTabPanel {...props} className={tabPanel + (className ? ` ${className}` : '')} />;
}
