/** Supplied content for the page. Single source for the markup and the JSON-LD. */
export const site = {
  name: 'Dr Alex Rivera',
  title: 'Clinical Psychologist and Trainer',
  bio: 'Dr Alex Rivera is a clinical psychologist based in Sydney, Australia. For the past 12 years she has trained psychologists, counsellors and social workers in Acceptance and Commitment Therapy, a practical approach that helps people handle difficult thoughts and feelings and act on what matters to them.',
  email: 'hello@example.com',
  /** Describes what is pictured; the photo is a stock image, not Dr Rivera. */
  heroImageAlt:
    'Stock photo of a psychologist in a white blazer and glasses, seated on a sofa taking notes while listening to a client in a bright consulting room',
  address: {
    locality: 'Sydney',
    country: 'AU',
  },
} as const;
