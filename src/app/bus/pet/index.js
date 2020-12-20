import React from 'react';
import Counter from "./counter";
import List from "./list";
import SpecialList from "./specialList";
import Profile from "./profile";

export default function Pet() {

    return (
        <>
            <h1>Pet</h1>
            <Profile/>
            <Counter/>
            <List/>
            <SpecialList/>
        </>
    )
}