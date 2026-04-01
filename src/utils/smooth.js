import Lenis from "lenis";

const smooth = () => {
  const lenis = new Lenis({
    autoRaf: true,
    duration: 0.3,
  });

  lenis.on("scroll", (e) => {
    console.log(e);
  });
};
export default smooth;
