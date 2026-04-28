export const config = {
  runtime: 'edge',
};

import serverConfig from '../dist/server/server.js';

export default async function handler(request) {
  return await serverConfig.fetch(request);
}
