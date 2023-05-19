import './categories-menu.scss'
import CategoryItem from '../category-item/category-item'

const CategoriesMenu = ({categories}) => {

    return (
    <div className="menu-container">
        {categories.map((category) => (
            <CategoryItem key={category.id} category={category}/>
    ))}
    </div>
    );
}

export default CategoriesMenu