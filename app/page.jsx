import Wrapper from "@/components/layout/Wrapper";
import MainHome from "../app/(homes)/home_1/page";

export const metadata = {
  title: "Sportaloka || Feel the Freedom with Every Step",
  description: "Adventure portal",
};

export default function Home() {
  return (
    <>
      <Wrapper>
        <MainHome />
      </Wrapper>
    </>
  );
}
