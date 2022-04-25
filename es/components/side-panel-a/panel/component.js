import React from 'react';
import CompanionWindow from 'mirador/dist/es/src/containers/CompanionWindow';
export default function CustomSidePanel(props) {
  var id = props.id,
      windowId = props.windowId;
  return /*#__PURE__*/React.createElement(CompanionWindow, {
    title: "Custom SidePanel Plugin A",
    windowId: windowId,
    id: id
  }, /*#__PURE__*/React.createElement("h1", null, "This is a work in progress"), /*#__PURE__*/React.createElement("p", null, "\xB0\u02D6\u2727\u25DD(\u2070\u25BF\u2070)\u25DC\u2727\u02D6\xB0"), /*#__PURE__*/React.createElement("p", null, "What does this panel look like with more text?"), /*#__PURE__*/React.createElement("p", null, "It seemed like it should have been so simple. There was nothing inherently difficult with getting the project done. It was simple and straightforward enough that even a child should have been able to complete it on time, but that wasn't the case. The deadline had arrived and the project remained unfinished."));
}