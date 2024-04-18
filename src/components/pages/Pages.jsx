import styles from "./index.module.scss";

const Pages = ({ pagesNumber = 10, page = 10, setPage }) => {
  let arrayOfPages = [];

  const start = page <= 2 ? 1 : page - 1;

  for (let i = start; i <= pagesNumber && arrayOfPages.length < 3; i++) {
    arrayOfPages.push(i);
  }

  const showEllipsis = pagesNumber > arrayOfPages[arrayOfPages.length - 1];

  return (
    <div className={styles.Pages}>
      {arrayOfPages.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => setPage(pageNumber)}
          className={pageNumber === page ? styles.Active : ""}
        >
          {pageNumber}
        </button>
      ))}

      {showEllipsis && (
        <>
          <span>...</span>
          <button onClick={() => setPage(pagesNumber)}>{pagesNumber}</button>
        </>
      )}
    </div>
  );
};

export default Pages;
