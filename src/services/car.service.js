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

carService.createCarInDB = async (car) => {
  const { data, error } = await supabase
    .from('cars')
    .insert(car)
    .select()
    .single();

  if (error) throw error;
  return data;
};

carService.updateCarInDB = async (id, car) => {
  const { data, error } = await supabase
    .from('cars')
    .update(car)
    .eq('id', id);

  if (error) throw error;
  return data;
};

carService.updateCarStatusInDB = async (id, status) => {
  const { data, error } = await supabase
    .from('cars')
    .update({ 'available': status })
    .eq('id', id);

  if (error) throw error;
  return data;
};


module.exports = carService;