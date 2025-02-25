import { Type } from '@nestjs/common';
import { GqlTypeReference } from '../../interfaces';
import { TypeOptions } from '../../interfaces/type-options.interface';
import { DirectiveMetadata } from './directive.metadata';
import { MethodArgsMetadata } from './param.metadata';

export interface ResolverClassMetadata {
  target: Function;
  typeFn: (of?: void) => Type<unknown>;
  isAbstract?: boolean;
  parent?: ResolverClassMetadata;
}

export interface BaseResolverMetadata {
  target: Function;
  methodName: string;
  schemaName: string;
  description?: string;
  deprecationReason?: string;
  methodArgs?: MethodArgsMetadata[];
  classMetadata?: ResolverClassMetadata;
  directives?: DirectiveMetadata[];
}

export interface ResolverTypeMetadata extends BaseResolverMetadata {
  typeFn: (type?: void) => GqlTypeReference;
  returnTypeOptions: TypeOptions;
}

export interface FieldResolverMetadata extends BaseResolverMetadata {
  kind: 'internal' | 'external';
  typeOptions?: TypeOptions;
  typeFn?: (type?: void) => GqlTypeReference;
  objectTypeFn?: (of?: void) => Type<unknown>;
}
