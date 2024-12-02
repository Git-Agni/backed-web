# BackEd Website

This repository contains the source code for **BackEd**, a web platform that introduces users to the app aimed at alleviating back pain through personalized exercises, progress tracking, and habit-building features. The website serves as a front-facing portal for engaging users and encouraging app downloads.

---

## Project Overview

The **BackEd** website is designed to:

1. **Promote the App**: Highlight the features and benefits of BackEd.
2. **Collect User Emails**: Capture email addresses for early access notifications.
3. **Provide a Preview**: Showcase the app interface and testimonials to build user trust.
4. **Engage Users**: Include smooth animations, interactive elements, and responsive design to create a dynamic user experience.

---

## Project Files

The project is organized into three primary files for structure, styling, and interactivity:

### 1. **HTML - `index.html`**
   - Serves as the main structure of the website.
   - Sections include:
     - **Hero Section**: Contains a large call-to-action with a background image, tagline, and email subscription form.
     - **Intro Section**: Describes the personalized features and benefits of the app.
     - **Main Section**: Includes app mockup previews displayed in an interactive carousel.
     - **Testimonials Section**: Highlights real user stories with images and optional videos.
     - **FAQ Section**: Provides answers to commonly asked questions about BackEd's features and usage.

### 2. **CSS - `styles.css`**
   - Handles the visual design and responsiveness.
   - Key features:
     - **Responsive Design**: Adjusts layout across devices with media queries.
     - **Hero Background**: Fullscreen image with overlay for better text readability.
     - **Typography**: Clean and modern font styles using the [Inter](https://fonts.google.com/specimen/Inter) font family.
     - **Hover Effects**: Smooth transitions on buttons, links, and interactive cards.
     - **Custom Carousel Styling**: Styling for app mockup navigation and testimonial cards.

### 3. **JavaScript - `script.js`**
   - Adds interactivity and user engagement features.
   - Main functionality includes:
     - **Email Subscription**: Submits emails to a Google Apps Script endpoint.
     - **Smooth Scrolling**: Ensures navigation links scroll to the correct sections smoothly.
     - **Active Section Highlighting**: Dynamically updates the active link in the navbar based on scroll position.
     - **Phone Screen Carousel**: Allows users to navigate through app screens with "Next" and "Previous" buttons.
     - **Testimonial Carousel**: Auto-scrolls through user testimonials with support for manual navigation.
     - **Video Popup**: Plays videos in a modal when user interactions occur.
     - **Lazy Loading Animations**: Reveals elements as users scroll down the page.

---

## Features

### 1. **Hero Section**
   - **Tagline**: "Your Back Deserves Better."
   - **Description**: Brief overview of the app's mission.
   - **Email Subscription**: 
     - A form where users can input their email addresses.
     - Integration with Google Apps Script to store data securely in google forms which is further linked to spreadsheet.

### 2. **Intro Section**
   - Highlights BackEd's personalized plans and guided exercises.
   - Includes an video area with a "Watch Showreel" button. (image as a placeholder is used for now)

### 3. **App Preview Section**
   - Displays mockups of the app's interface:
     - Personalized dashboard.
     - Guided exercises.
     - Progress tracking.
   - Users can navigate through screens using the interactive carousel and customized captions for each screen.

### 4. **Testimonials Section**
   - Showcases real user stories with clickable cards.
   - Cards can play a video or display a description of the user's journey.

5. **FAQ Section**
  - Why use BackEd?: Explanation of personalized routines designed to alleviate back pain.
  - Timeline for Results: Typical user experiences with consistent use.
  - Independent Usage: Guidance on safe use without a physiologist.
  - Posture Correction: Details on improving posture through BackEd's routines.
  - Assessment Process: How BackEd evaluates and optimizes plans for users.

### 6. **Interactive Features**
   - Smooth scrolling for navigation links.
   - Active link updates as users scroll through sections.
   - Auto-advancing carousel for testimonials.
   - Video modals for engaging media.

---

**how to open file**
1. **Open the Website Locally**
   - Open `index.html` in your browser.

2. **Set Up the Email Subscription Backend**
   - google app script + google form + linked spreadsheet is already made (ownership to Ankit)

---

## File Organization
backed-website/
├── assets/             # Contains images, icons, and other static assets.
├── index.html          # Main HTML file.
├── styles.css          # Main CSS file for styling.
├── script.js           # JavaScript file for interactivity.
└── README.md           # Documentation for the project.


---

## Customization Guide

### Updating Content
- **Hero Section**: Update the tagline and description in `index.html`.
- **Images**: Replace the URLs in the `<img>` tags with your own assets in the `assets` folder.

### Modifying Styles
- **Primary Colors**: Update the color variables in `styles.css`.
- **Fonts**: Change the font-family or font-sizes in the relevant CSS classes.

### Adding New Features
- **HTML**: Add new sections to `index.html`.
- **CSS**: Style new sections or enhance existing styles.
- **JavaScript**: Add new functionality by extending `script.js`.

---

## Known Issues and Future Improvements

1. **Email Form Feedback**:
   - Consider providing a loader or more detailed error handling for the subscription form.
2. **Performance Optimization**:
   - Compress images and minify CSS/JavaScript for faster loading times.
3. **SEO Improvements**:
   - Add meta tags and optimize for search engines.

---

## Contribution Guidelines

- **Code Style**: Use consistent indentation and comments to describe major sections of the code.
- **Testing**: Ensure new features are tested across major browsers and devices.


---

**App Script Code**:
function doPost(e) {
    var headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    };
    
    try {
      // Log the incoming data for debugging
      Logger.log('Received data: ' + e.postData.contents);
      
      var data = JSON.parse(e.postData.contents);
      var spreadsheetId = '1WD1tyo91vrSB0EjU5kb8GH3I0Aov7m75FCeyBR6XfY8';
      var sheetName = 'email-collection-BACKED';
      
      var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
      var sheet = spreadsheet.getSheetByName(sheetName);
      
      // Add the email to the sheet
      sheet.appendRow([new Date(), data.email]);
      
      // Log success
      Logger.log('Email added successfully: ' + data.email);
      
      return ContentService.createTextOutput(JSON.stringify({
        'status': 'success',
        'message': 'Email saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);
      
    } catch (error) {
      // Log the error
      Logger.log('Error: ' + error.toString());
      
      return ContentService.createTextOutput(JSON.stringify({
        'status': 'error',
        'message': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);
    }
  }
  
  function doGet(e) {
    return doPost(e);
  }
  
  function doOptions(e) {
    var headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400'
    };
    
    return ContentService.createTextOutput('')
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);
  }

**Issues Encountered and Resolutions with the App Script Code**
1. **TypeError in Google Apps Script**
**Problem**: A TypeError occurred during script execution, likely due to unexpected null or undefined object references.
**Cause**: The script attempted to interact with an object or value that didn't exist or was not the expected type.
**Solution**:
Created a dedicated test function in the script to isolate the specific operation causing the error.
Debugged the code iteratively, ensuring proper type handling and error checking.

2. **Incorrect Google Form URL**
**Problem**: The Google Form URL used in the script was the shareable link, which does not end with **/edit**. This caused integration issues as the script requires the /edit endpoint to programmatically modify or interact with the form.
**Cause**: Using the shareable URL generated from the "Send" or "Share" option of Google Forms.
**Solution**:
Identified the discrepancy between the URLs.
Replaced the shareable URL with the proper /edit URL from the browser’s address bar while editing the form.
Ensured that all instances of the form URL in the script use the correct format.



  **--------THANKYOU, IT WAS LOVELY WORKING ON BackED (IYKYK)----------**
