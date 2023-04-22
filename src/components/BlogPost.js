import { Link } from 'react-router-dom';

export default function BlogPost({page_name}) {

    return (
        <div className="flex flex-col">
            <h1 className="dark:text-yellow-50 text-3xl gill-sans-font mx-5 mt-5">
                {page_name}
                
            </h1>
        </div>
    )
}