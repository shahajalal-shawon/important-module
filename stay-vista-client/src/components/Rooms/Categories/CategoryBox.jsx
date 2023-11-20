/* eslint-disable react/prop-types */
import { useNavigate, useSearchParams } from "react-router-dom";
import qs from 'query-string'

const CategoryBox = ({ label, icon: Icon, selected}) => {

    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();

    const handleClick = () => {
        let currentQuery = {}
        if(params){
            currentQuery = qs.parse(params.toString())

            const updateQuery = {...currentQuery, category: label }

            const url = qs.stringifyUrl({
                url: '/',
                query: updateQuery,
            })
            navigate(url);

        }
    }
    params.get('category')

    return (
        <div onClick={handleClick} className={`flex flex-col items-center justify-center gap-3 p-2 border-b-2 transition cursor-pointer ${selected? "border-b-neutral-800 text-neutral-800" : ""}`}>
            <Icon size={26}></Icon>
            <div className="text-sm font-medium">{label}</div>
        </div>
    );
};

export default CategoryBox;