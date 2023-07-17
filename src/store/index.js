import { configureStore, createSlice} from '@reduxjs/toolkit'


const todoSlice = createSlice({
    name:'todo',
    initialState:{
        todoItems:[{
            id:'e1',
            title:'Sample Do to Item',
            isCompleted:false
        },
        {
            id:'e2',
            title:'Sample Do to Item2',
            isCompleted:true
        }
        ]
    },
    reducers:{
        addItem(state,action){
            const result = state.todoItems.find((item) => item.title === action.payload);
            if(result) return;
            state.todoItems.push({id:Math.random(),title:action.payload,isCompleted:false})
        },
        removeItem(state,action){
            const index = state.todoItems.findIndex((item) => item.title === action.payload);
            if(index === -1) return;
            state.todoItems.splice(index,1);
        },
        changeTaskStatus(state,action){
            const index = state.todoItems.findIndex((item) => item.title === action.payload);
            if(index === -1) return;
            state.todoItems[index].isCompleted = !state.todoItems[index].isCompleted ;
        }
    }
});

export const todoActions = todoSlice.actions;

const store = configureStore({
    reducer:todoSlice.reducer
});

export default store;