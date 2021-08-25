import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

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
    // const [selected, setSelected] = useState(options[0]);
    // const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            {/* <button onClick={() => setShowDropdown(!showDropdown)}>
                Toogle Dropdown
            </button>
            {showDropdown ? (
                <Dropdown
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}
                />
            ) : null} */}
            <Translate />
        </div>
    );
};

export default App;
