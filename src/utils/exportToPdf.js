import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function exportToPdf(students) {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Attendance Report", 14, 15);

    const headers = [["Name", "Roll", "Course", "Year", "Sec", "Sem", "Status"]];
    const data = students.map((s) => [
        s.name,
        s.roll,
        s.course,
        s.year,
        s.section,
        s.semester,
        s.isPresent ? "P" : "A"
    ]);

    autoTable(doc, {
        startY: 20,
        head: headers,
        body: data,
        styles: {
            halign: 'center',
            valign: 'middle',
        },
        headStyles: {
            fillColor: [54, 69, 79],
            textColor: 255,
            fontStyle: 'bold'
        },
        didParseCell: function (hookData) {
            if (hookData.section === 'body' && hookData.column.index === 6) {
                const status = hookData.cell.text[0];
                if (status === "P") {
                    hookData.cell.styles.textColor = [0, 128, 0];
                    hookData.cell.styles.fontSize = 14;
                } else {
                    hookData.cell.styles.textColor = [220, 20, 60];
                    hookData.cell.styles.fontSize = 14;
                }
            }
        }
    });

    doc.save("attendance-report.pdf");
}

export default exportToPdf;