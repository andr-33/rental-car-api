const supabase = require('../config/supabase.config');
const rentalService = {};

rentalService.getAllRentalsFromDB = async () => {
  const { data, error } = await supabase
    .from('rentals')
    .select(`
      id,
      pickup_date,
      return_date,
      rental_days,
      total_amount,
      status,
      user_id(full_name),
      car_id(model, license_plate)
    `);

  if (error) throw error;
  return data;
};

rentalService.createRentalInDB = async (rental) => {
  const { data, error } = await supabase
    .from('rentals')
    .insert(rental)
    .select()
    .single();

  if (error) throw error;
  return data;
};

module.exports = rentalService;