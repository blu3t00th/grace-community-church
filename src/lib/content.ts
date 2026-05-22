import type { CollectionEntry } from 'astro:content';

const startOfDay = (date: Date) => {
  const normalized = new Date(date);
  normalized.setHours(0, 0, 0, 0);
  return normalized;
};

export const sortByDateDesc = <T extends { data: { date: Date } }>(items: T[]) =>
  [...items].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

export const sortByDateAsc = <T extends { data: { date: Date } }>(items: T[]) =>
  [...items].sort((a, b) => a.data.date.getTime() - b.data.date.getTime());

export const getUpcomingEvents = (
  events: CollectionEntry<'events'>[],
  referenceDate: Date = new Date()
) => {
  const today = startOfDay(referenceDate);

  return sortByDateAsc(events.filter((event) => startOfDay(event.data.date).getTime() >= today.getTime()));
};

export const getEventsSorted = (events: CollectionEntry<'events'>[], referenceDate: Date = new Date()) => {
  const today = startOfDay(referenceDate);
  const upcoming = sortByDateAsc(
    events.filter((event) => startOfDay(event.data.date).getTime() >= today.getTime())
  );
  const past = sortByDateDesc(
    events.filter((event) => startOfDay(event.data.date).getTime() < today.getTime())
  );

  return [...upcoming, ...past];
};

export const getEntrySlug = (entry: { id: string; data: { slug?: string } }) =>
  entry.data.slug ?? entry.id;
