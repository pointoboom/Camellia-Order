import * as pg from "pg";
const { Pool } = pg.default;
import dotenv from "dotenv";
dotenv.config();
// const pool = new Pool({
//   connectionString: process.env.DB_KEY,
// });

const pool = new Pool({
  connectionString:
    "postgres://xwahxqyk:YAM6IeB8cu5_Vc9I_RHtVweQmgwl0fNj@john.db.elephantsql.com/xwahxqyk",
});

export { pool };
