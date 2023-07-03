import React, { useEffect, useState } from 'react';


interface MyProps {
}


const TodoUseEffectComponent: React.FC<MyProps> = (props: MyProps) => {

    //Creating some state for the component
    const [todoUseEffectState, setTodoUseEffectState] = useState(0); //used to count the number of time the useEffect has triggered
    const [todoNumberState, setTodoNumberState] = useState(0);



    return (
        <React.Fragment>
            <h4>Todo UseEffect Component</h4>

            {/* TODO */}
            <p>TODO: create a useEffect function that triggers whenever the "todoNumberState" variable is altered. The useEffect will then add 1 to the "todoUseEffectState" variable.
                It should do nothing when the component is mounted or unmounted.
            </p>
            <p>UseEffect: {todoUseEffectState}</p>

            <br />
            <p>Todo Value: {todoNumberState}</p>
            <button onClick={() => { setTodoNumberState(todoNumberState - 1) }}>Minus 1 to number state</button>
            <button onClick={() => { setTodoNumberState(todoNumberState + 1) }}>Add 1 to number state</button>

        </React.Fragment>
    );
}

export default TodoUseEffectComponent;