import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {UncontrolledAccordion} from "./UncontrolledAccordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
} as ComponentMeta<typeof UncontrolledAccordion>;

const callback = action('accordion mode change event fired')

export const ModeChanging: ComponentStory<typeof UncontrolledAccordion> = (args) => {
    return <UncontrolledAccordion titleValue={'Users'}/>;
}