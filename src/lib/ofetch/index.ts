import { ofetch } from "ofetch";

const apiKey = import.meta.env.VITE_API_KEY;
const baseURL = import.meta.env.VITE_BE_BASE_URL;

export const apiFetch = ofetch.create({
  baseURL: baseURL,
  async onRequest({ options }) {
    options.query = options.query || {};
    options.query.apiKey = apiKey;
  },
});
