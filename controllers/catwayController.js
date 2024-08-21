const Catway = require('./models/Catway');

exports.getCatways = async (req, res) => {
    try {
        const catways = await Catway.find();
        res.json(catways);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.getCatwayById = async (req, res) => {
    try {
        const catway = await Catway.findById(req.params.id);
        if (!catway) return res.status(404).json({ msg: 'Catway not found' });
        res.json(catway);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.createCatway = async (req, res) => {
    try {
        const { catwayNumber, type, catwayState } = req.body;
        const newCatway = new Catway({ catwayNumber, type, catwayState });
        const catway = await newCatway.save();
        res.json(catway);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.updateCatway = async (req, res) => {
    try {
        const { catwayNumber, type, catwayState } = req.body;
        let catway = await Catway.findById(req.params.id);
        if (!catway) return res.status(404).json({ msg: 'Catway not found' });

        catway.catwayNumber = catwayNumber || catway.catwayNumber;
        catway.type = type || catway.type;
        catway.catwayState = catwayState || catway.catwayState;

        await catway.save();
        res.json(catway);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.deleteCatway = async (req, res) => {
    try {
        let catway = await Catway.findById(req.params.id);
        if (!catway) return res.status(404).json({ msg: 'Catway not found' });

        await Catway.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Catway removed' });
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
