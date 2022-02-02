import React from 'react';
import { PlainClientAPI } from 'contentful-management';
import { FieldExtensionSDK } from '@contentful/app-sdk';
import 'codemirror/lib/codemirror.css';
import { MarkdownEditor } from './MarkdownEditor/index';

interface FieldProps {
  sdk: FieldExtensionSDK;
  cma: PlainClientAPI;
}
const height = 483;
const Field = (props: FieldProps) => {
  props.sdk.window.updateHeight(height);
  // If you only want to extend Contentful's default editing experience
  // reuse Contentful's editor components
  // -> https://www.contentful.com/developers/docs/extensibility/field-editors/
  return <MarkdownEditor isInitiallyDisabled={false} sdk={props.sdk} />;
};

export default Field;
