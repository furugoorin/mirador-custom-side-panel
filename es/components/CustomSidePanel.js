import React from 'react';
import CompanionWindow from 'mirador/dist/es/src/containers/CompanionWindow';

var CustomButton = function CustomButton() {
  return /*#__PURE__*/React.createElement("span", {
    id: "custom-side-panel-a-button"
  }, "\uD83D\uDE00");
};

CustomButton.value = 'CustomKey1';
export default function CustomSidePanel(props) {
  var id = props.id,
      windowId = props.windowId;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CustomButton, {
    target: "WindowSideBarButtons",
    mode: "add",
    component: CustomButton
  }), /*#__PURE__*/React.createElement(CompanionWindow, {
    title: "Custom SidePanel Plugin A",
    windowId: windowId,
    id: id,
    companionWindowKey: "CustomKey1"
  }, /*#__PURE__*/React.createElement("h1", null, "This is a moo")));
}