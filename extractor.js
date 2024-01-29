// extractor.js

function extractData() {
    const inputElement = document.getElementById('pdfFile');
    const file = inputElement.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const arrayBuffer = e.target.result;
            extractTextFromPDF(arrayBuffer);
        };
        reader.readAsArrayBuffer(file);
    } else {
        alert('Please select a PDF file.');
    }
}


function extractTextFromPDF(pdfData) {
    pdfjsLib.getDocument({ data: pdfData }).promise.then(function (pdf) {
        // Fetch the first page
        return pdf.getPage(1);
    }).then(function (page) {
        // Render the page as text
        return page.getTextContent();
    }).then(function (textContent) {
        // Extracted text content
        const lines = textContent.items.map(item => item.str);

        // Display array of lines (you can modify this part based on your requirements)
        console.log('Lines:', lines);

        // You can now use the 'lines' array for further processing or parsing
    }).catch(function (error) {
        console.error("Error extracting text:", error);
    });
}








function parseAndProcessText(pdfText) {
    // Here you can implement the logic to parse the text and extract relevant data.
    // This will depend on the structure of your PDF.
    // For the provided format, you might need to use regular expressions to extract data.
    // If the format is consistent, you can define patterns to match and extract information.
    // For example, you can use regex to extract the player names, points, etc.
    // Feel free to share more details about the expected format if you need assistance with specific parsing.
    console.log('Parsed PDF Text:', pdfText);
}
