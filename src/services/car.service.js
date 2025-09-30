const supabase = require('../config/supabase.config');
const carService = {};

carService.getAllCarsFromDB = async () => {
    const { data, error } = await supabase.from('Cars').select('*');
    if (error) throw error;
    return data;
};


module.exports = carService;