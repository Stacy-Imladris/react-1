import React, {useMemo, useState} from 'react';

export default {
    title: 'hooks demo/useState',
}

function generateData() {
    // difficult counting
    console.log('generateData')
    return 1
}

export const Example1 = () => {
    console.log('Example1')

    //const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState<number>(generateData)

    return <>
        <button onClick={() => setCounter((state) => state + 1)}>+</button>
        {counter}
    </>
}