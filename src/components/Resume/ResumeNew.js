import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

import pdf from "../../Assets/Projects/a/Document.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row style={{ justifyContent: "center", marginBottom: "20px" }}>
          <Button
            variant="primary"
            href="/resume-pdf"
            style={{ maxWidth: "260px" }}
          >
            <AiOutlineDownload />
            &nbsp;PDF ni ustiga bosing 
          </Button>
        </Row>

        <Row className="resume" style={{ justifyContent: "center" }}>
          <a
            href={pdf}
            target="_blank"
            rel="noreferrer"
            style={{ cursor: "pointer" }}
          >
            <Document
              file={pdf}
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
              loading="PDF yuklanmoqda..."
              error="PDF ochilmadi"
              className="d-flex flex-column align-items-center"
            >
              {Array.from({ length: numPages }, (_, i) => (
                <Page
                  key={`page_${i + 1}`}
                  pageNumber={i + 1}
                  scale={width > 786 ? 1.8 : 0.9}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              ))}
            </Document>
          </a>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
