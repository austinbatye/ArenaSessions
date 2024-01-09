import { Pool } from 'pg';

const connectionString =
  'postgres://vwfndtck:U_e8aze8EvIaoIZHdiVjFjBfVdphPT-y@castor.db.elephantsql.com/vwfndtck';

const pool = new Pool({
  connectionString,
});

export default pool;
