import ContentLayout from "@/layouts/ContentLayout";

const Footer = () => (
  <footer className=" text-gray-400 mt-auto py-4" role="footer">
    <ContentLayout>
      <div className="w-full flex justify-between items-center">
        {/* Left: Copyright info */}
        <p className="text-sm">
          © {new Date().getFullYear()} Base Template. All rights reserved.
        </p>

        {/* Right: Links or social media */}
        <div className="flex space-x-6">
          <a
            href="#"
            className="hover:text-neutral-400 transition-colors duration-200 sm:block hidden"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-neutral-400 transition-colors duration-200 sm:block hidden"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="hover:text-neutral-400 transition-colors duration-200 sm:block hidden"
          >
            Contact
          </a>
        </div>
      </div>
    </ContentLayout>
  </footer>
);

export default Footer;
