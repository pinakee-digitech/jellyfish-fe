import 'bootstrap/dist/css/bootstrap.min.css';

interface SearchBarProps {
    searchIcon: any;
    searchPlaceholder:any;
  }

export default function SearchBar({ searchIcon,searchPlaceholder }: SearchBarProps) {
    return (
        <div className="position-relative">
            <input autoComplete="off" className="w-100 border rounded-4 px-3 py-1" placeholder={searchPlaceholder} type="text" name="search" id="search" />
            <img className="position-absolute" style={{ right: "4%", top: "18%", cursor:"pointer" }} src={searchIcon} alt="icon" />
        </div>
    )
}
