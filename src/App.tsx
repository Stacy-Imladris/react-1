import React, {useState} from 'react';
import './App.css';
import {RatingMemo, RatingValueType} from './components/Rating/Rating';
import {UncontrolledRatingMemo} from './components/UncontrolledRating/UncontrolledRating';
import {AccordionMemo} from './components/Accordion/Accordion';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {OnOffMemo} from './components/OnOff/OnOff';
import {UncontrolledAccordionMemo} from './components/UncontrolledAccordion/UncontrolledAccordion';

function App(props: any) {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className={"App"}>
            <OnOffMemo on={switchOn}
                   onChange={(on) => {setSwitchOn(on)}}/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <RatingMemo value={ratingValue}
                    onClick={setRatingValue}/>
            <UncontrolledRatingMemo onChange={()=>{}} />
            <AccordionMemo titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={() => setAccordionCollapsed(!accordionCollapsed)}
            items={[]} onClick={()=>{}}/> {/*заглушка! требует пропсы (для истории нужны)*/}
            {/*<UncontrolledOnOffMemo />*/}
            <UncontrolledAccordionMemo titleValue={"Menu"}/>
            {/*<Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendered")
    return <h1>{props.title}</h1>
}

export default App;
