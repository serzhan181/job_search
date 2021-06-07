import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'

dayjs.extend(relativeTime)

export const dateago = (strDate) => {
  return dayjs(strDate).fromNow()
}
