const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => { 
    req.getConnection((err, conn) => {
        if(err) return res.send(err);

        conn.query('SELECT * FROM Persona', (err, rows) => {
            if(err) return res.send(err);

            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO Persona set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('usuario agregado!')
        })
    })
})

routes.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM Persona WHERE idPersona = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Persona Eliminada')
        })
    })
})

routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE Persona set ? WHERE idPersona = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Persona actualizada')
        })
    })
})

module.exports = routes;