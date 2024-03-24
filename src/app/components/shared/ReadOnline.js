"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useResizeObserver } from "@wojtekmaj/react-hooks";
import { Document, Page, pdfjs, Outline } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import styles from "@/app/styles/components/ReadOnline.module.scss";

import SwiperCore, { Navigation } from "swiper/core";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation]);

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

const resizeObserverOptions = {};

const maxWidth = 800;

export default function ReadOnline({ file }) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [containerRef, setContainerRef] = useState(null);
  const [containerWidth, setContainerWidth] = useState();
  const [scale, setScale] = useState(1.0);
  const [swiperReady, setSwiperReady] = useState(false);
  const swiperRef = useRef(null);

  const pageWidth = containerWidth
    ? Math.min(containerWidth, maxWidth)
    : maxWidth;

  //* hooks

  const onResize = useCallback((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  useEffect(() => {
    if (swiperRef.current) {
      // Swiper instance is available, set swiperReady to true
      setSwiperReady(true);
    }
  }, [swiperRef]);

  //* functions:

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
    setPageNumber(1);
  }

  // navigation

  const changePage = (offset) => {
    const newPage = pageNumber + offset;
    if (newPage >= 1 && newPage <= numPages) {
      setPageNumber(newPage);
      if (swiperReady) {
        swiperRef.current.slideTo(newPage - 1);
      }
    }
  };

  const previousPage = () => changePage(-1);
  const nextPage = () => changePage(1);

  const onItemClick = ({ pageNumber: itemPageNumber }) => {
    setPageNumber(itemPageNumber);
    if (swiperReady) {
      swiperRef.current.slideTo(itemPageNumber - 1);
    }
  };

  // zoom

  const handleZoomIn = () => setScale(scale + 0.1);
  const handleZoomOut = () => setScale(scale - 0.1);

  return (
    <div>
      <div className={styles.documentContainer} ref={setContainerRef}>
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          options={options}
          className={styles.document}
        >
          <div className={styles.TOC}>
            <h2 className={styles.index__title}>Index</h2>
            <Outline onItemClick={onItemClick} className={styles.index} />
          </div>

          <div>
            <div>
              <button onClick={handleZoomIn}>Zoom In +</button>
              <button onClick={handleZoomOut}>Zoom Out -</button>
            </div>

            <div
              className={styles.page__backdrop}
              style={{ width: pageWidth, height: pageWidth * 1.41 }}
            >
              <Swiper
                ref={(ref) => {
                  swiperRef.current = ref;
                }}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                onSlideChange={(swiper) =>
                  setPageNumber(swiper.activeIndex + 1)
                }
              >
                {[...Array(numPages).keys()].map((pageIndex) => (
                  <SwiperSlide key={pageIndex}>
                    {pageIndex + 1 === pageNumber && ( // Ensure to render the Page component only when its page number matches the current pageNumber
                      <Page
                        pageNumber={pageIndex + 1}
                        width={pageWidth}
                        scale={scale}
                        className={styles.page}
                      />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div>
              <p className={styles.pageNumber}>
                Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
              </p>
              <div className={styles.navBtns}>
                <button
                  type="button"
                  disabled={pageNumber <= 1}
                  onClick={previousPage}
                  className={styles.nav__previous}
                >
                  Previous
                </button>
                <button
                  type="button"
                  disabled={pageNumber >= numPages}
                  onClick={nextPage}
                  className={styles.nav__next}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </Document>
      </div>
    </div>
  );
}
