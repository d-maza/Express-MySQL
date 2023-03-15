import mysql from 'mysql2/promise';
import { config } from '../config.js';

// create the connection to database
export const connection = mysql.createPool({
  host : config.db_host,
  user :config.db_user,
  pasaword: config.db_passaword,
  port: config.db_port,
  database: config.db_name
}
  );

