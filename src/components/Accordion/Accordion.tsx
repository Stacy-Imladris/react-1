import React from "react";

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    /**
     * Elements that are showed when is opened. Each item should be ItemType
     */
    items: ItemType[]
    /**
     * Callback that is called when any item clicked
     * @param value is value of clicked item
     */
    onClick: (value: any) => void
    /**
     * optional color of header text
     */
    color?: string
}

export function Accordion (props: AccordionPropsType) {
    console.log("Accordion rendering")
    return <div>
        <AccordionTitleMemo title={props.titleValue} onChange={props.onChange} color={props.color}/>
        { !props.collapsed && <AccordionBodyMemo items={props.items} onClick={props.onClick}/> }
    </div>
}
export const AccordionMemo = React.memo(Accordion)

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 style={{color: props.color ? props.color : 'black'}}
            onClick={(e) => props.onChange()}>-- {props.title} --</h3>
    )
}
export const AccordionTitleMemo = React.memo(AccordionTitle)

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return (
        <ul>
            {props.items.map( (i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    )
}
export const AccordionBodyMemo = React.memo(AccordionBody)