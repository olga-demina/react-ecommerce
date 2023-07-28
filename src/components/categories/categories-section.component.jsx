import CategoryItem from "./category-item.component";
import "./categories-section.styles.scss";

const CategoriesSection = ({ categories }) => {
  return (
    <section>
      <h2>Categories</h2>

      <div className="category-grid">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
