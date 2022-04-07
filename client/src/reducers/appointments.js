export default (appointments = [], action) => {

    switch (action.type) {
        case 'FETCH_ALL ':            
            return appointments;
        case 'CREATE':            
            return appointments;    
        default:
            return appointments;
    }
}