const { createSecureHeaders } = require('next-secure-headers')

module.exports = {
  headers: async () => [
    {
      source: '/(.*)',
      headers: createSecureHeaders({ referrerPolicy: 'same-origin' }),
    },
  ],
}
