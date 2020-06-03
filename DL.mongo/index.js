const mongoose = require('mongoose')

mongoose.connect(
    'mongodb+srv://admin:admin123@cluster0-osdeu.mongodb.net/test?retryWrites=true&w=majority',
    { autoReconnect: true }
    , (err) => {
        if (err) throw 'mongo connection problem'
        else console.log('mongo connected')
    })
  
const itemScheme = {
    barcode: String,
    name: String,
    price: String,
    department: String,
    category: String,
    image: String,
    brand: String,
    tags: String,
    description: String,
    
}

const userModel = mongoose.model('items', itemScheme)

const getItems = async () => {
    return userModel.find({}, 'barcode name')
}

const getItem = async (barcode) => {
    return userModel.findOne({barcode})
}

const getUserByEmail = async (email) => {
    return userModel.findOne({ email })
}

const updateItem = async (newItem) => {
    return userModel.findOneAndUpdate({ id: newItem.id }, newItem)
}

const createItem = async (data) => {
    return userModel.create(data)
}
const delItem = async (barcode) => {
    return userModel.findOneAndDelete({ barcode })
}

module.exports = { getItems, getItem, createItem, getUserByEmail, updateItem, delItem }

