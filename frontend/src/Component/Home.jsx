
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import toast from 'react-hot-toast'
const Home = ({user}) => {

    const handleLogout = () => {
		localStorage.removeItem("token");
		toast.success('Logout Successfully')
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>MERN AUTH </h1>
                {!user ? 
				<>
				 <Link to="/login" className={styles.link}>
					Login
				</Link>
                <Link to="/register" className={styles.link}>
					Register
				</Link>
				</>: 
				<button className={styles.white_btn} onClick={handleLogout}>
				Logout
			</button>
				}
				
			</nav>

			<h1 className={styles.heading}>Welcome to Home</h1>
		</div>
	);
}

export default Home
