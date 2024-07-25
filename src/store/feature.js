import { createSlice ,nanoid } from "@reduxjs/toolkit";

const initialState = {
    account : [{    id : '1',
        Lname : "mehdi",
        Fname : "hassan",
        Email : "mehdi@gmail.com",
        Password : "134"}]

}

export const Account = createSlice({
    name : 'account',
    initialState,
    reducers:{
        addAccount: (state , action)=>{               //thats the thing
              const Naccount = {
                id : nanoid(),
        Lname : action.payload.Lname,
        Fname : action.payload.Fname,
        Email : action.payload.Email,
        Password :action.payload.Password
              }
            state.account.push(Naccount)
        },
        deleteAccount : (state , action)=>{
             state.account = state.account.filter((item)=> item.Email != action.payload)
        }
    }
}

)

export const {addAccount , deleteAccount} = Account.actions
export default Account.reducer