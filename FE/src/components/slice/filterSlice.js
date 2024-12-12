import {createSlice} from '@reduxjs/toolkit';
const initialFilter = {
    salePrice: [],
    brand: [],
    ram: [],
    storage: [],
    charger: [],
    camera: [],
    battery: [],
    type: [],
    sort: [],
    demand:[],
}
const initialState = {
    pendingFilter: initialFilter,
    filter:initialFilter,
    filterSort: initialFilter,
    
};
const filterSlice = createSlice({
    name:'filter',
    initialState,
    reducers:{
        clickButton(state, action) {
            const list = state.filter[action.payload.key];
            if (!list.includes(action.payload.value)) {
                list.push(action.payload.value);
            }else{
                list.splice(list.indexOf(action.payload.value),1);
            }
            state.pendingFilter = state.filter;
            state.filterSort = state.filter;
        },
        clickPopup(state, action){
            const list = state.pendingFilter[action.payload.key];
            if (!list.includes(action.payload.value)) {
                list.push(action.payload.value);
            }else{
                list.splice(list.indexOf(action.payload.value),1);
            }
        },
        clickPrice(state, action){
            state.pendingFilter[action.payload.key] = action.payload.value;
            
        },
        clickSort(state, action){
            const list = state.filterSort[action.payload.key];
            if (!list.includes(action.payload.value)) {
                list.push(action.payload.value);
            }
        },
        submit(state){
            state.filter = state.pendingFilter;
            state.filterSort = state.pendingFilter;
        },
        cancel(state){
            state.filter = { ...initialState.filter };
            state.pendingFilter = { ...initialState.pendingFilter };
            state.filterSort = {...initialState.filterSort}
            state.page = null;
        }
    }
});
export const {clickButton, clickPopup,clickSort, clickPrice,clickPagination, submit, cancel} = filterSlice.actions;
export default filterSlice.reducer;
