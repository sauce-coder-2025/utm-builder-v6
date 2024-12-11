// Wait for the DOM to fully load before running scripts
document.addEventListener('DOMContentLoaded', function () {

    // Initialize UTM log data
    const utmLogData = [];

    /**
     * Function to show notification messages
     * @param {string} message - The message to display
     */
    function showNotification(message) {
        const notification = document.getElementById('notification');
        const notificationMessage = document.getElementById('notification-message');

        // Set the notification message and display it
        notificationMessage.textContent = message;
        notification.style.display = 'block';

        // Hide the notification after 3 seconds
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    }

    /**
     * Function to update the options for the Brand dropdown based on selected Market
     */
    function updateBrandOptions() {
        const market = document.getElementById('market').value;
        const brandSelect = document.getElementById('brand');

        // Reset the brand dropdown
        brandSelect.innerHTML = '<option value="">Select...</option>';

        // Populate options based on market selection
        const marketBrands = {
            'AU': ['F&P', 'Haier'],
            'NZ': ['F&P', 'Haier'],
            'US': ['F&P', 'DCS'],
            'UK': ['F&P'],
            'SG': ['F&P'],
            'CA': ['F&P', 'DCS'],
            'GBL': ['F&P', 'Haier']
        };

        if (marketBrands[market]) {
            marketBrands[market].forEach(brand => {
                const option = document.createElement('option');
                option.value = brand;
                option.textContent = brand;
                brandSelect.appendChild(option);
            });
        }
    }

    /**
     * Function to generate a UTM URL
     */
    function generateUTM() {
        const baseUrl = document.getElementById('baseUrl').value;
        const utmSource = document.getElementById('utmSource').value;
        const utmMedium = document.getElementById('utmMedium').value;
        const utmCampaign = document.getElementById('utmCampaign').value;
        const utmContent = document.getElementById('utmContent').value;
        const utmTerm = document.getElementById('utmTerm').value;

        // Ensure all required fields are filled
        if (!baseUrl || !utmSource || !utmMedium || !utmCampaign) {
            showNotification('Please fill out all required fields!');
            return;
        }

        try {
            // Build the UTM URL
            const url = new URL(baseUrl);
            url.searchParams.set('utm_source', utmSource);
            url.searchParams.set('utm_medium', utmMedium);
            url.searchParams.set('utm_campaign', utmCampaign);

            if (utmContent) {
                url.searchParams.set('utm_content', utmContent);
            }

            if (utmTerm) {
                url.searchParams.set('utm_term', utmTerm);
            }

            // Display the generated URL
            document.getElementById('generatedUtm').textContent = url.toString();
            document.getElementById('generatedUtmSection').style.display = 'block';
        } catch (e) {
            showNotification('Invalid Base URL!');
        }
    }

    /**
     * Function to save the generated UTM to the log
     */
    function saveUTM() {
        const utmString = document.getElementById('generatedUtm').textContent;

        // Prevent saving if no UTM string exists
        if (!utmString) {
            showNotification('Generate a UTM URL before saving!');
            return;
        }

        // Add the UTM string to the log
        const timestamp = new Date().toISOString();
        utmLogData.push({ timestamp, utmString });

        // Update the log table in the UI
        const utmLog = document.getElementById('utmLog');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${new Date().toLocaleString()}</td>
            <td>${utmString}</td>
        `;
        utmLog.appendChild(row);

        showNotification('UTM saved successfully!');
    }

    /**
     * Function to clear the form fields
     */
    function clearForm() {
        document.querySelectorAll('.form-control, .form-select').forEach(field => {
            field.value = '';
        });

        document.getElementById('generatedUtmSection').style.display = 'none';
    }

    // Attach event listeners to form elements and buttons
    document.getElementById('market').addEventListener('change', updateBrandOptions);
    document.getElementById('generateUtmBtn').addEventListener('click', generateUTM);
    document.getElementById('saveUtmBtn').addEventListener('click', saveUTM);
    document.getElementById('clearFormBtn').addEventListener('click', clearForm);
});
