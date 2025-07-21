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
        s.sec,
        s.sem,
        s.isPresent ? "Present" : "Absent"
    ]);

    autoTable(doc, {
        startY: 20,
        head: headers,
        body: data,
        didParseCell: function (data) {
            if (data.section === 'body' && data.column.index === 6) {
                const status = data.cell.text[0];
                if (status === "Present") {
                    data.cell.styles.fillColor = [204, 255, 204];
                    data.cell.styles.textColor = [0, 100, 0];
                } else {
                    data.cell.styles.fillColor = [255, 204, 204];
                    data.cell.styles.textColor = [139, 0, 0];
                }
            }
        },
    });

    doc.save("attendance-report.pdf");
};

export default exportToPdf;