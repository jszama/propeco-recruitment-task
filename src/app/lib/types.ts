interface DataContainerProps {
    title: string;
    data: DataItem[];
}

interface DataItem {
    icon: string;
    title: string;
    value: string | number | null | undefined;
}

interface ListItemProps {
    icon: string;
    title: string;
    value: string;
}

interface RawData {
    uprn: string;
    location: {
        admin_boundaries?: {
            postcode?: string;
            county_name?: string;
            region_name?: string;
            country_name?: string;
        };
    };
    energy: {
        epcs: {
            epc?: {
                energy_rating_current?: string;
                energy_rating_potential?: string;
                heating_cost_current?: number;
                lighting_cost_current?: number;
                hot_water_cost_current?: number;
                total_floor_area?: number;
            };
        };
        average_energy_usage_stats: {
            lower_layer_super_output_area: {
                mean_electricity_usage?: number;
                mean_electricity_cost?: number;
                mean_gas_usage?: number;
                mean_gas_cost?: number;
            };
        };
    };
    social: {
        house_price_index: {
            average_price?: number;
            percentage_change_12_months?: number;
            average_price_detached?: number;
            average_price_terraced?: number;
            average_price_flat?: number;
        };
    };
}
interface PropertyDataListProps {
    rawData: RawData;
}

interface PropertyDataProps {
    rawData: RawData;
    onSubmit: (data: RawData | null) => void;
}

export type { DataContainerProps, DataItem, ListItemProps, PropertyDataListProps, PropertyDataProps, RawData };