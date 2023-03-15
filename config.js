import * as dotenv from 'dotenv';
dotenv.config()

export const config = {}

config.port = process.env.PORT || 3000
config.db_port = process.env.DB_PORT || 3306
config.db_host= process.env.DB_HOST || 'localhost'
config.db_user = process.env.DB_USER|| 'root'
config.db_passaword = process.env.DB_PASSWORD ||''
config.db_name = process.env.BD_NAME || 'informesatm2'


