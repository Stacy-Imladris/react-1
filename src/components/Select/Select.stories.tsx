import React, {useState} from 'react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const callback = action('Value changed')

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const WithValue: ComponentStory<typeof Select> = (args) => {
    const [value, setValue] = useState('2');
    return <>
        <Select value={value}
                onChange={setValue}
                items={[
                    {value: '1', title: "Minsk"},
                    {value: '2', title: "Moscow"},
                    {value: '3', title: "Kiev"}
                ]}/>
    </>
}

export const WithoutValue: ComponentStory<typeof Select> = (args) => {
    const [value, setValue] = useState(null);
    return <>
    <Select value={value}
                   onChange={setValue}
                   items={[
                       {value: '1', title: "Minsk"},
                       {value: '2', title: "Moscow"},
                       {value: '3', title: "Kiev"}
                   ]}/>
    </>
}