import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to='/' className="flex items-center  focus:outline-none focus:ring-2  text-gray-400  focus:ring-gray-600">
            <LocalMallRoundedIcon color='info' className="h-6 mr-3 sm:h-9" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">It's my shop</span>
        </Link>
    )
}
export default Logo