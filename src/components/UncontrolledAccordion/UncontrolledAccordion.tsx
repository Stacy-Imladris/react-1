import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion (props: AccordionPropsType) {
    console.log("UncontrolledAccordion rendering")

    //let [collapsed, setCollapsed] = useState(false);
    let [state, dispatch] = useReducer(reducer, {collapsed: false});

    return <div>
        {/*<AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>*/}
        <AccordionTitleMemo title={props.titleValue} onClick={() => {dispatch({type: TOGGLE_COLLAPSED})}}/>
        { !state.collapsed && <AccordionBodyMemo/> }
    </div>
}
export const UncontrolledAccordionMemo = React.memo(UncontrolledAccordion)

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={() => {props.onClick()}}>-- {props.title} --</h3>
    )
}
export const AccordionTitleMemo = React.memo(AccordionTitle)

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
export const AccordionBodyMemo = React.memo(AccordionBody)