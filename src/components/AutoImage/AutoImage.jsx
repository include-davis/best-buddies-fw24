import Image from "next/image";

export default function AutoImage({
  height: _,
  width: __,
  alt,
  style,
  ...rest
}) {
  return (
    <Image
      height={4000}
      width={4000}
      alt={alt}
      {...rest}
      style={style ?? { width: "100%", height: "auto", aspectRatio: "1" }}
    />
  );
}
