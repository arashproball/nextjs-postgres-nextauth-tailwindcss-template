import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/logo.svg"

export default function Brand() {
    return (
        <Link href="/">
            <Image alt="آس استون | مرجع سنگ نما و سنگ ساختمانی" src={Logo} width={206} height={48} />
        </Link>
    );
}
