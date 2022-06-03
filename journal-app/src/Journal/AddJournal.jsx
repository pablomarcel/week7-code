import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import db from '../db';
import firebase from "firebase/compat/app";
import {useEffect} from "react";

export default function AddJournal() {
    const [entry, setEntry] = useState('');
    const [user, setUser] = useState(null);


    useEffect(()=>{
        const unsubscribe = firebase.auth().onAuthStateChanged(user=>{
            console.log(user)
            setUser(user)
        })
        return ()=>unsubscribe()
    }, [])

    const submitForm = (e) => {
        e.preventDefault();

        if (!user){
            return window.alert('Error, user not available')
        }


        setEntry('');
        const entriesRef = collection(db, 'users', user.uid, 'journalEntries');
        addDoc(entriesRef, {
            entry,
            createdAt: new Date()
        });
    }

    return (
        <div>
            <h2>Add Journal</h2>
            <form onSubmit={submitForm}>
                <label htmlFor="entry-input">Entry: </label>
                <textarea
                    id="entry-input"
                    value={entry}
                    onChange={e => setEntry(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
