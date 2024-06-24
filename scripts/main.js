
$(function() {
    $('.st-download').on("click", function() {
        var ws_num = $(this).data("worksheet");

        downloadFile(ws_num, "student");

        // // Create a hidden anchor element
        // var a = document.createElement('a');
        // a.href = `/worksheets/student/EDB_Science_${ws_num}_student.docx`;
        // a.download = `EDB_Science_${ws_num}_student.docx`; // Specify the filename to be downloaded
        
        // // Append the anchor to the body (required for Firefox)
        // document.body.appendChild(a);
        
        // // Trigger a click event on the anchor
        // a.click();
        
        // // Remove the anchor from the body
        // document.body.removeChild(a);
    });


    $('.tc-download').on("click", function() {
        var ws_num = $(this).data("worksheet");
        downloadFile(ws_num, "teacher");

        // // Create a hidden anchor element
        // var a = document.createElement('a');
        // a.href = `/worksheets/student/EDB_Science_${ws_num}_student.docx`;
        // a.download = `EDB_Science_${ws_num}_student.docx`; // Specify the filename to be downloaded
        
        // // Append the anchor to the body (required for Firefox)
        // document.body.appendChild(a);
        
        // // Trigger a click event on the anchor
        // a.click();
        
        // // Remove the anchor from the body
        // document.body.removeChild(a);
    });

    function downloadFile(ws_num, ws_type) {

        // Create a hidden anchor element
        var a = document.createElement('a');
        a.href = `/worksheets/${ws_type}/EDB_Science_${ws_num}_${ws_type}.docx`;
        a.download = `EDB_Science_${ws_num}_${ws_type}.docx`; // Specify the filename to be downloaded
        
        // Append the anchor to the body (required for Firefox)
        document.body.appendChild(a);
        
        // Trigger a click event on the anchor
        a.click();
        
        // Remove the anchor from the body
        document.body.removeChild(a);
    }
});