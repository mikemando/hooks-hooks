import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
    {
        title: "What is React",
        content: "React is a frontend framework",
    },
    {
        title: "Why use React",
        content: "React is a favourite JS library among engineers",
    },
    {
        title: "How do you use React",
        content: "You use react by creating components",
    },
];

const options = [
    {
        label: "The Color Red",
        value: "red",
    },
    {
        label: "The Color Green",
        value: "green",
    },
    {
        label: "A shade of Blue",
        value: "blue",
    },
];

const App = () => {
    return (
        <div>
            <Dropdown />
        </div>
    );
};

export default App;
