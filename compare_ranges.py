def compare_ranges(results, ranges):
    comparison_results = {}

    for key, value in results.items():
        if key in ranges:
            high_range = ranges[key]['high_range']
            low_range = ranges[key]['low_range']

            if value > high_range:
                comparison = "high"
            elif value < low_range:
                comparison = "low"
            else:
                comparison = "normal"

            comparison_results[key] = f"{comparison} ({value})"

    return comparison_results


"""ranges = {'BASOPHILS': {'high_range': 1, 'low_range': 0}, 'BASOPHILS ABSOLUTE VALUE': {'high_range': 0.2, 'low_range': 0}, 'EOSINOPHILS': {'high_range': 5.4, 'low_range': 0}, 'EOSINOPHILS ABSOLUTE VALUE': {'high_range': 0.7, 'low_range': 0}, 'HEMATOCRIT': {'high_range': 51, 'low_range': 34.1}, 'HEMOGLOBIN': {'high_range': 17.5, 'low_range': 11.2}, 'LYMPHOCYTES': {'high_range': 53.1, 'low_range': 19.3}, 'LYMPHOCYTES ABSOLUTE VALUE': {'high_range': 3.7, 'low_range': 1.2}, 'MCH': {'high_range': 32.2, 'low_range': 25.6}, 'MCHC': {'high_range': 36.5, 'low_range': 32.2}, 'MCV': {'high_range': 94.8, 'low_range': 79}, 'MONOCYTES': {'high_range': 9.3, 'low_range': 1.7}, 'MONOCYTES ABSOLUTE VALUE': {'high_range': 0.6, 'low_range': 0.1}, 'MPV': {'high_range': 10.4, 'low_range': 7.4}, 'NEUTROPHILS': {'high_range': 71.1, 'low_range': 34}, 'NEUTROPHILS ABSOLUTE VALUE': {'high_range': 6.1, 'low_range': 1.6}, 'PLATELET COUNT (PLT)': {'high_range': 369, 'low_range': 163}, 'RDW': {'high_range': 11, 'low_range': 11}, 'RED BLOOD CELL': {'high_range': 6.08, 'low_range': 3.93}, 'WHITE BLOOD CELL': {'high_range': 10, 'low_range': 4}}

results = {'WHITE BLOOD CELL': 6.72, 'RED BLOOD CELL': 4.6, 'HEMOGLOBIN': 13.6, 'HEMATOCRIT': 41.4, 'MCV': 90.0, 'MCH': 29.6, 'MCHC': 32.9, 'RDW': 13.0, 'RDW-SD': 44.1, 'PLATELET COUNT (PLT)': 180.0, 'MPV': 10.7, 'NEUTROPHILS': 78.2, 'LYMPHOCYTES': 9.4, 'MONOCYTES': 11.3, 'EOSINOPHILS': 0.4, 'BASOPHILS': 0.4, 'NRBC%': 0.0, 'IG%': 0.3, 'NEUTROPHILS ABSOLUTE VALUE': 5.25, 'LYMPHOCYTES ABSOLUTE VALUE': 0.63, 'MONOCYTES ABSOLUTE VALUE': 0.76, 'EOSINOPHILS ABSOLUTE VALUE': 0.03, 'BASOPHILS ABSOLUTE VALUE': 0.03, 'NRBC#': 0.0}

comparison = compare_ranges(results, ranges)
for key, value in comparison.items():
    print(f"{key}: {value}")"""
