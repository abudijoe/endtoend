module.exports = function Items(DL){
    return {
        read: () => {
            return DL.getItems()
        },
        
        readOne: (barcode) => {
            return DL.getItem(barcode)
        },

        create: ( data) => { 
            return DL.createItem(data) 
        },
        update: (data) => {
            const {name , price , description} = data
            return DL.updateItem({name , price , description})
        },
        delete: (barcode) => {
            return DL.delItem(barcode)
        }
    }
}