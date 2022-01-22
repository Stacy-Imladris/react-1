import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    titleValue: 'Menu',
    collapsed: true,
    onChange: callback,
    items: [],
    onClick: onClickCallback
}

export const UsersUncollapsedMode = Template.bind({});
UsersUncollapsedMode.args = {
    titleValue: 'Users',
    collapsed: false,
    onChange: callback,
    onClick: onClickCallback,
    items: [
        {title: 'Stacy', value: 1},
        {title: 'Alex', value: 2},
        {title: 'Alice', value: 3},
        {title: 'Tanya', value: 4}]
}

export const ModeChanging: ComponentStory<typeof Accordion> = (args) => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={'Users'}
                      collapsed={value}
                      onChange={() => setValue(!value)}
                      onClick={(id) => {alert(`user with ID ${id} should be happy`)}}
                      items={[
                          {title: 'Stacy', value: 1},
                          {title: 'Alex', value: 2},
                          {title: 'Alice', value: 3},
                          {title: 'Tanya', value: 4}]
                      }/>;
}