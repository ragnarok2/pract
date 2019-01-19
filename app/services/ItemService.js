import {db} from '../components/config/db'

export const addItem = (item, item1) => {
    db.ref('/items').push({
        login: item,
        password: item1
    })
    
}
export const regItem = (item2, item3, item4, item5, item6) =>  {
    db.ref('/registration').push({
        login: item2,
        password: item3,
        name: item4,
        email: item5,
        phone: item6,
    })
}

export const readItem = () => {
    db.ref('/items').on('value', function(snapshot){
        alert(snapshot.val())
    })
}