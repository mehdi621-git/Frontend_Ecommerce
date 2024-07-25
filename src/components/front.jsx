import { Link } from "react-router-dom"
import p1 from "../assets/01f472cb7aa7761567d29a1a54f60541.png";
import p2 from "../assets/24f025a0a966136e3a3ae50c9b745af7.png";
import p3 from "../assets/transparent-iphone-frame-orange-phone-logo-black-and-white-des-orange-phone-with-apple-logo-on-back-sleek-design65c31eba9a2ad1.6135871217072862026315.png"
import p4 from "../assets/transparent-watercolor-headphones-paint-splatter-headphones-mu-colorful-watercolor-paint-splashes-form-headphones65509b104977c9.9186737816997813923009.png"
import p5 from "../assets/kisspng-samsung-galaxy-j6-2-18-j6-g-3gb-32gb-dual-sim-samsung-galaxy-j6-2-18-tele2-5b6e634be015a0.0526040215339610359179.png"
import p6 from "../assets/kisspng-beats-solo-2-beats-electronics-headphones-bluetoot-5b637e0974e627.6765931315332469854788.png"
import p7 from "../assets/aaxe09bqn.png"
const Front =()=>
{

return <>
<div className="relative overflow-hidden bg-white ">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
             Phone Styles Where Begins
            </h1>
            <p className="mt-4 text-xl text-gray-500">
            Experience the pinnacle of innovation with the Nexus X100, the ultimate smartphone designed for the modern world. Engineered with cutting-edge technology, this device promises to transform your digital life.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          alt=""
                          src={p1}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src={p2}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src={p3}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src={p4}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src={p5}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src={p6}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src={p7}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link to={'/login'}
                href="#"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                Shop Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
</>
}
export default Front