import type { Schema, Attribute } from '@strapi/strapi';

export interface Category1Component1 extends Schema.Component {
  collectionName: 'components_category1_component1s';
  info: {
    displayName: 'component1';
    icon: 'apps';
  };
  attributes: {
    title1: Attribute.String;
    description1: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'category1.component1': Category1Component1;
    }
  }
}
