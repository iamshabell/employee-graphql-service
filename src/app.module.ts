import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [EmployeeModule, GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
