import { useParams } from "react-router";

function CategoryDescription() {
    const {categoryName} = useParams();

    return (
      <div>
        <a href="/cat">Назад</a>
        <h1>Category: {categoryName}</h1>
      </div>
    );
}

export default CategoryDescription;