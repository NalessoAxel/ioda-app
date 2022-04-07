module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a9e00cde3b13c37457419473cbc2000a'),
  },
});
