import Logo from "../assets/logoFooter.png";
import x from  "../assets/X.png"
import built from "../assets/built.webp"
export default function Footer() {
  return (
    <div className="mx-[8%]  py-56  flex items-center justify-between">
      <img src={Logo} className="w-[20%]" />
      <div className="flex flex-col gap-4 items-end">
        <img src={x} className="w-[5%]" />
        <img src={built} className="w-[30%]" />
      </div>
    </div>
  );
}
