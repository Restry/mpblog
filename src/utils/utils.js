import moment from 'moment';

export function diffForHumans (time) {
  const mtime = moment(time);
  const now = moment();

  if (now.diff(mtime, 'day') > 15) {
    return mtime.year() === now.year() ? mtime.format('MM-DD HH:ss') : mtime.format('YYYY-MM-DD HH:ss');
  }

  return mtime.fromNow();
}
