import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'dbo_Mercadito',
  connector: 'mssql',
  url: 'mssql://mariaaurepaz_SQLLogin_1:jz2p4ftev6@mariaaurepazMercado.mssql.somee.com/mariaaurepazMercado',
  host: 'mariaaurepazMercado.mssql.somee.com',
  port: 1433,
  user: 'mariaaurepaz_SQLLogin_11',
  password: 'jz2p4ftev6',
  database: 'mariaaurepazMercado'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DboMercaditoDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'dbo_Mercadito';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.dbo_Mercadito', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
