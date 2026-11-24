/** Supplied content for the page. Single source for the markup and the JSON-LD. */
export const site = {
  name: 'Dr Alex Rivera',
  title: 'Clinical Psychologist and Trainer',
  bio: 'Dr Alex Rivera is a clinical psychologist based in Sydney, Australia. For the past 12 years she has trained psychologists, counsellors and social workers in Acceptance and Commitment Therapy, a practical approach that helps people handle difficult thoughts and feelings and act on what matters to them.',
  email: 'hello@example.com',
  /** Describes what is pictured; the image is AI-generated and does not depict a real person or Dr Rivera. */
  heroImageTitle: 'Portrait of a smiling female doctor in a white coat',
  heroImageAlt:
    'AI-generated portrait of a smiling woman with brown hair in a white coat with a stethoscope around her neck, arms crossed, standing in a bright clinic',
  address: {
    locality: 'Sydney',
    country: 'AU',
  },
} as const;
