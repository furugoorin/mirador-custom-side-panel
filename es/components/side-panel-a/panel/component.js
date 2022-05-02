import React from 'react';
import CompanionWindow from 'mirador/dist/es/src/containers/CompanionWindow';
import PropTypes from 'prop-types';
export default function CustomSidePanel(props) {
  var id = props.id,
      windowId = props.windowId,
      title = props.title;
  return /*#__PURE__*/React.createElement(CompanionWindow, {
    title: title,
    windowId: windowId,
    id: id
  }, /*#__PURE__*/React.createElement("h1", null, "This is a work in progress"), /*#__PURE__*/React.createElement("p", null, "\xB0\u02D6\u2727\u25DD(\u2070\u25BF\u2070)\u25DC\u2727\u02D6\xB0"), /*#__PURE__*/React.createElement("p", null, "What does this panel look like with more text?"), /*#__PURE__*/React.createElement("p", null, "It seemed like it should have been so simple. There was nothing inherently difficult with getting the project done. It was simple and straightforward enough that even a child should have been able to complete it on time, but that wasn't the case. The deadline had arrived and the project remained unfinished."));
} // Declares prop to be a specific type:

CustomSidePanel.propTypes = process.env.NODE_ENV !== "production" ? {
  title: PropTypes.string
} : {}; // Specifies the default values for props:

CustomSidePanel.defaultProps = {
  title: 'Unnamed Panel Title'
};