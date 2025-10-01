const supabase = require('../config/supabase.config');
const aiportService = {};

aiportService.getAllAirportsFromDB = async () => {
    const { data, error } = await supabase.from('airports').select('*');
    if (error) throw error;
    return data;
};

module.exports = aiportService;