import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {Clock} from "./Clock";

export default {
    title: 'Clock',
    component: Clock,
} as ComponentMeta<typeof Clock>;

export const BaseAnalogExample: ComponentStory<typeof Clock> = (args) => {
    return <Clock mode={'analog'}/>
}

export const BaseDigitalExample: ComponentStory<typeof Clock> = (args) => {
    return <Clock mode={'digital'}/>
}