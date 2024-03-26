"use client";

import { useCallback, useState } from "react";
import { useResizeObserver } from "@wojtekmaj/react-hooks";
import { Document, Page, pdfjs, Outline } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Zoom,
  Virtual,
  Keyboard,
  Pagination,
  Navigation,
} from "swiper/modules";

import styles from "@/app/styles/components/ReadOnline.module.scss";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/zoom";
import "swiper/css/navigation";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const resizeObserverOptions = {};

export default function ReadOnline({ file, isFullView }) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [containerRef, setContainerRef] = useState(null);
  const [containerWidth, setContainerWidth] = useState();
  const [swiperRef, setSwiperRef] = useState(null);
  const [sliderView, setSliderView] = useState(1); // either 1 or 2

  const MAX_WIDTH = 800;
  const BUFFER_WIDTH = 51; // padding and stuff
  const PDF_BREAKPOINT = 600 - BUFFER_WIDTH; // 600px vw

  const pageWidth = containerWidth
    ? Math.min(containerWidth, MAX_WIDTH)
    : MAX_WIDTH;

  const onResize = useCallback((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
      if (entry.contentRect.width > PDF_BREAKPOINT) setSliderView(2);
      else setSliderView(1);
    }
  }, [PDF_BREAKPOINT]);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  function onDocumentLoadSuccess({ numPages: totalNumPages }) {
    setNumPages(totalNumPages);
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

  const previousPage = () => changePage(-1 * sliderView);
  const nextPage = () => changePage(1 * sliderView);

  const onIndexNav = ({ pageNumber: indexPageNumber }) => {
    setPageNumber(indexPageNumber);
    slideTo(indexPageNumber);
  };

  const handleSlideChange = (swiper) => setPageNumber(swiper.activeIndex + 1);

  return (
    <div className={styles.documentContainer} ref={setContainerRef}>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        className={styles.document}
      >
        <div
          className={`${styles.TOC} ${
            isFullView ? styles.TOC__fullView : null
          }`}
        >
          <h2 className={styles.index__title}>Index</h2>
          <Outline onItemClick={onIndexNav} className={styles.index} />
        </div>

        <div className={styles.page__section}>
          <div
            className={styles.page__backdrop}
            style={{
              width: pageWidth,
              height:
                sliderView === 1 ? pageWidth * 1.41 : (pageWidth * 1.41) / 2,
            }}
          >
            <Swiper
              style={{
                "--swiper-navigation-color": "var(--foreground)",
                "--swiper-pagination-color": "var(--cyan)",
              }}
              zoom={true}
              ref={swiperRef}
              navigation={true}
              onSlideChange={handleSlideChange}
              centeredSlides={false}
              grabCursor={true}
              keyboard={{ enabled: true }}
              pagination={{ type: "progressbar", clickable: true }}
              slidesPerView={sliderView}
              slidesPerGroup={sliderView}
              modules={[Zoom, Virtual, Navigation, Pagination, Keyboard]}
              className="mySwiper"
              onSwiper={setSwiperRef}
              virtual
            >
              {[...Array(numPages).keys()].map((pageIndex) => (
                <SwiperSlide key={pageIndex}>
                  <div className="swiper-zoom-container">
                    <Page
                      pageNumber={pageIndex + 1}
                      width={sliderView === 1 ? pageWidth : pageWidth / 2}
                      className={styles.page}
                    />
                  </div>
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
  );
}
