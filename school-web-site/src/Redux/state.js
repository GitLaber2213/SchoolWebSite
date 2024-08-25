import { rerenderEntireThree } from "../render";


export let state = {
    informationPages: [],
    footerInformation: {},
    currPage: 'mainPage'
}

export const getCurrentPage = (pageName) => {
    setCurrentPageName(pageName);
    state.informationPages.length = 0;
    fetch('https://schoolbackend-r4s6.onrender.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            PageName: pageName
        })
    })
        .then(response => response.json())
        .then(data => {
            data.map(el => state.informationPages.push(el));
            rerenderEntireThree(state)
        })
}

const setCurrentPageName = (pageName) => {
    state.currPage = pageName;
}

fetch('https://schoolbackend-r4s6.onrender.com/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        PageName: 'mainPage'
    })
})
    .then(response => response.json())
    .then(data => {
        data.map(el => state.informationPages.push(el));
        rerenderEntireThree(state)
    })

fetch('https://schoolbackend-r4s6.onrender.com/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        GiveMeFooter: 'GiveMeFooter'
    })
})
    .then(response => response.json())
    .then(data => {
        data.map(el => state.footerInformation = {
            PhoneNumber: el.PhoneNumber,
            FaxNumber: el.FaxNumber,
            EmailAddres: el.EmailAddres
        });
        rerenderEntireThree(state)
    })