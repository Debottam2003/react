import React from 'react';

function Foreach() {
    const array = ['apple', 'orange', 'watermelon', 'banana'];
    const listItems = [];

    array.forEach((item, index) => {
        listItems.push(<li key={index}>{item}</li>);
    });

    return <ul>{listItems}</ul>;
}

export default Foreach;
