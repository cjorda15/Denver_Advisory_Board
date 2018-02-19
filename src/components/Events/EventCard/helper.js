export const determineFormat = file => {
  const images = [
    'bmp',
    'jpg',
    'jpeg',
    'jp2',
    'j2k',
    'jpx',
    'gif',
    '.jiff',
    'jif',
    'j2c',
    'png',
    'pdf',
    'pcd',
    'psd',
    'tiff',
    'tif',
    'svg',
    'webp'
  ];

  const videos = [
    '3g2',
    '3gp',
    'asf',
    'avi',
    'flv',
    'mp4',
    'mpg',
    'rm',
    'srt',
    'swf',
    'vob',
    'wmv'
  ];
  let reverseFile = file.split('').reverse();
  let format = reverseFile
    .splice(0, reverseFile.findIndex(char => char == '.'))
    .reverse()
    .join('');

  if (
    images.find(e => {
      return e == format;
    })
  ) {
    return { type: 'image' };
  }

  if (
    videos.find(e => {
      return e == format;
    })
  ) {
    return { type: 'video', format: format };
  }

  return 'unknown';
};
