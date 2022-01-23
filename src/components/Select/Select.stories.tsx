import React, {useMemo, useState} from 'react';
import {ItemType, Select} from "./Select";
import {action} from "@storybook/addon-actions";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {v1} from "uuid";

export default {
    title: 'Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const callback = action('Value changed')

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const WithValue: ComponentStory<typeof Select> = (args) => {
    const [value, setValue] = useState('2');
    return <div style={{display: "inline-block"}}>
        <Select value={value}
                onChange={setValue}
                items={[
                    {value: '1', title: "Minsk"},
                    {value: '2', title: "Moscow"},
                    {value: '3', title: "Kiev"}
                ]}/>
    </div>
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
//
export const SelectSecret = (props: { items: Array<ItemType> }) => {
    console.log('SELECT SECRET')
    const [value, setValue] = useState('1');
    return <>
        <Select value={value}
                onChange={setValue}
                items={props.items}/>
    </>
}
const SelectMemo = React.memo(SelectSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [cities, setCities] = useState<Array<ItemType>>([
        {country: 'Russia', title: 'Moscow', largePopulation: true, value: '1'},
        {country: 'Belarus', title: 'Minsk', largePopulation: false, value: '2'},
        {country: 'USA', title: 'New-York', largePopulation: false, value: '3'},
        {country: 'USA', title: 'Los-Angeles', largePopulation: false, value: '4'},
        {country: 'USA', title: 'Seattle', largePopulation: false, value: '5'},
        {country: 'China', title: 'Shanghai', largePopulation: true, value: '6'},
        {country: 'China', title: 'Beijing', largePopulation: true, value: '7'},
    ])

    const selectLetterN = useMemo(() => {
        return cities.filter(c => c.title.toLowerCase().indexOf('n') > -1).map((m, i) => ({...m, value: i.toString()}))
    }, [cities])
    const selectUSA = useMemo(() => {
        return cities.filter(c => c.country === 'USA').map((m, i) => ({...m, value: i.toString()}))
    }, [cities])
    const selectLargePopulation = useMemo(() => {
        return cities.filter(c => c.largePopulation).map((m, i) => ({...m, value: i.toString()}))
    }, [cities])
    const addCity = () => {
        setCities([...cities, {country: 'USA', title: 'Boston', largePopulation: false, value: v1()}]);
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addCity}>add city</button>
        {counter}
        <div style={{display: 'flex', width: '35%', justifyContent: 'space-between'}}>
            <SelectMemo items={selectLetterN}/>
            <SelectMemo items={selectUSA}/>
            <SelectMemo items={selectLargePopulation}/>
        </div>
    </>
}