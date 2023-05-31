import { actionFinanceType, financeStateType } from "../types/personalFinanceTypes"


export const PersonalFinanceReducer = (initialState:financeStateType,action:actionFinanceType)=>{

    switch (action.type) {
        case 'addFinance':
            return {
                ...initialState,
                finances:[...initialState.finances,action.payload]
            }
            break;
        case 'removeFinance':

            return {
                ...initialState,
                finances:initialState?.finances.filter(finance=>finance.id!==action.payload.id)
            }
            break;
    
        default:
            break;
    }


    return initialState
}