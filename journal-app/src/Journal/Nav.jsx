import React from 'react';
import { Link } from 'react-router-dom';
import firebase from "firebase/compat/app";
import {useEffect, useState} from "react";

export default function Nav() {

    const [user, setUser] = useState(null);

    useEffect(()=>{
        const unsubscribe = firebase.auth().onAuthStateChanged(user=>{
            console.log(user)
            setUser(user)
        })
        return ()=>unsubscribe()
    }, [])


    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/journal">Journal</Link></li>
                <li><Link to="/journal/1">Journal Entry</Link></li>
            </ul>
            {user ? (
                <div>
                    {/*<img src={user.photoURL} alt={user.displayName}/>*/}
                    <p>{user.displayName}</p>
                    <button
                        onClick={()=> firebase.auth().signOut()}>Sign Out</button>
                </div>
            ):(
                <div>
                    <Link to="/">Sign In</Link>
                </div>
            )


            }
        </div>
    );
}
