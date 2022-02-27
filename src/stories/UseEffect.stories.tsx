import React, {useState, useEffect} from 'react';

export default {
    title: 'hooks demo/useEffect',
}

export const SimpleExample = () => {
    console.log('SimpleExample')

    const [fake, setFake] = useState<number>(1)
    const [counter, setCounter] = useState<number>(1)

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
        //api.getUsers().then('')
        //setInterval
        //indexedDB
        //document.getElementId
        //document.title = 'User ';
    })
    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}

export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample')

    const [fake, setFake] = useState<number>(1)
    const [counter, setCounter] = useState<number>(1)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log('setTimeout')
            document.title = counter.toString()
        }, 1000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}

export const SetIntervalExample = () => {
    console.log('SetIntervalExample')

    const [fake, setFake] = useState<number>(1)
    const [counter, setCounter] = useState<number>(1)

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('tick: ' + counter)
            setCounter(state => state + 1)
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return <>
        Hello, counter: {counter} - fake: {fake}
    </>
}

export const MyClock = () => {
    console.log('MyClock')

    const [time, setTime] = useState(new Date())

    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return <>
        Hello, this is my clock: {hours > 9 ? hours : '0' + hours}:{minutes > 9 ? minutes : '0' + minutes}:{seconds > 9 ? seconds : '0' + seconds}
    </>
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState<number>(1)

    console.log('ResetEffectExample rendered with: ' + counter)

    useEffect(() => {
        console.log('Effect occurred: ' + counter)
        return () => {
            console.log('RESET EFFECT: ' + counter)
        }
    }, [counter])

    const increase = () => setCounter(counter + 1)

    return <>
        Hello, counter: {counter} <button onClick={increase}>+</button>
    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState<string>('')

    console.log('KeysTrackerExample rendered with: ' + text)

    /*useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(state => state + e.key)
        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [])*/

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])

    const increase = () => setText(text + 1)

    return <>Typed text: {text}</>
}

export const SetTimeoutExample2 = () => {
    const [text, setText] = useState<string>('')

    console.log('SetTimeoutExample2 rendered with: ' + text)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log('TIMEOUT EXPIRED')
            setText('3 seconds passed')
        }, 3000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [text])

    return <>Typed text: {text}</>
}