import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff',
    component: OnOff,
} as ComponentMeta<typeof OnOff>;

const callback = action('on or off clicked')

const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} />;

export const OnMode = Template.bind({});
OnMode.args = {
    on: true,
    onChange: callback
}

export const OffMode = Template.bind({});
OffMode.args = {
    on: false,
    onChange: callback
}

export const ModeChanging: ComponentStory<typeof OnOff> = (args) => {
    const [value, setValue] = useState<boolean>(true);
    return <OnOff on={value} onChange={setValue} />;
}