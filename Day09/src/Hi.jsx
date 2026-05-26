// import React from 'react'

// const Hello = () => {
//     return (
//         <div>
//             <h1>Hello</h1>
//         </div>
//     )
// }

// export default Hello
// function Hi (){
//     return <h1>Hello</h1>
// }
// export default Hi

function Hi(props) {
    function getname() {
        return props.name
    }
    function onclickhandle() {
        alert("Hello!")
    }
    function handleinput(event) {
        // console.log(object)
        console.log("Value :", event.target.value)
    }


    const islogidein = true;
    let message;

    if (islogidein) {
        message = <h1>Welcome Yash!</h1>
    } else {
        message = <h1>please Logged In </h1>
    }
    const Islogidein = false;

    return (
        <>
            <div>
                <h1>Hello my name is Yash</h1>
                <p>{getname()}</p>
                <button onClick={onclickhandle}>Click Me</button><br />
                <button onClick={() => alert("Hello from Makwana Family")}>Click Me</button><br />
                <input type="text" onChange={handleinput} placeholder="Enter Script" />
                {message}
                {Islogidein ? "Welcome Yash!" : "Please Logged In"}

            </div>
        </>
    )
}
export default Hi