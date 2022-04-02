export interface EpisodeQuote {
  episodeID: number;
  episodeName: string;
  seasonEp: string;
  quoteEpisodeID: number;
  quoteID: number;
  quoteText: string;
}

export function emptyEpisodeQuote(): EpisodeQuote {
  return {
    episodeID: 0,
    episodeName: '',
    seasonEp: '',
    quoteEpisodeID: 0,
    quoteID: 0,
    quoteText: ''
  }
}