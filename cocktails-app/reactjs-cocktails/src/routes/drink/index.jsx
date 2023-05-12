import { Link, useLoaderData, useParams } from "react-router-dom";
import { getTitleCaseFromSlug } from "../../utils/stringUtils";

const getDrinkLink = (x) => (
  <article key={x.id}>
    <Link to={`./drink/${x.id}`}>{x.name}</Link>
  </article>
);

const Drink = () => {
  const { categoryId, drinkId } = useParams();
  const data = useLoaderData();

  return (
    <div aria-busy={!data}>
      <nav aria-label="breadcrumb">
        <ul>
          <li>
            <Link to="/">Categories</Link>
          </li>
          <li>
            <Link to={`/category/${categoryId}`}>{getTitleCaseFromSlug(categoryId)}</Link>
          </li>
          <li>{data.name}</li>
        </ul>
      </nav>

      <article>
        <hgroup>
          <h1>{data.name}</h1>
          <h2>Serve in a {data.glass}</h2>
        </hgroup>
        <div className="grid">
          <div>
            <p>{data.instructions}</p>
            <ul>
                {data.ingredients.filter(x => x.name).map(x => <li>{x.measure} {x.name}</li>)}
            </ul>
          </div>
          <img src={data.imageUrl} />
        </div>
      </article>
    </div>
  );
};

export default Drink;
