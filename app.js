const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div", 
        { id: "child" }, 
        React.createElement(
            "h1", 
            {}, 
            "I'm a h1 tag"
        )
    )
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

/*
const heading = React.createElement(
    "h1", 
    {id: "heading"}, 
    "Namaste React from React!"
);//heading is an object

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
root.render(heading);//this render method will convert heading object to a html tag
*/