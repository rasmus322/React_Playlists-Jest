import { useParams, Link } from "react-router-dom";
import { USERS, PLAYLISTS } from "../../data";
import "./UserInfoPage.css";

export function UserInfoPage() {
	const { userId } = useParams();
	const user = USERS[Number(userId)];

	if (!user) {
		return (
			<div className="userInfoPage">
				<h2>UserInfoPage</h2>

				<div className="users">
					<p>пользователя таким userId нет</p>
				</div>
			</div>
		);
	}

	return (
		<div className="userInfoPage">
			<h2>UserInfoPage</h2>

			<div className="users">
				<p>{user.jobTitle}</p>
				<p>{user.email}</p>
				<img src={user.avatar} alt="" width={200} height={200} />
				<p>{user.fullName}</p>
				<p>{user.bio}</p>
				{ user.playlist && (
					<p>
						playlist: 
						<Link to={`/playlists/${user.playlist.id}`}> { PLAYLISTS[user.playlist.id].name } </Link>
					</p>
				) }
				
			</div>
		</div>
	);
}
