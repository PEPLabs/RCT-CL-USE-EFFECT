import React, { useEffect, useState } from 'react';


interface MyProps {
}


const DemoUseEffectComponent: React.FC<MyProps> = (props: MyProps) => {

    //Creating some state for the component
    const [demoNumberState, setDemoNumberState] = useState(0);
    const [demoBooleanState, setDemoBooleanState] = useState(true);

    /*  
        The component has three lifecycles you should be aware of:
            -A component "mounts" when it appears on screen.
            -A component "unmounts" when it disappers from the screen.
            -A component "updates" when the state is updated.

        Format:

            useEffect( callbackFunction , arrayOfVariables)
    */

    //useEffect 1: triggers EVERY time the component mounts and EVERY time the component updates
    useEffect(()=>{
        //When you don't give useEffect a second parameter the logic of this function will trigger everytime the component mounts
        console.log("Demo UseEffect 1: Mounted");

        return ()=>{
            //If you return a function in the useEffect then the returning function will be called when the component unmounts.
            console.log("Demo UseEffect 1: Unmount");
        }
    });

    //useEffect 2: triggers when the "demoBooleanState" variable's state has change and has to be rerendered to the screen
    //      Note: if you leave the array of variables empty then the sideeffect will trigger when the component mounts, but not when it updates
    useEffect(()=>{
        console.log("Demo UseEffect 2: Update");
    }, [demoBooleanState]);


    return (
        <React.Fragment>
            <h4>Demo UseEffect Component</h4>

            {/* Here is an example of you create side effects in React. */}
            
            <p>These buttons will trigger various "useEffect" functionality</p>
            <p>Open the dev console to see the output of the useEffect hooks; to do this hit F12 on your keyboard.</p>

            <br/>

            <p>The component "update" funcionality will trigger; this requires the component to first unmount then mount itself once more.</p>
            <p>Demo Number State Value: {demoNumberState}</p>
            <button onClick={()=>{setDemoNumberState(demoNumberState-1)}}>Minus 1 to number state</button>
            <button onClick={()=>{setDemoNumberState(demoNumberState+1)}}>Add 1 to number state</button>
            <br/>

            <p>Like the buttons above, the component "update" funcionality will trigger; this requires the component to first unmount then mount itself once more. Additionally,
                there is a specific use effect that is synchronized to the "demoBolleanState" variable and will only trigger when this variable is updated.
            </p>
            <p>Demo Boolean State Value: {""+demoBooleanState}</p>
            <button onClick={()=>{setDemoBooleanState(!demoBooleanState)}}>Flip the boolean state</button>

            {/* Notice how the function doesn't have parenthesis at the end, you're referencing a function, not invoking it. */}

        </React.Fragment>
    );
}

export default DemoUseEffectComponent;