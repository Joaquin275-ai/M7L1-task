const express = require('express');
const router = express.Router();
const supabase = require('../config/supabaseClient');

// 🎫 TICKET ÚNICO — Completa la ruta GET /criaturas

router.get('/', async (req, res) => {
    const { data, error } = await supabase
        .from('Criaturas')
        .select('*');

    if (error) {
        return res.status(500).json({ error });
    }

    res.json(data);
});

router.post('/', async (req, res) => {
    const { nombre, tipo, poder, capturada } = req.body;

    const { data, error } = await supabase
        .from('Criaturas')
        .insert({
            nombre,
            tipo,
            poder,
            capturada
        })
        .select();

    if (error) {
        return res.status(500).json({ error });
    }

    res.status(201).json(data);
});
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { poder } = req.body;

    const { data, error } = await supabase
        .from('Criaturas')
        .update({ poder })
        .eq('ID', id)
        .select();

    if (error) {
        return res.status(500).json({ error });
    }

    res.json(data);
});
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    const { data, error } = await supabase
        .from('Criaturas')
        .delete()
        .eq('ID', id)
        .select();

    if (error) {
        return res.status(500).json({ error });
    }

    res.json(data);
});
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    const { data, error } = await supabase
        .from('Criaturas')
        .select('*')
        .eq('ID', id)
        .single();

    if (error) {
        return res.status(404).json({
            mensaje: 'No existe una criatura con ese ID'
        });
    }

    res.json(data);
});
module.exports = router;
