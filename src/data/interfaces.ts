export interface IUser {
	id: number;
	email: string;
	fullName: string;
	jobTitle: string;
	avatar: string;
	bio: string;
	playlistId?: number;
}

export interface IPlaylist {
	id: number;
	genre: string;
	name: string;
	songs: string[];
}
