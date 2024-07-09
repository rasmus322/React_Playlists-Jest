import { ChangeEvent } from "react";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import "./UsersPage.css";
import { Link, useSearchParams } from "react-router-dom";

export function UsersPage() {
	const users = useSelector((state: RootState) => state.users)
	const [searchParam, setSearchParam] = useSearchParams();

	const handleSearchName = (event: ChangeEvent<HTMLInputElement>): void => {
		const { value } = event.target;
		setSearchParam({ searchName: value.toLowerCase() });
	};

	const searchName = searchParam.get("searchName") || "";

	const filteredUsers = users.filter(({ fullName }) =>
		fullName.toLowerCase().includes(searchName)
	);

	return (
		<div className="usersPage">
			<h2>UsersPage</h2>

			<div className="users">
				<label>
					введите имя{" "}
					<input type="text" value={searchName} onChange={handleSearchName} />
				</label>

				{filteredUsers.map(({ id, fullName }) => (
					<Link to={`/users/${id}`} key={id}>
						{fullName}
					</Link>
				))}
			</div>
		</div>
	);
}
