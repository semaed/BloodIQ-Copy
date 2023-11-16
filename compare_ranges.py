def compare_ranges(results, ranges):
    # Function to compare test results with reference ranges
    comparison_results = {}  # Initializing a dictionary to hold the comparison results

    for key, value in results.items():  # Iterating through each item in the results
        if key in ranges:  # Checking if the key (test parameter) exists in the reference ranges
            high_range = ranges[key]['high_range']  # Fetching the high range for the test parameter
            low_range = ranges[key]['low_range']  # Fetching the low range for the test parameter

            # Comparing the test result with the reference ranges and determining the status
            if value > high_range:
                comparison = "high"  # Mark as 'high' if the value is above the high range
            elif value < low_range:
                comparison = "low"  # Mark as 'low' if the value is below the low range
            else:
                comparison = "normal"  # Mark as 'normal' if the value is within the range

            # Storing the comparison result for each test parameter
            comparison_results[key] = f"{comparison} ({value})"

    return comparison_results  # Returning the dictionary of comparison results


# Below is a commented-out section that provides an example of how to use the function:
"""
# Example reference ranges
ranges = {'BASOPHILS': {'high_range': 1, 'low_range': 0}, ...}

# Example test results
results = {'WHITE BLOOD CELL': 6.72, ...}

# Comparing the test results with the reference ranges
comparison = compare_ranges(results, ranges)

# Printing the comparison results
for key, value in comparison.items():
    print(f"{key}: {value}")
"""
