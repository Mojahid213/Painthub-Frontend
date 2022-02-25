export default function FooterSection() {
  return (
    <footer className="p-10 mt-10 footer bg-slate-800 text-base-content">
      <div>
        <h1 className="text-4xl text-center font-Kushan text-white cursor-pointer">
          <span className="text-red-400">P</span>aint
          <span className="text-pink-600">H</span>ub
        </h1>
        <p className="text-slate-300 opacity-70 font-Dosis">
          PaintHub service ltd.
          <br />
          Providing service since 1992
        </p>
      </div>
      <div>
        <span className="footer-title font-Roboto-Slab text-gray-200">
          Services
        </span>
        <a className="cursor-pointer font-Dosis text-base text-white">
          Branding
        </a>
        <a className="cursor-pointer font-Dosis text-base text-white">Design</a>
        <a className="cursor-pointer font-Dosis text-base text-white">
          Marketing
        </a>
        <a className="cursor-pointer font-Dosis text-base text-white">
          Advertisement
        </a>
      </div>
      <div>
        <span className="footer-title font-Roboto-Slab text-gray-200">
          Company
        </span>
        <a className="cursor-pointer font-Dosis text-base text-white">
          About us
        </a>
        <a className="cursor-pointer font-Dosis text-base text-white">
          Contact
        </a>
        <a className="cursor-pointer font-Dosis text-base text-white">Jobs</a>
        <a className="cursor-pointer font-Dosis text-base text-white">
          Press kit
        </a>
      </div>
      <div>
        <span className="footer-title font-Roboto-Slab text-gray-200">
          Legal
        </span>
        <a className="cursor-pointer font-Dosis text-base text-white">
          Terms of use
        </a>
        <a className="cursor-pointer font-Dosis text-base text-white">
          Privacy policy
        </a>
        <a className="cursor-pointer font-Dosis text-base text-white">
          Cookie policy
        </a>
      </div>
    </footer>
  );
}
