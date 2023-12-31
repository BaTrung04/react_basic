// luu state la object
const initState = {
    users: [
        { id: 1, name: "Ba Trung" },
        { id: 2, name: "Duy Long" },
        { id: 3, name: "Tuan Thanh" }
    ],
    post: [],
};
// state trang trai cua redux  
// action truyen hanh dong
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "DELETE_USER":
            let users = state.users;
            users = users.filter((item) => item.id !== action.payload.id);
            return {
                ...state,users,
            };
        case "CREATE_USER":
            let id = Math.floor(Math.random() * 100001);
            let user = { id: id, name: `Random ${id}` };
            return {
                ...state,users: [...state.users, user],
            };
        default:
            return state;
    }
    // dispatch /reducers viet ben tren
    return state;
};
export default rootReducer;
