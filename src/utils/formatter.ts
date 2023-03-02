import { DateTime } from 'luxon'

export function formatAgoDate(date: Date | string) {
  return DateTime.fromJSDate(new Date(date)).toRelative()
}
