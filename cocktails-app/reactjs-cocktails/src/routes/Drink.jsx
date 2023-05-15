import { Link, useLoaderData } from "react-router-dom";
import { getTitleCaseFromSlug, slugify } from "../utils/stringUtils";

const Drink = () => {
  const data = useLoaderData();

  return (
    <div aria-busy={!data}>
      <nav aria-label="breadcrumb">
        <ul>
          <li>
            <Link to="/">Categories</Link>
          </li>
          <li>
            <Link to={`/category/${slugify(data.category)}`}>
              {getTitleCaseFromSlug(data.category)}
            </Link>
          </li>
          <li>{data.name}</li>
        </ul>
      </nav>

      <article>
        <hgroup>
          <h1>{data.name}</h1>
          <h2>{data.glass} is recommended for serving</h2>
        </hgroup>

        <section>
          <div className="grid">
            <div>
              <p>{data.instructions}</p>
              <ul>
                {data.ingredients.map((x) => (
                  <li key={x.name.toLowerCase()}>
                    {x.measure} {x.name}
                  </li>
                ))}
              </ul>
            </div>
            <img src={data.imageUrl} />
          </div>
        </section>

        <button>Add to Favorites</button>
      </article>
    </div>
  );
};

export default Drink;
