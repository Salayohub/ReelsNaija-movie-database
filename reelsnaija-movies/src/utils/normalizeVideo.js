// utils/normalizeVideo.js
export function getVideoId(video) {
  return video.id?.videoId || video.id || null;
}
