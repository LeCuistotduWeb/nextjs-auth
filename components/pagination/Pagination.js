import Link from "next/link";
import {useEffect, useState} from "react";

const PaginationBasic = ({currentPage, pageCount}) => {
  const [pageActive, setPageActive] = useState(1);

  useEffect(() => {
   setPageActive(currentPage);
  }, [currentPage, pageCount]);

  return (
    <div>
      <nav>
        <ul className="pagination">
          {[...Array(pageCount).keys()].map((p,index) => {
            const page = p + 1;
            return (
              <li key={index} className="page-item">
                <Link href={`?pages=${page}`}>
                  <a className={`page-link ${(page) === +pageActive ? 'active' : ''}`}>{page}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
};

export default PaginationBasic;