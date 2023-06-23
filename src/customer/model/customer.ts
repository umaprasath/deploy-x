import { ApiProperty } from "@nestjs/swagger";

// export class CustomerModel {
//     @ApiProperty()
//     name: string;
//     @ApiProperty()
//     organisation: string;
//     @ApiProperty()
//     email: string;
//     @ApiProperty()
//     _id: number;
// }

export class NonProd {
    @ApiProperty()
    count: string
    @ApiProperty()
    names: any[]
}

export class Prod {
    @ApiProperty()
    count: string
    @ApiProperty()
    names: any[]
}

export class Environment {
    @ApiProperty()
    nonProd: NonProd
    @ApiProperty()
    prod: Prod
}



export class ServiceAccountUsername {
    @ApiProperty()
    clientId: string
    @ApiProperty()
    secret: string
}

export class Cloud {
    @ApiProperty()
    serviceAccountUsername: ServiceAccountUsername
}

export class SourceProvider {
    @ApiProperty()
    clientId: string
    @ApiProperty()
    secret: string
    @ApiProperty()
    token: string
}

export class NonProd2 {
    @ApiProperty()
    count: string
    @ApiProperty()
    names: any[]
}

export class Prod2 {
    @ApiProperty()
    count: string
    @ApiProperty()
    names: any[]
}

export class Database {
    @ApiProperty()
    nonProd: NonProd2
    @ApiProperty()
    prod: Prod2
}

export interface Range { }

export interface Workload { }

export class Resources {
    @ApiProperty()
    database: Database
    @ApiProperty()
    network: Network[]
    @ApiProperty()
    workload: Workload
}


export class CustomerModel {
    @ApiProperty()
    name: string;
    @ApiProperty()
    organisation: string;
    @ApiProperty()
    resourcePrefix: string;
    @ApiProperty()
    cloud: Cloud;
    @ApiProperty()
    sourceProvider: SourceProvider;
    @ApiProperty()
    environment: Environment;
    @ApiProperty()
    resources: Resources;
}

export class Network {
    @ApiProperty()
    type: string
    @ApiProperty()
    resource: string
    @ApiProperty()
    env?: string
    @ApiProperty()
    range: Range
}






