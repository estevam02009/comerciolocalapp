const mongoose = require('mongoose')
const Schema = mongoose.Schema

// geolocation Schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: 'Point'
    },
    coordinates: {
        type: [Number],
        index: '2dsphere'
    }
})

// CL Schema
const CLSchema = new Schema({
    name: {
        type: String,
        required: [true, '*Campo Obrigatório!']
    },
    details: {
        type: String
    },
    phone: {
        type: String
    },
    status: {
        type: Boolean,
        default: true
    },

    // Geo Location
    geometry: GeoSchema
});

// criar Modelo_CL baseado em CL_Schema: 'comerciolocal'
const CL = mongoose.model('ComercioLocal', CLSchema)

// exportar p mpdel
module.exports = CL