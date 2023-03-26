
const id = "7041414"
const name = "bot";
const amount = 1000;




import axios from "axios";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import { colorBlooks } from "./freeBlooks.js";

const response = await fetch("https://id.blooket.com/api/users/login", { body: JSON.stringify({ name: "BotAcc00", password: "4wgmduaS" }), method: "POST" });
const Cookie = response.headers.get('set-cookie').split(' ')[0];
let names = [];
for (let i = 1; i <= amount; i++) {
    (async () => {
        let IGN = Array(15).fill().map(x => String.fromCharCode(Math.floor(Math.random() * 25) + 97)).join("");
        while (names.includes(IGN)) IGN = Array(12).fill().map(x => String.fromCharCode(Math.floor(Math.random() * 25) + 97)).join("");
        const { data: { success, fbToken, fbShardURL, msg } } = await axios.put("https://fb.blooket.com/c/firebase/join", { id, name: IGN }, { headers: { Cookie } });
        if (!success) return console.log(msg, IGN, id);
        const liveApp = firebase.initializeApp({
            apiKey: "AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU",
            authDomain: "blooket-2020.firebaseapp.com",
            projectId: "blooket-2020",
            storageBucket: "blooket-2020.appspot.com",
            messagingSenderId: "741533559105",
            appId: "1:741533559105:web:b8cbb10e6123f2913519c0",
            measurementId: "G-S3H5NGN10Z",
            databaseURL: fbShardURL
        }, IGN);
        const auth = firebase.auth(liveApp);
        await auth.setPersistence(firebase.auth.Auth.Persistence.NONE).catch(console.error);
        await auth.signInWithCustomToken(fbToken).catch(console.error);
        await liveApp.database().ref(`${id}/c/${IGN}`).set({ b: colorBlooks[Math.floor(Math.random() * colorBlooks.length)], bg: "slime", cr: 99999999999999999999999999, g: 99999999999999999999999999, f: 99999999999999999999999999, w: 99999999999999999999999999, d: 99999999999999999999999999, xp: 99999999999999999999999999, c: 99999999999999999999999999, ca: 99999999999999999999999999 });
        return await liveApp.delete();
    })().then((x) => console.log(`${name}${i} | ${id}`));
    await new Promise(r => setTimeout(r, 600));
}
