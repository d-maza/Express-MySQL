import { connection } from '../db.js';

export const getPacients = async (req, res) => {
    try {
         const [result] = await connection.query('SELECT * FROM `pacient`')
         return res.send(result)
    } catch (error) {
        
        return res.status(500).send(error)
    }
   
};
export const getPacient = async (req, res) => {
 try {
    const [result] = await connection.query('SELECT * FROM pacient WHERE id = ?', [req.params.id])
    if (result.length <= 0 ) return res.status(404).json({ message : 'pacient no trobat'})
    return res.send(result)
 } catch (error) {
    return res.status(500).send(error)
 }
    
};

export const createPacient = async (req, res) => {
    try {
        const {nom,cognoms,telefon,curs_escolar, data_naixement,sex,esports,fecha, referidor } = req.body
        const [rows] = await connection.query('INSERT INTO pacient (nom,cognoms, telefon, curs_escolar, data_naixement, sex,esports, fecha, referidor) VALUE (?,?,?,?,?,?,?,?,?)', [nom, cognoms, telefon, curs_escolar, data_naixement, sex, esports, fecha, referidor]);
        res.send({ id: rows.insertId , nom,cognoms})
    } catch (error) {
        return res.status(500).send(error)
    }
    

}
export const updatePacient = async (req, res) => {
    try {
        const {id} = req.params
    const {nom,cognoms, telefon,curs_escolar, data_naixement, sex, esports,fecha,referidor } = req.body
    let [result] = await connection.query('UPDATE pacient SET nom = IFNULL(?,nom),cognoms = IFNULL(?,cognoms), telefon = IFNULL(?,telefon), curs_escolar = IFNULL(?,curs_escolar), data_naixement = IFNULL(?, data_naixement), sex = IFNULL(?,sex) ,esports = IFNULL(?,esports), fecha = IFNULL(?,fecha), referidor = IFNULL(?,referidor) WHERE id = ?', [nom,
            cognoms,telefon,curs_escolar,data_naixement,sex,esports,fecha, referidor,id])
    if (result.affectedRows === 0) return res.status(404).json({ message: 'pacient no esborrat' })
    
    const [rows] = await connection.query('SELECT * FROM pacient WHERE id = ?', [id])
    res.json(rows[0])
    } catch (error) {
        return res.status(500).send(error)
    }
    
        
}

export const deletePacient = async (req, res) => {
    try {
      const [result] = await connection.query('DELETE FROM pacient WHERE id = ?', [req.params.id])
    if (result.affectedRows <= 0 ) return res.status(404).json({ message : 'pacient no esborrat'})
    return res.send('pacient esborrat')  
    } catch (error) {
        return res.status(500).send(error)
    }
    
}