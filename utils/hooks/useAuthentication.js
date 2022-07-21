import React, {useEffect, useState} from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { collection, doc, setDoc, getDoc } from "firebase/firestore"; 
import db from '../../firebase.js'

const auth = getAuth();

export function useAuthentication() {
	const [user, setUser] = useState();
	const [userData, setUserData] = useState();

	useEffect(() => {
		const unsubscribeFromAuthStatusChanged = onAuthStateChanged(auth, async (user) => {
		if (user) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/firebase.User
			setUser(user);
			const docRef = doc(db, "Users", user.uid);
			const docSnap = await getDoc(docRef);

			if(docSnap.exists()) {
				//docSnap.data() returns data from the document of user uid, which is in collection Users
				setUserData(docSnap.data());
			}

		} else {
			// User is signed out
			setUser(undefined);
		}
		});

		return unsubscribeFromAuthStatusChanged;
	}, []);

	return {
		user,
		userData
	};
}