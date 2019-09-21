import { observable, action } from "mobx";

const searchState = observable({
    term: "",
    state: "",
    results: [],
    totalCounte: 0,

    search: action(function() {
        
    }),

    setTerm: action(function(value) {
        
    })
})