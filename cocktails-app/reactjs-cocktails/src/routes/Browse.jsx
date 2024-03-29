import { Link, useLoaderData } from "react-router-dom";
import { getTitleCaseFromSlug } from "../utils/stringUtils";

const getCategoryLink = (x) => (
  <article key={x.id}>
    <Link to={`/category/${x.id}`}>{getTitleCaseFromSlug(x.name)}</Link>
  </article>
);

const Browse = () => {
  const data = useLoaderData();

  return (
    <div aria-busy={!data.length}>
      <nav aria-label="breadcrumb">
        <ul>
          <li>Categories</li>
        </ul>
      </nav>

      <div className="grid">
        <div>{data.filter((e, i) => !(i % 2)).map(getCategoryLink)}</div>
        <div>{data.filter((e, i) => i % 2).map(getCategoryLink)}</div>
      </div>
    </div>
  );
};

export default Browse;
