import 'bootstrap/dist/css/bootstrap.min.css';
import searchIcon from '../assets/bx-search.svg';

export default function SearchBar() {
    return (
        <div className="position-relative">
            <input className="w-100 border rounded-4 px-3 py-1" placeholder="Search" type="text" name="search" id="search" />
            <img className="position-absolute" style={{ right: "4%", top: "18%" }} src={searchIcon} alt="icon" />
        </div>
    )
}
