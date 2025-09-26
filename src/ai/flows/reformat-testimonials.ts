'use server';

/**
 * @fileOverview This file contains a Genkit flow to reformat client testimonials for consistent styling.
 *
 * - reformatTestimonials - A function that reformats client testimonials.
 * - ReformatTestimonialsInput - The input type for the reformatTestimonials function.
 * - ReformatTestimonialsOutput - The output type for the reformatTestimonials function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ReformatTestimonialsInputSchema = z.object({
  testimonials: z
    .array(z.string())
    .describe('An array of client testimonials to be reformatted.'),
});
export type ReformatTestimonialsInput = z.infer<typeof ReformatTestimonialsInputSchema>;

const ReformatTestimonialsOutputSchema = z.object({
  reformattedTestimonials: z
    .array(z.string())
    .describe('An array of reformatted client testimonials with consistent styling.'),
});
export type ReformatTestimonialsOutput = z.infer<typeof ReformatTestimonialsOutputSchema>;

export async function reformatTestimonials(input: ReformatTestimonialsInput): Promise<ReformatTestimonialsOutput> {
  return reformatTestimonialsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'reformatTestimonialsPrompt',
  input: {schema: ReformatTestimonialsInputSchema},
  output: {schema: ReformatTestimonialsOutputSchema},
  prompt: `You are an expert at reformatting client testimonials to have a consistent style.

  Your goal is to make the testimonials more visually appealing and cohesive.
  Make sure each testimonial has a clear attribution to the client.
  Ensure consistent formatting (e.g., font, spacing, punctuation) across all testimonials.

  Here are the testimonials to reformat:

  {{#each testimonials}}
  - {{{this}}}
  {{/each}}
  `,
});

const reformatTestimonialsFlow = ai.defineFlow(
  {
    name: 'reformatTestimonialsFlow',
    inputSchema: ReformatTestimonialsInputSchema,
    outputSchema: ReformatTestimonialsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
