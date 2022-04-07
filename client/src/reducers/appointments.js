export default (appointments = [], action) => {

    switch (action.type) {
        case 'FETCH_ALL':            
            return action.payload;
        case 'CREATE':            
            return appointments;    
        default:
            return appointments;
    }
}