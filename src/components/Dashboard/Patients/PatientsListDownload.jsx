import { Button } from "@/components/ui/button";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useMemo } from "react";
import { FaDownload } from "react-icons/fa";
import { toast } from "sonner";

const PatientListDownload = ({ patients }) => {
  const doc = new jsPDF();

  const columns = useMemo(() => ["SL.", "Patient Name", "Gender", "Age", "Blood Group", "Address"], []);

  const sortedPatients = [...patients].sort((a, b) => a.name.localeCompare(b.name));

  const defaultPhotoUrl = "/doctor-avatar.jpg"; // Path to the default photo in the public folder


  const rows = sortedPatients.map((patient, index) => {
    // const photoUrl = patient.photo || defaultPhotoUrl;
    return [
      String(index + 1).padStart(2, '0'),
    //   { content: "", image: photoUrl },
      patient.name,
      patient.gender || "N/A",
      patient.age || "N/A",
      patient.bloodGroup || "N/A",
      patient.address || "N/A",
    ];
  });

  const handlePatientListDownload = () => {
    if (patients.length === 0) {
      return toast.error("No patients to download");
    }

    // const cellHeight = 20; // Adjust the height to fit the photo

    doc.autoTable({
      head: [columns],
      body: rows,
      theme: "striped",
      margin: { top: 20, left: 5, right: 5 },
      styles: {
        fontSize: 11,
        cellPadding: {
          top: 4,
          bottom: 4,
          left: 2.5,
          right: 2.5,
        },
        overflow: "linebreak",
      },
      headStyles: {
        fillColor: [52, 165, 228],
        textColor: [255, 255, 255],
        fontStyle: "bold",
      },
      didDrawPage: (data) => {
        doc.setFontSize(16);
        const pageWidth = doc.internal.pageSize.getWidth();

        if (data.pageNumber === 1) {
          doc.text("Patients List", pageWidth / 2, 15, { align: "center" });
          data.settings.margin.top = 10;
        }

        const footerText = "Developed by TRUSTCare";
        const pageSize = doc.internal.pageSize;
        const pageHeight = pageSize.height
          ? pageSize.height
          : pageSize.getHeight();
        doc.setFontSize(10);
        doc.text(footerText, data.settings.margin.left, pageHeight - 5);
      },
    });

     // Add images to the cells
    //  rows.forEach((row, index) => {
    //     const photoUrl = row[1].image;
    //     const img = new Image();
    //     img.src = photoUrl;
    //     img.onload = () => {
    //       const cell = doc.autoTable.previous.finalY + 10 + index * cellHeight;
    //       doc.addImage(img, 'JPEG', 15, cell, 15, 15); // Adjust the position and size as needed
    //     };
    //   });
  

    doc.save("patients_list.pdf");
  };

  return (
    <Button onClick={handlePatientListDownload} className="bg-blue hover:bg-blue/90">
      <FaDownload className="mr-2" /> Download PDF
    </Button>
  );
};

export default PatientListDownload;
