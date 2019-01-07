import {db} from '../components/config/db'

export const addItem = (item, item1) => {
    db.ref('/items').push({
        login: item,
        password: item1
    })
    
}
export const regItem = (item, item1, item2, item3, item4) =>  {
    db.ref('/registration').push({
        login: item,
        password: item1,
        name: item2,
        email: item3,
        phone: item4
    })
}

export const readItem = () => {
    db.ref('/items').on('value', function(snapshot){
        alert(snapshot.val())
    })
}