export interface State {
	details?: string;
	state?: string;
	startTimestamp?: number | null;
	largeImageKey?: string;
	largeImageText?: string;
	smallImageKey?: string;
	smallImageText?: string;
	partyId?: string;
	partySize?: number;
	partyMax?: number;
	matchSecret?: string;
	joinSecret?: string;
	spectateSecret?: string;
	instance?: boolean;
}