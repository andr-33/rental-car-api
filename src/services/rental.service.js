const supabase = require('../config/supabase.config');
const rentalService = {};

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