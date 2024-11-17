import { Meta, Title } from '@solidjs/meta';
import metadata from './meta.json';
import type { Metadata } from '~/types';

type HeadProps = Metadata;
/**
 * Head component for using dynamic meta tags for the app.
 * For static meta tags, see entry-server.tsx.
 */
export default function Head(props: HeadProps) {
  return (
    <>
      <Meta name="description" content={props.description} />
      <Meta name="keywords" content={props.keywords ?? metadata.keywords} />

      <Meta name="twitter:title" content={props.title} />
      <Meta name="twitter:description" content={props.description} />
      <Meta name="twitter:image" content={props.image ?? metadata.image} />

      <Meta property="og:title" content={props.title} />
      <Meta property="og:description" content={props.description} />
      <Meta property="og:image" content={props.image ?? metadata.image} />

      <Title>{props.title}</Title>
    </>
  );
}
