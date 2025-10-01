const supabase = require('../config/supabase.config');
const carService = {};

carService.getAllCarsFromDB = async () => {
  const { data, error } = await supabase
    .from('cars')
    .select(`
      *,
      images:car_images(*)
    `);

  if (error) throw error;
  return data;
};


module.exports = carService;