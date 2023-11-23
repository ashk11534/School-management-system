$(document).ready(function () {
  var pdfUrl = "https://www.clickdimensions.com/links/TestPDFfile.pdf";

  // Use PDFObject to embed the PDF
  PDFObject.embed(pdfUrl, "#pdf-viewer");
});
