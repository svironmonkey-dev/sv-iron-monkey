import { ImgHTMLAttributes } from 'react';
interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> { placeholderClassName?: string; }
const LazyImage = ({ placeholderClassName, loading = "lazy", ...props }: LazyImageProps) => <img loading={loading} decoding="async" {...props} />;
export default LazyImage;
