"use client";

import { useRef, useCallback, useState } from "react";
import { useResizeObserver } from "@wojtekmaj/react-hooks";
import { Document, Page, pdfjs, Outline } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import styles from "@/app/styles/components/ReadOnline.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Zoom, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/pagination";
import "swiper/css/navigation";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const resizeObserverOptions = {};

const maxWidth = 400;

export default function ReadOnline({ file }) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [containerRef, setContainerRef] = useState(null);
  const [containerWidth, setContainerWidth] = useState();
  const [swiperRef, setSwiperRef] = useState(null);

  const pageWidth = containerWidth
    ? Math.min(containerWidth, maxWidth)
    : maxWidth;

  const onResize = useCallback((entries) => {
    const [entry] = entries;

    if (entry) setContainerWidth(entry.contentRect.width);
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
    setPageNumber(1);
  }

  // navigation

  const slideTo = (index) => {
    setPageNumber(index);
    swiperRef.slideTo(index - 1, 0);
  };

  const updateSwiperIndex = (index) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.activeIndex = index;
      swiperRef.current.swiper.update();
    }
  };

  const changePage = (offset) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
    slideTo(pageNumber + offset);
  };

  const previousPage = () => changePage(-1);
  const nextPage = () => changePage(1);

  const onIndexNav = ({ pageNumber: indexPageNumber }) => {
    setPageNumber(indexPageNumber);
    slideTo(indexPageNumber);
  };

  const handleSlideChange = (swiper) => {
    setPageNumber(swiper.activeIndex + 1);
  };

  return (
    <div>
      <div className={styles.documentContainer} ref={setContainerRef}>
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          className={styles.document}
        >
          <div className={styles.TOC}>
            <h2 className={styles.index__title}>Index</h2>
            <Outline onItemClick={onIndexNav} className={styles.index} />
          </div>

          <div>
            <div
              className={styles.page__backdrop}
              style={{ width: pageWidth, height: pageWidth * 1.41 }}
            >
              <Swiper
                ref={swiperRef}
                navigation={true}
                onSlideChange={handleSlideChange}
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "var(--cyan)",
                }}
                zoom={true}
                keyboard={{
                  enabled: true,
                }}
                pagination={{
                  type: "progressbar",
                  clickable: true,
                }}
                modules={[Zoom, Navigation, Pagination, Keyboard]}
                className="mySwiper"
                onSwiper={setSwiperRef}
              >
                {[...Array(numPages).keys()].map((pageIndex) => (
                  <SwiperSlide key={pageIndex}>
                    {/* {pageIndex + 1 === pageNumber && ( */}
                    <Page
                      pageNumber={pageIndex + 1}
                      width={pageWidth}
                      className={styles.page}
                    />
                    {/* )} */}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div>
              <p className={styles.pageNumber}>
                Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
              </p>

              <button onClick={() => slideTo(15)}>jump to 15</button>

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
