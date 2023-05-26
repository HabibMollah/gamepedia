export default function cropImage(url: string) {
  if (!url) return null;
  const index = url.indexOf('media/') + 'media/'.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}
