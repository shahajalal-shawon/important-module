import { useSearchParams } from "react-router-dom";
import Container from "../../Shared/Container";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";


const Categories = () => {
    const [params, setParams] = useSearchParams();
    const category = params.get('category')
    return (
        <div>
            <Container>
                <div className="flex items-center justify-between pt-4 overflow-x-auto">
                    {
                        categories.map(item => <CategoryBox key={item.label} label={item.label} icon={item.icon} selected={category === item.label}></CategoryBox>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Categories;