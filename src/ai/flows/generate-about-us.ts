'use server';

/**
 * @fileOverview Dynamically generates or enhances the 'About Us' section of a website using AI to create a compelling brand story.
 *
 * - generateAboutUs - A function that orchestrates the generation of the 'About Us' content.
 * - GenerateAboutUsInput - The input type for the generateAboutUs function.
 * - GenerateAboutUsOutput - The return type for the generateAboutUs function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAboutUsInputSchema = z.object({
  companyMission: z
    .string()
    .describe('The mission statement of the company.'),
  companyValues: z
    .string()
    .describe('The core values that drive the company.'),
  companyTeamDescription: z
    .string()
    .describe('A brief description of the company team.'),
  existingAboutUsContent: z
    .string()
    .optional()
    .describe('The existing content of the About Us section, if any.'),
});
export type GenerateAboutUsInput = z.infer<typeof GenerateAboutUsInputSchema>;

const GenerateAboutUsOutputSchema = z.object({
  revisedAboutUsContent: z
    .string()
    .describe('The AI-generated or enhanced About Us content.'),
});
export type GenerateAboutUsOutput = z.infer<typeof GenerateAboutUsOutputSchema>;

export async function generateAboutUs(input: GenerateAboutUsInput): Promise<GenerateAboutUsOutput> {
  return generateAboutUsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAboutUsPrompt',
  input: {schema: GenerateAboutUsInputSchema},
  output: {schema: GenerateAboutUsOutputSchema},
  prompt: `You are a marketing expert tasked with crafting compelling "About Us" content for a company's website.

  Incorporate the following information to tell a story that resonates with potential clients:

  Mission: {{{companyMission}}}
  Values: {{{companyValues}}}
  Team Description: {{{companyTeamDescription}}}

  {{#if existingAboutUsContent}}
  Here is the existing "About Us" content that needs to be enhanced:
  {{{existingAboutUsContent}}}
  {{/if}}

  Write engaging and informative content that captures the essence of the company.
  `,
});

const generateAboutUsFlow = ai.defineFlow(
  {
    name: 'generateAboutUsFlow',
    inputSchema: GenerateAboutUsInputSchema,
    outputSchema: GenerateAboutUsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
