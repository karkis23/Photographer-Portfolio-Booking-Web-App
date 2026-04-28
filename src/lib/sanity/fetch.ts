import { client } from "./client";

type SanityFetchParams = {
  query: string;
  params?: Record<string, unknown>;
  tags?: string[];
};

export async function sanityFetch<T>({
  query,
  params = {},
  tags = [],
}: SanityFetchParams): Promise<T> {
  return client.fetch<T>(query, params, {
    next: {
      revalidate: false, // Only revalidate via webhook
      tags,
    },
  });
}
