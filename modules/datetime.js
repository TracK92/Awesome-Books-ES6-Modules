import { DateTime } from '../scripts/luxon.js';

const datetime = document.querySelector('.datetime');

export const displayTime = () => {
  const today = DateTime.local();
  const presentTime = today.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  datetime.innerHTML = presentTime;
};
