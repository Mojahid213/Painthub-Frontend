export default function Navbar() {
  return (
    <>
      <nav>
        <div className="container md:flex justify-between items-center py-5">
          {/* Branding Heading */}
          <div>
            <h1 className="text-4xl font-Kushan">
              <span className="text-red-600">P</span>aint
              <span className="text-red-600">H</span>ub
            </h1>
          </div>
          {/* Menu items */}
          <div className="text-center">
            <ul className="md:flex text-xl font-Roboto-Slab gap-10">
              <li className="my-5">About</li>
              <li className="my-5">Home</li>
              <li className="my-5">Services</li>
              <li className="my-5">Contact</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
