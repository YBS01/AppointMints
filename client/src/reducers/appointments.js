export default (appointments = [], action) => {

    switch (action.type) {
        case 'UPDATE':            
            return appointments.map((appointment) => appointment._id === action.payload._id ? action.payload : appointment);
        case 'FETCH_ALL':            
            return action.payload;
        case 'CREATE':            
            return [...appointments, action.payload];    
        default:
            return appointments;
    }
}
