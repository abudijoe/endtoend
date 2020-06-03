const BL = require('./BL')

function Router(app){
    app.get('/' , (req, res) => {
        res.send (`<h1> This is a Test Page</h1>`)    
    })

    app.get('/items/' , async (req, res) =>{
        try {
            const result = await BL.items.read()
            res.send(result)
        }
        catch (error){
            res.send({error: error.message || error})
        }
    }) 
    app.post('/item', async (req, res) => {
        try {
            const result = await BL.items.create(req.body)
            res.send(result)
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })
    app.get('/item/:barcode' , async (req, res) =>{
        try {
            const
            {barcode} = req.params
            result = await BL.items.readOne(barcode)
            res.send(result)
        }
        catch (error){
            res.send({error: error.message || error})
        }
    })
    app.put('/item/:barcode', async (req, res) => {
        try {
            const 
            {barcode} = req.params
            result = await BL.items.update(req.body)
            res.send(result)
        } catch (error) {
            res.send({ error: error.message || error })
        }
    }) 
    app.delete('/item/:barcode', async (req, res) => {
        try {
            const { barcode } = req.params
            const result = await BL.items.delete(barcode)
            res.send(result)
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })
}



module.exports = Router