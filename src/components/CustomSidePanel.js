import React from 'react'
import CompanionWindow from 'mirador/dist/es/src/containers/CompanionWindow';

const CustomButton = () => (
  <span id="custom-side-panel-a-button">😀</span>
);
CustomButton.value = 'CustomKey1';

export default function CustomSidePanel(props) {

  const { id, windowId } = props;

      return (
        <><CustomButton
            target='WindowSideBarButtons'
            mode='add'
            component={CustomButton}
          >
        </CustomButton>
        <CompanionWindow
            title="Custom SidePanel Plugin A"
            windowId={windowId}
            id={id}
            companionWindowKey="CustomKey1" 
        >
          <h1>This is a moo</h1>
        </CompanionWindow></>
      );
}
  

