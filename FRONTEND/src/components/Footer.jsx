import FooterLinksList from "./FooterLinksList";
import Logo from "./Logo";

export default function Footer() {

    const quickLinks = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "Collections",
            href: "/collections"
        },
        {
            name: "New Arrivals",
            href: "#new-arrival"
        },
        {
            name: "Best Sellers",
            href: "#best-seller"
        },
        {
            name: "Custom Curtains",
            href: "/custom-cutains"
        },
    ]

    const customerSupportLinks = [
        {
            name: "Contact Us",
            href: "/contact-us"
        },
        {
            name: "Order Tracking",
            href: "#"
        },
        {
            name: "Shipping Policy",
            href: "/shipping-policy"
        },
        {
            name: "Return & Refund Policy",
            href: "/refund-return-policy"
        },
        {
            name: "FAQs",
            href: "/faqs"
        }
    ]

    const socialMediaLinks = [
        {
            name: "Instagram",
            href: "https://www.instagram.com/priyanshihomedecor"
        },
        {
            name: "WhatsApp",
            href: "https://wa.me/+918053445590?text=Hii"
        },
        {
            name: "Facebook",
            href: "#"
        },
        {
            name: "Pinterest",
            href: "#"
        }
    ]

    return (
        <footer className="bg-background text-forground px-6 md:px-12 py-6 border-t border-zinc-300">
            <div className="max-w-7xl mx-auto flex flex-col gap-4">

                {/* Logo*/}
                <Logo />

                {/* Links */}
                <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* Quick Links */}
                    <FooterLinksList title={"QUICK LINKS"} links={quickLinks} />
                    {/* Customer Support Links */}
                    <div className="flex flex-col md:items-center">
                        <FooterLinksList title={"CUSTOMER SUPPORT"} links={customerSupportLinks} />
                    </div>
                    {/* Social Medias Links */}
                    <div className="flex flex-col md:items-end">
                        <FooterLinksList title={"SOCIAL MEDIAS"} links={socialMediaLinks} />
                    </div>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="text-center text-xs text-gray-500 mt-10">
                © {new Date().getFullYear()} Priyanshi Home Decor. All rights reserved.
            </div>
        </footer>
    );
}