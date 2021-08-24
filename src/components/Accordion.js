import React, { useState } from "react";

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClicked = (index) => {
        setActiveIndex(index);
    };

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? "active" : "";

        return (
            <React.Fragment key={item.title}>
                <div
                    onClick={() => onTitleClicked(index)}
                    className={`title ${active}`}
                >
                    <i className="dropdown icon">{item.title}</i>
                </div>
                <div className={`content ${active}`}>{item.content}</div>
            </React.Fragment>
        );
    });

    return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
