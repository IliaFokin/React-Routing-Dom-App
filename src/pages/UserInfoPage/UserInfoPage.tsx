import { Link, useParams } from "react-router-dom";
import { PLAYLISTS, USERS } from "../../data";
import "./UserInfoPage.css";

export function UserInfoPage() {
	const { userId } = useParams();

	const user = USERS[Number(userId)];

	if (!user) {
		return (
			<div className="userInfoPage">
				<h2>UserInfoPage</h2>

				<div className="users">
					<p>Пользоатвеля с таким ИД нет</p>
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
				{user.playlistId && (
					<Link to={`/playlists/${user.playlistId}`}>
						{PLAYLISTS[(user.playlistId)].name}
					</Link>
				)}
			</div>
		</div>
	);
}
