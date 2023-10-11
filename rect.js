const head = React.createElement("div",{id: "parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I am h1 tag child 1 "),
        React.createElement("h2",{},"hi i am h2 tag child 1"),
    ]),
    React.createElement("div",{id: "child"},[
        React.createElement("h1",{},"hi am h1 tag from child 2"),
        React.createElement("h2",{},"hi am h2 from child 2"),
        React.createElement("h2",{},"hi am h2 from child 2"),
    ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(head)