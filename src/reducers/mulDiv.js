const initialState = 5;

const mulDivTheNumber = (state = initialState, action) =>{
    switch(action.type){
        case "MUL" : return state * action.payload;
        case "DIV" : return state / 5;
        default : return state;

    }
}
 export default mulDivTheNumber;