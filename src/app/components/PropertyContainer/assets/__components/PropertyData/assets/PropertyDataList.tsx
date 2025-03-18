import React from 'react'
import DataContainer from './DataContainer';

interface PropertyDataListProps {
    rawData: any;
}

export default function PropertyDataList( { rawData }: PropertyDataListProps ) {
  return (
      <div className='grid grid-cols-4 gap-4'>
          <DataContainer title='Location' data={[
                { icon: '🏠', title: 'UPRN', value: rawData.uprn },
                { icon: '📮', title: 'Postcode', value: rawData.location.admin_boundaries?.postcode },
                { icon: '🏞️', title: 'County Name', value: rawData.location.admin_boundaries?.county_name },
                { icon: '📍', title: 'Region Name', value: rawData.location.admin_boundaries?.region_name },
                { icon: '🌍', title: 'Country Name', value: rawData.location.admin_boundaries?.country_name },
            ]}/>
          <DataContainer title='EPC Data' data={[
                { icon: '🏠', title: 'Energy Rating (Current)', value: rawData.energy.epcs.epc?.energy_rating_current || 'N/A' },
                { icon: '🌟', title: 'Energy Rating (Potential)', value: rawData.energy.epcs.epc?.energy_rating_potential || 'N/A' },
                { icon: '🔥', title: 'Heating Cost (Current)', value: `£${rawData.energy.epcs.epc?.heating_cost_current || 'N/A'}` },
                { icon: '💡', title: 'Lighting Cost (Current)', value: `£${rawData.energy.epcs.epc?.lighting_cost_current || 'N/A'}` },
                { icon: '💧', title: 'Hot Water Cost (Current)', value: `£${rawData.energy.epcs.epc?.hot_water_cost_current || 'N/A'}` },
                { icon: '📏', title: 'Total Floor Area', value: `${rawData.energy.epcs.epc?.total_floor_area || 'N/A'} m²` },
            ]} />
          <DataContainer title='Energy Usage' data={[
                { icon: '⚡', title: 'Mean Electricity Usage', value: `${rawData.energy.average_energy_usage_stats.lower_layer_super_output_area.mean_electricity_usage?.toFixed(2)} kWh` },
                { icon: '💷', title: 'Mean Electricity Cost', value: `£${rawData.energy.average_energy_usage_stats.lower_layer_super_output_area.mean_electricity_cost?.toFixed(2)}` },
                { icon: '🔥', title: 'Mean Gas Usage', value: `${rawData.energy.average_energy_usage_stats.lower_layer_super_output_area.mean_gas_usage?.toFixed(2)} kWh` },
                { icon: '💷', title: 'Mean Gas Cost', value: `£${rawData.energy.average_energy_usage_stats.lower_layer_super_output_area.mean_gas_cost?.toFixed(2)}` },
            ]} />
          <DataContainer title='House Prices' data={[
                { icon: '🏠', title: 'Average Price', value: `£${rawData.social.house_price_index.average_price?.toLocaleString()}` },
                { icon: '📉', title: 'Annual Percentage Change', value: `${rawData.social.house_price_index?.percentage_change_12_months?.toLocaleString()}%` },
                { icon: '🏡', title: 'Average Price (Detached)', value: `£${rawData.social.house_price_index.average_price_detached?.toLocaleString()}` },
                { icon: '🏘️', title: 'Average Price (Terraced)', value: `£${rawData.social.house_price_index.average_price_terraced?.toLocaleString()}` },
                { icon: '🏢', title: 'Average Price (Flat)', value: `£${rawData.social.house_price_index.average_price_flat?.toLocaleString()}` },
            ]} />
    </div>
  )
}
