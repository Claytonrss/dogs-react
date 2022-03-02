interface ImageProps {
  src: string;
  alt: string;
  loading?: 'eager' | 'lazy' | undefined;
  className?: string;
}
