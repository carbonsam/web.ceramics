import { Link, useLoaderData, useParams } from "react-router-dom";
import { getTitleCaseFromSlug } from "../utils/stringUtils";

const getDrinkLink = (x) => (
  <article key={x.id}>
    <Link to={`/drink/${x.id}`}>{x.name}</Link>
  </article>
);

const Category = () => {
  const { categoryId } = useParams();
  const data = useLoaderData();

  return (
    <div aria-busy={!data.length}>
      <nav aria-label="breadcrumb">
        <ul>
          <li>
            <Link to="/">Categories</Link>
          </li>
          <li>{getTitleCaseFromSlug(categoryId)}</li>
        </ul>
      </nav>

      <div className="grid">
        <div>{data.filter((e, i) => !(i % 2)).map(getDrinkLink)}</div>
        <div>{data.filter((e, i) => i % 2).map(getDrinkLink)}</div>
      </div>
    </div>
  );
};

export default Category;
