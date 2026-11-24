export interface Course {
  /** Stable identifier, used for DOM ids and JSON-LD fragment ids. */
  id: string;
  title: string;
  description: string;
  /** Length exactly as supplied. */
  length: string;
  /** ISO 8601 duration, only where the supplied length maps to one cleanly. */
  isoDuration?: string;
  /** Supplied link. "#" means no real destination exists yet. */
  href: string;
}

export const courses: readonly Course[] = [
  {
    id: 'introduction-to-act',
    title: 'Introduction to Acceptance and Commitment Therapy',
    description: 'The core ideas and skills, for practitioners new to the approach.',
    length: '6 hours, online',
    isoDuration: 'PT6H',
    href: '#',
  },
  {
    id: 'act-for-anxiety',
    title: 'Acceptance and Commitment Therapy for Anxiety',
    description: 'How to apply the approach with clients experiencing anxiety.',
    length: '4 hours, online',
    isoDuration: 'PT4H',
    href: '#',
  },
  {
    id: 'act-supervision',
    title: 'Acceptance and Commitment Therapy Supervision',
    description: 'Monthly group sessions to discuss cases and build confidence.',
    length: '1.5 hours a month, online',
    href: '#',
  },
];

/** A "#" href is a placeholder, not a real destination. */
export const hasRealLink = (course: Course): boolean => course.href !== '#';
