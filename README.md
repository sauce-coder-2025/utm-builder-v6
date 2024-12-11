# Ultimate UTM Builder

The Ultimate UTM Builder is a web application designed to help digital marketers generate, manage, and log UTM parameters for campaign tracking. This app ensures consistency and accuracy in UTM creation, saving time and effort.

## Features

- **Dynamic Form Fields**: Automatically updates fields based on user selections.
- **UTM URL Generator**: Generates complete UTM URLs based on input parameters.
- **Save and Log UTMs**: Saves generated UTM URLs into a log for future reference.
- **Responsive Notifications**: Displays user-friendly messages for actions and errors.

## File Structure

```
/utm-builder
├── index.html          # Main HTML file for the application
├── /css
│   └── styles.css      # CSS file for application styling
├── /js
│   └── app.js          # JavaScript file for application logic
└── README.md           # Documentation for the project
```

## How to Use

1. **Clone or Download the Repository**:
   ```bash
   git clone https://github.com/your-username/utm-builder.git
   ```
2. **Navigate to the Project Folder**:
   ```bash
   cd utm-builder
   ```
3. **Open in Browser**:
   Simply open the `index.html` file in your browser.

## Deployment

### Deploying on GitHub Pages
1. Push the repository to GitHub.
2. Go to **Settings** > **Pages**.
3. Under "Source," select the branch (e.g., `main`) and set the folder to `/root`.
4. Click **Save**, and your application will be live at `https://<username>.github.io/utm-builder/`.

## Requirements

- A modern web browser (Chrome, Firefox, Safari, Edge).
- No additional dependencies or installations required.

## Usage Instructions

### Form Inputs
1. **Market**: Choose the geographical market.
2. **Brand**: Select the associated brand (dynamic based on the market).
3. **Campaign Details**: Input campaign-specific parameters like source, medium, and campaign name.

### Buttons
- **Generate UTM**: Creates a UTM URL based on the provided details.
- **Save UTM**: Logs the generated UTM URL into the table for reference.
- **Clear Form**: Resets all input fields.

### Log Table
- View saved UTM URLs with their timestamps.

## Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request for review.

## License

This project is licensed under the MIT License. See `LICENSE` for details.

---

Happy tracking!
