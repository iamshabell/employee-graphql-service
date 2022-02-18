import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class Employee {

    @Field()
    id: string;
    @Field()
    firstName: string;
    @Field()
    lastName: string;
    @Field()
    designation: string;
    @Field({nullable: true})
    city: string;
}