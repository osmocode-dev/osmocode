use('osmocode');

db.createUser({
  user: 'osmocode',
  pwd: 'password',
  roles: [
    {
      role: 'readWrite',
      db: 'osmocode'
    }
  ]
});
