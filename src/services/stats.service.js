const supabase = require('../config/supabase.config');
const statsService = {};

statsService.getMonthlyRentalStats = async (year, month) => {
  const { data, error } = await supabase
    .rpc('get_dashboard_stats', {
      target_year: year,
      target_month: month
    })
    .single();

  if (error) throw error;
  console.log("Monthly Rentals: ", data);
  return data;
};

module.exports = statsService;
