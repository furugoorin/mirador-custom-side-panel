import React from 'react';
import CompanionWindow from 'mirador/dist/es/src/containers/CompanionWindow';

export default function CustomSidePanel(props) {
    const { id, windowId } = props;

    return (
        <CompanionWindow
            title="Custom SidePanel Plugin A"
            windowId={windowId}
            id={id}
        >
            <h1>This is a moo</h1>
        </CompanionWindow>
    )
}