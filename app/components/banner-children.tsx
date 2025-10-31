import { type PropsWithChildren } from "react";

export default function BannerChildren({ children }: PropsWithChildren<{ children: React.ReactNode }>) {
  return <div>{children}</div>; 
}
