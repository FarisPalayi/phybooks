"use client";

import { useRef, useCallback, useState, useEffect } from "react";
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

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

const resizeObserverOptions = {};

const maxWidth = 400;

export default function ReadOnline({ file }) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [containerRef, setContainerRef] = useState(null);
  const [containerWidth, setContainerWidth] = useState();
  const [swiperReady, setSwiperReady] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      // Swiper instance is available, set swiperReady to true
      setSwiperReady(true);
    }
  }, [swiperRef]);

  const pageWidth = containerWidth
    ? Math.min(containerWidth, maxWidth)
    : maxWidth;

  const onResize = useCallback((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
    setPageNumber(1);
  }

  // navigation

  const updateSwiperIndex = (index) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.activeIndex = index;
      swiperRef.current.swiper.update();
    }
  };

  const changePage = (offset) => {
    const newPage = pageNumber + offset;
    if (newPage >= 1 && newPage <= numPages) {
      let newPageIndex = null;

      setPageNumber((prevPageNumber) => {
        newPageIndex = prevPageNumber + offset;
        return newPageIndex;
      });

      updateSwiperIndex(newPageIndex - 1);

      if (swiperReady) swiperRef.current.slideTo(newPage - 1); //! doesn't work
    }
  };

  const previousPage = () => changePage(-1);
  const nextPage = () => changePage(1);

  const onItemClick = ({ pageNumber: itemPageNumber }) => {
    setPageNumber(itemPageNumber);
    updateSwiperIndex(itemPageNumber - 1);

    if (swiperReady) swiperRef.current.slideTo(itemPageNumber - 1); //! doesn't work
  };

  return (
    <article>
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

            <div
              className={styles.page__backdrop}
              style={{ width: pageWidth, height: pageWidth * 1.41 }}
            >
              <Swiper
                ref={swiperRef}
                onSlideChange={(swiper) =>
                  setPageNumber(swiper.activeIndex + 1)
                }
                zoom={true}
                navigation={true}
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "var(--cyan)",
                }}
                pagination={{
                  type: "progressbar",
                  clickable: true,
                }}
                keyboard={{
                  enabled: true,
                }}
                modules={[Keyboard, Zoom, Navigation, Pagination]}
                className="mySwiper"
              >
                {[...Array(numPages).keys()].map((pageIndex) => (
                  <SwiperSlide key={pageIndex}>
                    {/* {pageIndex + 1 === pageNumber && ( */}
                    <Page
                      pageNumber={pageNumber || 1}
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
    </article>
  );
}
