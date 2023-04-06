import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Accordion} from './Accordion';
import {action} from "@storybook/addon-actions";

const GetCategoryObj = (categoryName: 'Colors' | 'Events' | 'Main') => ({
    table: {
        category: categoryName
    }
})

export default {
    title: 'components/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            ...GetCategoryObj('Colors')
        },
        onChange: {
            ...GetCategoryObj('Events')
        },
        onClick: {
            ...GetCategoryObj('Events')
        },
        items: {...GetCategoryObj('Main')},
        collapsed: {...GetCategoryObj('Main')},
        titleValue: {...GetCategoryObj('Main')},
    }
} as ComponentMeta<typeof Accordion>;

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;
const callbacksProps = {
    onChange: callback,
    onClick: onClickCallback
}

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Menu',
    collapsed: true,
    items: [],
}

export const UsersUncollapsedMode = Template.bind({});
UsersUncollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Users',
    collapsed: false,
    items: [
        {title: 'Stacy', value: 1},
        {title: 'Alex', value: 2},
        {title: 'Alice', value: 3},
        {title: 'Tanya', value: 4}]
}

export const ModeChanging: ComponentStory<typeof Accordion> = (args) => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)}/>;
}
ModeChanging.args = {
    titleValue: 'Users',
    onClick: (value) => {alert(`user with ID ${value} should be happy`)},
    items: [
        {title: 'Stacy', value: 1},
        {title: 'Alex', value: 2},
        {title: 'Alice', value: 3},
        {title: 'Tanya', value: 4}]
}
