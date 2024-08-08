import * as WiReactIcons from 'react-icons/wi';
import * as TiReactIcons from 'react-icons/ti';
import { TiChartLineOutline } from 'react-icons/ti';
import React from 'react';

const DynamicIcon = ({ iconName }) => {
  let IconComponent = null;

  // Check the initial two letters and select the corresponding icon set
  if (iconName.startsWith('Wi')) {
    IconComponent = WiReactIcons[iconName];
  } else if (iconName.startsWith('Ti')) {
    IconComponent = TiReactIcons[iconName];
  }

  if (!IconComponent) {
    return null; // Return null if the icon is not found
  }

  return <IconComponent />;
};

export default DynamicIcon;
