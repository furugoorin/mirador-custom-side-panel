import React from 'react';

var CustomButton = function CustomButton() {
  return /*#__PURE__*/React.createElement("span", {
    id: "custom-side-panel-a-button"
  }, "\uD83D\uDE00");
};

CustomButton.value = 'CustomKey1';
export default {
  target: 'WindowSideBarButtons',
  mode: 'add',
  component: CustomButton
};